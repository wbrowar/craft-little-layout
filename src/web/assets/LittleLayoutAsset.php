<?php

namespace wbrowar\littlelayout\web\assets;

use Craft;
use craft\web\AssetBundle;

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
        $this->css = ['little-layout.css'];
        $this->js = ['little-layout.js'];
        $this->jsOptions = ['position' => Craft::$app->getView()::POS_BEGIN, 'type' => 'module'];
        $this->sourcePath = '@wbrowar/littlelayout/web/assets/dist/assets';

        parent::init();
    }
}
