// @ts-nocheck
/**
 * Little Layout plugin for Craft CMS
 *
 * Layout Field JS
 *
 * @author    Will Browar
 * @copyright Copyright (c) 2021 Will Browar
 * @link      https://wbrowar.com
 * @package   LittleLayout
 * @since     1.0.0LittleLayoutLayout
 */

import { log } from './utils/console'
import { LittleLayoutField } from './components/LittleLayoutField'
import { LittleLayoutFieldControl } from './components/LittleLayoutFieldControl'
import { LittleLayoutFieldSettings } from './components/LittleLayoutFieldSettings'
import './little-layout.css'

// Register light DOM field component that includes input element for the page.
if (!customElements.get('little-layout-field')) {
  customElements.define('little-layout-field', LittleLayoutField)
  log('Little Layout Field: web component registered')
}

// Register shared layout component (including layout boxes).
if (!customElements.get('little-layout-field-control')) {
  customElements.define('little-layout-field-control', LittleLayoutFieldControl)
  log('Little Layout Control: web component registered')
}

// Register light DOM settings component that includes input element for the page.
if (!customElements.get('little-layout-field-settings')) {
  customElements.define('little-layout-field-settings', LittleLayoutFieldSettings)
  log('Little Layout Field Settings: web component registered')
}
