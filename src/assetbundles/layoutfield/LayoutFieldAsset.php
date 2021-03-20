<?php
/**
 * Little Layout plugin for Craft CMS 3.x
 *
 * A compact, visual way to lay out fields, elements, and Matrix blocks.
 *
 * @link      https://wbrowar.com
 * @copyright Copyright (c) 2021 Will Browar
 */

namespace wbrowar\littlelayout\assetbundles\layoutfield;

use Craft;
use craft\web\AssetBundle;
use craft\web\assets\cp\CpAsset;

/**
 * @author    Will Browar
 * @package   LittleLayout
 * @since     1.0.0
 */
class LayoutFieldAsset extends AssetBundle
{
    // Public Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public function init()
    {
        $this->sourcePath = "@wbrowar/littlelayout/assetbundles/layoutfield/dist";

        $this->depends = [
            CpAsset::class,
        ];

        $this->js = [
            'js/Layout.js',
        ];

        $this->css = [
            'css/Layout.css',
        ];

        parent::init();
    }
}
