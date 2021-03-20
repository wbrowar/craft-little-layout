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

import 'vite/dynamic-import-polyfill';
import { createApp } from 'vue';
import LittleLayoutField from './components/LittleLayoutField.vue';
import './global.css';


;(function ( $, window, document, undefined ) {

    var pluginName = "LittleLayout",
        defaults = {
        };

    // Plugin constructor
    function Plugin( element, options ) {
        this.element = element;

        this.options = $.extend( {}, defaults, options) ;

        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }

    Plugin.prototype = {

        init: function(id) {
            var _this = this;

            console.log(_this.options);

            $(function () {

                const app = document.querySelector(`[data-little-layout="${ _this.options.namespacedId }"]`);
                if (app) {
                    createApp(LittleLayoutField, {field: _this.options, ...app.dataset}).mount(app);
                }

            });
        }
    };

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName,
                    new Plugin( this, options ));
            }
        });
    };

})( jQuery, window, document );

