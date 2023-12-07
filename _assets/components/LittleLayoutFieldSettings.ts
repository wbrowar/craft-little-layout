import { html, LitElement, nothing } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { log, table } from '../utils/console'
import { getTableValues } from '../utils/craft-table-parser.ts'
import type { BoxIcons, SelectionMode } from '../types'

@customElement('little-layout-field-settings')
export class LittleLayoutFieldSettings extends LitElement {
  /**
   * The default value of the field, based on the field’s current value or the default set in field settings.
   */
  @property({ attribute: 'default-value' })
  defaultValue = ''

  /**
   * The ID attribute for the input field.
   */
  @property({ attribute: 'field-id' })
  fieldId = ''

  /**
   * The name attribute for the input field.
   */
  @property({ attribute: 'field-name' })
  fieldName = ''

  /**
   * =========================================================================
   * STATE
   * =========================================================================
   */
  /**
   * Value of the Box Icons settings field.
   */
  @state()
  protected _boxIcons: BoxIcons = {}

  /**
   * Value of the Box Size settings field.
   */
  @state()
  protected _boxSize = ''

  /**
   * The value attribute for the input field. This is updated via an event from the child component.
   */
  @state()
  protected _defaultValue = ''

  /**
   * Value of the Layout Columns settings field.
   */
  @state()
  protected _layoutCols = 1

  /**
   * Value of the Layout Rows settings field.
   */
  @state()
  protected _layoutRows = 1

  /**
   * Value of the Selection Mode settings field.
   */
  @state()
  protected _selectionMode: SelectionMode = 'box'

  /**
   * =========================================================================
   * EVENTS
   * =========================================================================
   */
  /**
   * Handles the `@value-updated` event. Sets the `_defaultValue` passed in from the event.
   */
  private _defaultValueListener(e: CustomEvent) {
    this._defaultValue = e.detail.fieldValue
  }

  /**
   * =========================================================================
   * METHODS
   * =========================================================================
   */
  /**
   * Get settings options from field settings fields.
   */
  private _getSettingsFromField(handle: string, field: HTMLInputElement) {
    switch (handle) {
      case 'boxSize':
        log('Settings updated: boxSize', field.value)
        this._boxSize = field.value
        break
      case 'cols':
        log('Settings updated: cols', field.value)
        this._layoutCols = parseInt(field.value)
        break
      case 'rows':
        log('Settings updated: rows', field.value)
        this._layoutRows = parseInt(field.value)
        break
      case 'selectionMode':
        log('Settings updated: selectionMode', field.value)
        this._selectionMode = field.value as SelectionMode
        break
    }
  }

  /**
   * Update `_boxIcons` with values from the Box Icons settings table.
   */
  private _getBoxIconsFromTable(iconField: HTMLTableElement) {
    // Reset `_boxIcons`.
    this._boxIcons = {}

    // Add and format each row of icon data for `_boxIcons`.
    const iconRows = iconField ? getTableValues(iconField) : []
    iconRows.forEach((icon) => {
      if (icon.column && icon.row) {
        this._boxIcons[`${icon.column}|${icon.row}`] = {
          description: icon.description ?? undefined,
          id: icon.icon,
        }
      }
    })
  }

  /**
   * =========================================================================
   * LIFECYCLE
   * =========================================================================
   */
  connectedCallback() {
    super.connectedCallback()
    log('Little Layout Settings: connected')
    table({
      defaultValue: this.defaultValue,
      fieldId: this.fieldId,
      fieldName: this.fieldName,
    })

    // A lookup of field handles and their CSS selectors.
    const settingsFields: Record<string, string> = {
      boxSize: `[data-attribute="boxSize"] input`,
      cols: `[data-attribute="cols"] input`,
      rows: `[data-attribute="rows"] input`,
      selectionMode: `[data-attribute="selectionMode"] select`,
    }

    // Set event listener to watch field for changes, then get initial value.
    Object.entries(settingsFields).forEach(([handle, selector]) => {
      const field: HTMLInputElement | null = this.querySelector(selector)
      if (field) {
        field.addEventListener('change', () => {
          log(`Field updated: ${handle}`)
          this._getSettingsFromField(handle, field)
        })
        this._getSettingsFromField(handle, field)
      } else {
        log(`Field not found: ${handle}`)
      }
    })

    const iconField: HTMLTableElement | null = this.querySelector('.field[data-attribute="boxIcons"] table')

    if (iconField) {
      // Get value from Icon table field.
      this._getBoxIconsFromTable(iconField)

      // Set event listener to watch for changes in Icon table field.
      const iconObserver = new MutationObserver(() => {
        this._getBoxIconsFromTable(iconField)
      })

      iconObserver.observe(iconField, { attributes: true, childList: true, subtree: true })
    }
  }

  render() {
    return html`
      <little-layout-field-control
        style="${this._boxSize ? `--little-layout-box-size: ${this._boxSize}` : nothing}"
        clearable="true"
        editable="true"
        box-icons="${JSON.stringify(this._boxIcons)}"
        field-default="${this.defaultValue}"
        layout-cols="${this._layoutCols}"
        layout-rows="${this._layoutRows}"
        selection-mode="${this._selectionMode}"
        @value-updated="${this._defaultValueListener}"
      >
        <input
          type="hidden"
          id="${this.fieldId}"
          name="${this.fieldName}"
          autocomplete="off"
          value="${this._defaultValue}"
        />
      </little-layout-field-control>
    `
  }

  /**
   * Changes the render mode for this component from shadow DOM to light DOM.
   */
  protected createRenderRoot() {
    return this
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'little-layout-field-settings': LittleLayoutFieldSettings
  }
}
