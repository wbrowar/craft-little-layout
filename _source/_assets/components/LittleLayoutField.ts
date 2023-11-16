import { html, LitElement, nothing } from 'lit'
import { property, state } from 'lit/decorators.js'
import { log, table } from '../utils/console'

export class LittleLayoutField extends LitElement {
  /**
   * Pass-through prop based on field setting.
   */
  @property({ type: Boolean })
  clearable = false

  /**
   * The default value of the field, based on the field’s current value or the default set in field settings.
   */
  @property({ attribute: 'default-value' })
  defaultValue: string

  /**
   * Pass-through prop based on field setting.
   */
  @property({ type: Boolean })
  editable = false

  /**
   * The ID attribute for the input field.
   */
  @property({ attribute: 'field-id' })
  fieldId: string

  /**
   * The name attribute for the input field.
   */
  @property({ attribute: 'field-name' })
  fieldName: string

  /**
   * Pass-through prop based on field setting.
   */
  @property({ attribute: 'layout-cols', type: Number })
  layoutCols: number

  /**
   * Pass-through prop based on field setting.
   */
  @property({ attribute: 'layout-rows', type: Number })
  layoutRows: number

  /**
   * Pass-through prop based on field setting.
   */
  @property({ attribute: 'selection-mode' })
  selectionMode: 'box' | 'single'

  /**
   * =========================================================================
   * STATE
   * =========================================================================
   */
  /**
   * The value attribute for the input field. This is updated via an event from the child component.
   */
  @state()
  private _fieldValue: string

  /**
   * =========================================================================
   * EVENTS
   * =========================================================================
   */
  /**
   * Handles the `@value-updated` event. Sets the `_fieldValue` passed in from the event.
   */
  private _fieldValueListener(e) {
    this._fieldValue = e.detail.fieldValue
    this._setInputValueFromFieldValue()
  }

  /**
   * =========================================================================
   * METHODS
   * =========================================================================
   */
  /**
   * Sets `_fieldValue` from the value of the input.
   */
  private _getFieldValueFromInput() {
    const littleLayoutInput = this.querySelector('input')

    if (littleLayoutInput) {
      this._fieldValue = littleLayoutInput.value
    }
  }

  /**
   * Sets the value of the input from `_fieldValue`.
   */
  private _setInputValueFromFieldValue() {
    const littleLayoutInput = this.querySelector('input')

    if (littleLayoutInput) {
      littleLayoutInput.value = this._fieldValue
    }
  }

  /**
   * =========================================================================
   * LIFECYCLE
   * =========================================================================
   */
  protected connectedCallback() {
    super.connectedCallback()

    this._getFieldValueFromInput()

    const littleLayoutInput = this.querySelector('input')

    if (littleLayoutInput) {
      littleLayoutInput.addEventListener('change', this._getFieldValueFromInput)
    }
    if (littleLayoutInput) {
      littleLayoutInput.addEventListener('input', this._getFieldValueFromInput)
    }

    log('Little Layout: connected')
    table({
      clearable: this.clearable,
      layoutCols: this.layoutCols,
      defaultValue: this.defaultValue,
      editable: this.editable,
      fieldId: this.fieldId,
      fieldName: this.fieldName,
      layoutRows: this.layoutRows,
      selectionMode: this.selectionMode,
    })
  }

  protected disconnectedCallback() {
    super.disconnectedCallback()

    const littleLayoutInput = this.querySelector('input')

    if (littleLayoutInput) {
      littleLayoutInput.removeEventListener('change', this._getFieldValueFromInput)
    }
    if (littleLayoutInput) {
      littleLayoutInput.removeEventListener('input', this._getFieldValueFromInput)
    }
  }

  protected render() {
    return html`
      <little-layout-field-control
        ?clearable="${this.clearable}"
        ?editable="${this.editable}"
        field-default="${this._fieldValue}"
        layout-cols="${this.layoutCols}"
        layout-rows="${this.layoutRows}"
        selection-mode="${this.selectionMode}"
        @value-updated="${this._fieldValueListener}"
      ></little-layout-field-control>
    `
  }

  /**
   * Changes the render mode for this component from shadow DOM to light DOM.
   */
  protected createRenderRoot() {
    return this
  }
}
