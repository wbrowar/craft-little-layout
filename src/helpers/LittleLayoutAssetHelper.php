<?php

namespace wbrowar\littlelayout\helpers;

use Craft;
use craft\helpers\App;
use wbrowar\littlelayout\web\assets\LittleLayoutAsset;

class LittleLayoutAssetHelper
{
    public static function getHmrUrl(): string
    {
        return App::parseEnv('$VITE_LITTLE_LAYOUT_HMR') ? 'http://localhost:3200/' : '';
    }

    /**
     * When in local development mode, register the Vite dev server.
     * Otherwise, register the asset bundles.
     *
     * @return void
     * @throws \yii\base\InvalidConfigException
     */
    public static function registerAssetFiles(): void
    {
        if (App::parseEnv('$VITE_LITTLE_LAYOUT_HMR')) {
            Craft::$app->getView()->registerJsFile(
                LittleLayoutAssetHelper::getHmrUrl() . 'little-layout.ts', ['defer' => true, 'type' => 'module']);
        } else {
            Craft::$app->getView()->registerAssetBundle(LittleLayoutAsset::class);
        }
    }
}