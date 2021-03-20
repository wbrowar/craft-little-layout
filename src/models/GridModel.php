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
class GridModel extends Model
{
    // Public Properties
    // =========================================================================

    /**
     * @var array
     */
    public $valueParsed = '';

    // Public Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            ['valueParsed', 'array'],
            ['valueParsed', 'default', 'value' => []],
        ];
    }

    /**
     * DESCRIPTION
     *
     * @return int
     */
    public function getColumnStart()
    {
        return $this->valueParsed ?? false ? $this->valueParsed['xStart'] : null;
    }

    /**
     * DESCRIPTION
     *
     * @return int
     */
    public function getColumnEnd()
    {
        return $this->valueParsed ?? false ? $this->valueParsed['xEnd'] + 1 : null;
    }

    /**
     * DESCRIPTION
     *
     * @return int
     */
    public function getRowStart()
    {
        return $this->valueParsed ?? false ? $this->valueParsed['yStart'] : null;
    }

    /**
     * DESCRIPTION
     *
     * @return int
     */
    public function getRowEnd()
    {
        return $this->valueParsed ?? false ? $this->valueParsed['yEnd'] + 1 : null;
    }

    /**
     * DESCRIPTION
     *
     * @return int
     */
    public function getColumnSpan()
    {
        return $this->valueParsed ?? false ? ($this->valueParsed['xEnd'] - $this->valueParsed['xStart']) + 1 : null;
    }

    /**
     * DESCRIPTION
     *
     * @return int
     */
    public function getRowSpan()
    {
        return $this->valueParsed ?? false ? ($this->valueParsed['yEnd'] - $this->valueParsed['yStart']) + 1 : null;
    }
}
