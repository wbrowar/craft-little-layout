<?php
/**
 * Little Layout plugin for Craft CMS 3.x
 *
 * SOME_DESCRIPTION
 *
 * @link      https://wbrowar.com
 * @copyright Copyright (c) 2021 Will Browar
 */

namespace wbrowar\littlelayout\models;

use craft\base\Model;

/**
 * @author    Will Browar
 * @package   LittleLayout
 * @since     1.0.0
 */
class LayoutModel extends Model
{
    // Public Properties
    // =========================================================================

    /**
     * @var string
     */
    public $raw = '';

    // Public Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            ['raw', 'string'],
            ['raw', 'default', 'value' => ''],
        ];
    }

    /**
     * Determine if field has a value.
     *
     * @return bool
     */
    public function getEmpty():bool
    {
        return $this->raw == '';
    }

    /**
     * Values for CSS Grid layouts.
     *
     * @return GridModel
     */
    public function getGrid():GridModel
    {
        return $this->_value() ? new GridModel(['valueParsed' => $this->_value()]) : new GridModel(null);
    }

    // Private Methods
    // =========================================================================

    /**
     * Split raw value into x/y parts
     *
     * @return null|array
     */
    public function _value()
    {
        if ($this->raw ?? false) {
            $parsed = explode('|', $this->raw);

            if (count($parsed) == 4) {
                return [
                    'xStart' => $parsed[0],
                    'xEnd' => $parsed[1],
                    'yStart' => $parsed[2],
                    'yEnd' => $parsed[3],
                ];
            }
        }
        return null;
    }
}
