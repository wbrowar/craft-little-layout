<?php

namespace wbrowar\littlelayout\web\assets;

use Craft;
use craft\web\AssetBundle;
use wbrowar\littlelayout\helpers\LittleLayoutAssetHelper;

/**
 * Static assets for users who can edit littlelayouts.
 */
class LittleLayoutAsset extends AssetBundle
{
    /**
     * @inheritdoc
     */
    public function init(): void
    {
        $this->sourcePath = '@wbrowar/littlelayout/web/assets/dist/assets';
        $this->jsOptions = ['position' => Craft::$app->getView()::POS_BEGIN, 'type' => 'module'];

        $assets = LittleLayoutAssetHelper::getPathsToAssetFiles('little-layout.ts');

        $this->css = !empty($assets['css']['filename']) ? [$assets['css']['filename']] : [];
        $this->js = !empty($assets['js']['filename']) ? [$assets['js']['filename']] : [];

        parent::init();
    }
}
