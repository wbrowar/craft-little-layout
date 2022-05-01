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

use craft\events\RegisterGqlTypesEvent;
use craft\helpers\App;
use craft\helpers\Json;
use craft\services\Gql;
use craft\web\View;
use wbrowar\littlelayout\fields\Layout as LayoutField;

use Craft;
use craft\base\Plugin;
use craft\services\Fields;
use craft\events\RegisterComponentTypesEvent;

use wbrowar\littlelayout\gql\types\LittleLayoutType;
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

        if (Craft::$app->getView()->getTemplateMode() === View::TEMPLATE_MODE_CP) {
            $assets = LittleLayout::$plugin->getPathsToAssetFiles('little-layout.ts');

            if ($assets['css'] ?? false) {
                Craft::$app->getView()->registerCssFile($assets['css']);
            }
            if ($assets['js'] ?? false) {
                Craft::$app->getView()->registerJsFile($assets['js'], ['position' => Craft::$app->getView()::POS_BEGIN, 'type' => 'module']);
            }
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

    /**
     * Get paths of all JS and CSS files generated by Vite
     *
     * @param string $filename the name of the Vite entry file, usually 'main.ts'
     * @return array
     */
    public function getPathsToAssetFiles(string $filename): array
    {
        $assetPaths = [
            'css' => '',
            'js' => '',
        ];

        if (App::parseEnv('$VITE_LITTLE_LAYOUT_HMR') == 'true') {
            return [
                'css' => 'http://localhost:3100/_source/_css/app.css',
                'js' => 'http://localhost:3100/' . $filename,
            ];
        }

        $manifestPath = self::$plugin->getBasePath() . '/assetbundles/dist/manifest.json';

        if ($manifestPath ?? false) {
            $manifestJson = file_get_contents($manifestPath);

            if ($manifestJson ?? false) {
                $manifest = Json::decodeIfJson($manifestJson);

                if ($manifest && $manifest[$filename]) {
                    $path = Craft::$app->getAssetManager()->getPublishedUrl('@wbrowar/littlelayout/assetbundles/dist/', true);
                }
            }
        }

        if ($path ?? false) {
            if ($manifest[$filename]['css'] ?? false) {
                $assetPaths['css'] = $path . '/' . $manifest[$filename]['css'][0];
            }
            if ($manifest[$filename]['file'] ?? false) {
                $assetPaths['js'] = $path . '/' . $manifest[$filename]['file'];
            }
        }

        return $assetPaths;
    }

    // Protected Methods
    // =========================================================================

}
