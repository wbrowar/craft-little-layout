import { css, html, LitElement, nothing, type PropertyValues } from 'lit'
import { property, state } from 'lit/decorators.js'

export class LittleLayoutFieldControl extends LitElement {
  /**
   * =========================================================================
   * PROPS
   * =========================================================================
   */
  /**
   * Enables a button that removes the current value.
   */
  @property({ type: Boolean })
  clearable = false

  /**
   * Enables the ability to use the field.
   */
  @property({ type: Boolean })
  editable = false

  /**
   * The default value of the field, used when setting the initial value.
   */
  @property({ attribute: 'field-default' })
  fieldDefault: string

  /**
   * The amount of columns defined in the field’s settings.
   */
  @property({ attribute: 'layout-cols', type: Number })
  layoutCols: number

  /**
   * The amount of rows defined in the field’s settings.
   */
  @property({ attribute: 'layout-rows', type: Number })
  layoutRows: number

  /**
   * Allows the user to select multiple layout boxes or a single box.
   * This is defined in the field’s settings.
   */
  @property({ attribute: 'selection-mode' })
  selectionMode: 'box' | 'single' = 'box'

  /**
   * =========================================================================
   * STATE
   * =========================================================================
   */
  /**
   * Status that determines what action a user can take next.
   */
  @state()
  protected _status: 'idle' | 'inputStarted' = 'idle'

  /**
   * When selecting a single block in the "box" `selectionMode`, this timer will automatically deselect a box if the box has only been clicked once.
   */
  @state()
  protected _timer

  /**
   * The coordinate of the starting X value.
   */
  @state()
  protected _xStart = undefined

  /**
   * The coordinate of the ending X value.
   */
  @state()
  protected _xEnd = undefined

  /**
   * The coordinate of the starting Y value.
   */
  @state()
  protected _yStart = undefined

  /**
   * The coordinate of the ending Y value.
   */
  @state()
  protected _yEnd = undefined

  /**
   * =========================================================================
   * COMPUTED
   * =========================================================================
   */
  /**
   * Computes the field value as a string. When there is a field value it will return a set of coordinates, otherwise it will return the string: "empty".
   */
  @state()
  protected _fieldValue: string
  private _getFieldValue() {
    if (
      typeof this._xStart === 'number' &&
      typeof this._xEnd === 'number' &&
      typeof this._yStart === 'number' &&
      typeof this._yEnd === 'number'
    ) {
      return `${this._xStart}|${this._xEnd}|${this._yStart}|${this._yEnd}`
    }
    return 'empty'
  }

  /**
   * Indicates whether or not at least one box has been selected.
   */
  @state()
  protected _hasSelected: boolean
  private _getHasSelected() {
    if (this._fieldValue === 'empty') {
      return false
    }
    return (
      typeof this._xStart === 'number' ||
      typeof this._xEnd === 'number' ||
      typeof this._yStart === 'number' ||
      typeof this._yEnd === 'number'
    )
  }

  /**
   * An array of selected box coordinates.
   */
  @state()
  protected _selectedBoxes: string[]
  private _getSelectedBoxes() {
    const selected = []

    if (this.selectionMode === 'box') {
      if (
        typeof this._xStart === 'number' &&
        typeof this._yStart === 'number' &&
        typeof this._xEnd === 'number' &&
        typeof this._yEnd === 'number'
      ) {
        for (let x = this._xStart; x < this._xEnd + 1; x++) {
          for (let y = this._yStart; y < this._yEnd + 1; y++) {
            selected.push(`${x}|${y}`)
          }
        }
      }
    } else if (this.selectionMode === 'single') {
      selected.push(`${this._xStart}|${this._yStart}`)
    }

    return selected
  }

  /**
   * =========================================================================
   * EVENTS
   * =========================================================================
   */
  /**
   * Event that passes the field value up to the parent component.
   */
  private _dispatchFieldValue() {
    if (this._fieldValue) {
      this.dispatchEvent(
        new CustomEvent('value-updated', {
          bubbles: true,
          composed: true,
          detail: { fieldValue: this._fieldValue },
        })
      )
    }
  }

  /**
   * =========================================================================
   * METHODS
   * =========================================================================
   */
  /**
   * Adds modifier classes to each layout box, based on coordinates and field settings.
   */
  private _boxClassesForBox(col: number, row: number) {
    const classes = []
    if (this.editable) {
      classes.push(`layout-box--editable`)
    }

    if (this._selectedBoxes.includes(`${col}|${row}`)) {
      classes.push(`layout-box--selected`)
    } else {
      classes.push(`layout-box--not-selected`)
    }

    if (col === 1 && row === 1) {
      classes.push(`layout-box--rounded-tl`)
    }
    if (col === 1 && row === this.layoutRows) {
      classes.push(`layout-box--rounded-bl`)
    }
    if (col === this.layoutCols && row === 1) {
      classes.push(`layout-box--rounded-tr`)
    }
    if (col === this.layoutCols && row === this.layoutRows) {
      classes.push(`layout-box--rounded-br`)
    }

    return classes.join(' ')
  }

  /**
   * Handles clicking on a layout box.
   */
  private _boxClicked(coordinates) {
    const x = coordinates[0]
    const y = coordinates[1]

    if (this._status === 'idle') {
      this._xStart = this._xEnd = x
      this._yStart = this._yEnd = y

      if (this.selectionMode === 'box') {
        this._timer = setInterval(() => {
          document.activeElement.blur()
          this._status = 'idle'
        }, 10000)
        this._status = 'inputStarted'
      } else if (this.selectionMode === 'single') {
        document.activeElement.blur()
      }
    } else if (this._status === 'inputStarted') {
      if (x < this._xStart) {
        this._xEnd = this._xStart
        this._xStart = x
      } else {
        this._xEnd = x
      }
      if (y < this._yStart) {
        this._yEnd = this._yStart
        this._yStart = y
      } else {
        this._yEnd = y
      }
      this._endTimer()
      document.activeElement.blur()
    }
  }

  /**
   * Handles clicking on the clear button and clearing the selected value.
   */
  private _clearButtonClicked() {
    this._xStart = this._xEnd = this._yStart = this._yEnd = undefined
    this._endTimer()
  }

  /**
   * Resets the timeout and sets the current status to `idle`.
   */
  private _endTimer() {
    clearInterval(this._timer)
    this._status = 'idle'
  }

  /**
   * =========================================================================
   * LIFECYCLE
   * =========================================================================
   */
  connectedCallback() {
    super.connectedCallback()

    // Set intial values
    const startingValue = this.fieldDefault ? this.fieldDefault.split('|') : []
    this._xStart = startingValue[0] ? parseInt(startingValue[0]) : undefined
    this._xEnd = startingValue[1] ? parseInt(startingValue[1]) : undefined
    this._yStart = startingValue[2] ? parseInt(startingValue[2]) : undefined
    this._yEnd = startingValue[3] ? parseInt(startingValue[3]) : undefined

    // Set computed values
    this._fieldValue = this._getFieldValue()
    this._hasSelected = this._getHasSelected()
    this._selectedBoxes = this._getSelectedBoxes()
  }
  protected render() {
    const cols = this.layoutCols
    const rows = this.layoutRows

    const checkboxRows = []

    // Loop through rows and columns to output layout grid
    for (let r = 0; r < rows; r++) {
      const checkboxCols = []

      for (let c = 0; c < cols; c++) {
        const column = c + 1
        const row = r + 1
        checkboxCols.push(
          html` <button
            class="layout-box ${this._boxClassesForBox(column, row)}"
            type="button"
            @click="${this.editable ? () => this._boxClicked([column, row]) : nothing}"
          ></button>`
        )
      }

      checkboxRows.push(html`<div class="layout-boxes-row">${checkboxCols}</div>`)
    }

    // Add debug information during development
    const debugInfo = html`<div>
      <p>CLEARABLE: ${this.clearable}</p>
      <p>SELECTION MODE: ${this.selectionMode}</p>
      <p>STATUS: ${this._status}</p>
      <p>X START: ${this._xStart}</p>
      <p>X END: ${this._xEnd}</p>
      <p>Y START: ${this._yStart}</p>
      <p>Y END: ${this._yEnd}</p>
      <p>FIELD VALUE: ${this._fieldValue}</p>
    </div>`

    return html`
      <div class="container">
        <div class="field">
          <div class="layout-boxes">${checkboxRows}</div>
          <div>
            ${this.clearable && this.editable && this._hasSelected
              ? html`<button
                  type="button"
                  class="clear-button delete icon"
                  title="Clear"
                  aria-label="Clear"
                  @click="${this._clearButtonClicked}"
                ></button>`
              : nothing}
          </div>
        </div>
      </div>
      ${import.meta.env.DEV && import.meta.env.VITE_SHOW_FIELD_DEBUG_INFO === 'true' ? debugInfo : nothing}
    `
  }

  protected willUpdate(changedProperties: PropertyValues<this>) {
    /**
     * Set computed values for:
     *   _fieldValue
     *   _hasSelected
     */
    if (
      changedProperties.has('_xStart') ||
      changedProperties.has('_xEnd') ||
      changedProperties.has('_yStart') ||
      changedProperties.has('_yEnd')
    ) {
      this._fieldValue = this._getFieldValue()

      this._hasSelected = this._getHasSelected()
    }

    /**
     * Sends the `_fieldValue` up to the parent component to change the light DOM input field.
     */
    if (changedProperties.has('_fieldValue')) {
      this._dispatchFieldValue()
    }

    /**
     * Set computed values for:
     *   _selectedBoxes
     */
    if (
      changedProperties.has('_xStart') ||
      changedProperties.has('_xEnd') ||
      changedProperties.has('_yStart') ||
      changedProperties.has('_yEnd') ||
      changedProperties.has('selectionMode')
    ) {
      this._selectedBoxes = this._getSelectedBoxes()
    }
  }

  /**
   * Changes the render mode for this component from shadow DOM to light DOM.
   */
  protected createRenderRoot() {
    return this
  }
}
