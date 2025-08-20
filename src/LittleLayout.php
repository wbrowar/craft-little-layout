<?php
/**
 * Little Layout plugin for Craft CMS 3.x
 *
 * A compact, visual way to lay out fields, elements, and Matrix blocks.
 *
 * @link      https://wbrowar.com
 * @copyright Copyright (c) 2021 Will Browar
 */

namespace wbrowar\littlelayout;

use Craft;
use craft\base\Plugin;
use craft\events\RegisterComponentTypesEvent;
use craft\events\RegisterGqlTypesEvent;
use craft\services\Fields;
use craft\services\Gql;
use wbrowar\littlelayout\fields\Layout as LayoutField;
use wbrowar\littlelayout\gql\types\LittleLayoutType;
use wbrowar\littlelayout\helpers\LittleLayoutAssetHelper;
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
    public string $schemaVersion = '1.0.0';

    /**
     * @var bool
     */
    public bool $hasCpSettings = false;

    /**
     * @var bool
     */
    public bool $hasCpSection = false;

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

        Event::on( Gql::class, Gql::EVENT_REGISTER_GQL_TYPES, function(RegisterGqlTypesEvent $event) {
            $event->types[] = LittleLayoutType::class;
        });

        if (Craft::$app->getRequest()->getIsCpRequest()) {
            LittleLayoutAssetHelper::registerAssetFiles();
        }

        Craft::info(
            Craft::t(
                'little-layout',
                '{name} plugin loaded',
                ['name' => $this->name]
            ),
            __METHOD__
        );
    }
}
