import { html, LitElement, nothing } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { log, table } from '../utils/console'

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
   * TODO
   */
  @state()
  protected _boxSize = ''

  /**
   * The value attribute for the input field. This is updated via an event from the child component.
   */
  @state()
  protected _defaultValue = ''

  /**
   * TODO
   */
  @state()
  protected _layoutCols = 1

  /**
   * TODO
   */
  @state()
  protected _layoutRows = 1

  /**
   * TODO
   */
  @state()
  protected _selectionMode: 'box' | 'single' = 'box'

  /**
   * =========================================================================
   * EVENTS
   * =========================================================================
   */
  /**
   * Handles the `@value-updated` event. Sets the `_defaultValue` passed in from the event.
   */
  private _defaultValueListener(e) {
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
  private _getSettingsFromField(handle: string, field: { value: any }) {
    switch (handle) {
      case 'boxSize':
        log('Settings updated: boxSize', field.value)
        this._boxSize = field.value
        break
      case 'cols':
        log('Settings updated: cols', field.value)
        this._layoutCols = field.value
        break
      case 'rows':
        log('Settings updated: rows', field.value)
        this._layoutRows = field.value
        break
      case 'selectionMode':
        log('Settings updated: selectionMode', field.value)
        this._selectionMode = field.value
        break
    }
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

    const settingsFields: Record<string, string> = {
      boxSize: `[data-attribute="boxSize"] input`,
      cols: `[data-attribute="cols"] input`,
      rows: `[data-attribute="rows"] input`,
      selectionMode: `[data-attribute="selectionMode"] select`,
    }

    Object.entries(settingsFields).forEach(([handle, selector]) => {
      const field = this.querySelector(selector)
      if (field) {
        field.addEventListener('change', (e) => {
          log(`Field updated: ${handle}`)
          this._getSettingsFromField(handle, field)
        })
        this._getSettingsFromField(handle, field)
      } else {
        log(`Field not found: ${handle}`)
      }
    })
  }

  render() {
    return html`
      <little-layout-field-control
        style="${this._boxSize ? `--little-layout-box-size: ${this._boxSize}` : nothing}"
        clearable="true"
        editable="true"
        field-default="${this.defaultValue}"
        layout-cols="${this._layoutCols}"
        layout-rows="${this._layoutRows}"
        selection-mode="${this._selectionMode}"
        @value-updated="${this._defaultValueListener}"
      ></little-layout-field-control>
      <input
        type="hidden"
        id="${this.fieldId}"
        name="${this.fieldName}"
        autocomplete="off"
        value="${this._defaultValue}"
      />
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
