<?php
/**
 * Little Layout plugin for Craft CMS 3.x
 *
 * A compact, visual way to lay out fields, elements, and Matrix blocks.
 *
 * @link      https://wbrowar.com
 * @copyright Copyright (c) 2021 Will Browar
 */

namespace wbrowar\littlelayouttests\unit;

use Codeception\Test\Unit;
use UnitTester;
use Craft;
use wbrowar\littlelayout\LittleLayout;

/**
 * ExampleUnitTest
 *
 *
 * @author    Will Browar
 * @package   LittleLayout
 * @since     1.0.0
 */
class ExampleUnitTest extends Unit
{
    // Properties
    // =========================================================================

    /**
     * @var UnitTester
     */
    protected $tester;

    // Public methods
    // =========================================================================

    // Tests
    // =========================================================================

    /**
     *
     */
    public function testPluginInstance()
    {
        $this->assertInstanceOf(
            LittleLayout::class,
            LittleLayout::$plugin
        );
    }

    /**
     *
     */
    public function testCraftEdition()
    {
        Craft::$app->setEdition(Craft::Pro);

        $this->assertSame(
            Craft::Pro,
            Craft::$app->getEdition()
        );
    }
}
