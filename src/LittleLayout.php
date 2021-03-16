<?php
/**
 * Little Layout plugin for Craft CMS 3.x
 *
 * SOME_DESCRIPTION
 *
 * @link      https://wbrowar.com
 * @copyright Copyright (c) 2021 Will Browar
 */

namespace wbrowar\littlelayout;

use wbrowar\littlelayout\fields\Layout as LayoutField;

use Craft;
use craft\base\Plugin;
use craft\services\Plugins;
use craft\events\PluginEvent;
use craft\services\Fields;
use craft\events\RegisterComponentTypesEvent;

use yii\base\Event;

/**
 * Class LittleLayout
 *
 * @author    Will Browar
 * @package   LittleLayout
 * @since     1.0.0
 *
 */
class LittleLayout extends Plugin
{
    // Static Properties
    // =========================================================================

    /**
     * @var LittleLayout
     */
    public static $plugin;

    // Public Properties
    // =========================================================================

    /**
     * @var string
     */
    public $schemaVersion = '1.0.0';

    /**
     * @var bool
     */
    public $hasCpSettings = false;

    /**
     * @var bool
     */
    public $hasCpSection = false;

    // Public Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public function init()
    {
        parent::init();
        self::$plugin = $this;

        Event::on(
            Fields::class,
            Fields::EVENT_REGISTER_FIELD_TYPES,
            function (RegisterComponentTypesEvent $event) {
                $event->types[] = LayoutField::class;
            }
        );

        Event::on(
            Plugins::class,
            Plugins::EVENT_AFTER_INSTALL_PLUGIN,
            function (PluginEvent $event) {
                if ($event->plugin === $this) {
                }
            }
        );

        Craft::info(
            Craft::t(
                'little-layout',
                '{name} plugin loaded',
                ['name' => $this->name]
            ),
            __METHOD__
        );
    }

    // Protected Methods
    // =========================================================================

}
