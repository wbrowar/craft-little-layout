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
    public string $raw = '';

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
        return $this->raw == '' || $this->raw == 'empty';
    }

    /**
     * Value for CSS Grid’s `grid-column-start` and `grid-column` properties.
     *
     * @return null|int
     */
    public function getGridColumnStart()
    {
        return ($this->_value() ?? false) ? $this->_value()['xStart'] : null;
    }

    /**
     * Value for CSS Grid’s `grid-column-end` and `grid-column` properties.
     *
     * @return null|int
     */
    public function getGridColumnEnd()
    {
        return ($this->_value() ?? false) ? $this->_value()['xEnd'] + 1 : null;
    }

    /**
     * Value for CSS Grid’s `grid-row-start` and `grid-row` properties.
     *
     * @return null|int
     */
    public function getGridRowStart()
    {
        return ($this->_value() ?? false) ? $this->_value()['yStart'] : null;
    }

    /**
     * Value for CSS Grid’s `grid-row-end` and `grid-row` properties.
     *
     * @return null|int
     */
    public function getGridRowEnd()
    {
        return ($this->_value() ?? false) ? $this->_value()['yEnd'] + 1 : null;
    }

    /**
     * Value for CSS Grid’s `grid-column` property.
     *
     * @return null|int
     */
    public function getGridColumnSpan()
    {
        return ($this->_value() ?? false) ? ($this->_value()['xEnd'] - $this->_value()['xStart']) + 1 : null;
    }

    /**
     * Value for CSS Grid’s `grid-row` property.
     *
     * @return null|int
     */
    public function getGridRowSpan()
    {
        return ($this->_value() ?? false) ? ($this->_value()['yEnd'] - $this->_value()['yStart']) + 1 : null;
    }

    /**
     * Array of columns selected in the layout field.
     *
     * @return array
     */
    public function getSelectedColumns():array
    {
        if ($this->_value()) {
            $selectedColumns = [];

            foreach (range($this->_value()['xStart'], $this->_value()['xEnd']) as $number) {
                $selectedColumns[] = $number;
            }

            return $selectedColumns;
        }

        return [];
    }

    /**
     * Array of rows selected in the layout field.
     *
     * @return array
     */
    public function getSelectedRows():array
    {
        if ($this->_value()) {
            $selectedRows = [];

            foreach (range($this->_value()['yStart'], $this->_value()['yEnd']) as $number) {
                $selectedRows[] = $number;
            }

            return $selectedRows;
        }

        return [];
    }

    /**
     * Array of coordinates selected in the layout field.
     * Coordinates are formatted in `x|y` format.
     *
     * @return array
     */
    public function getSelectedCoordinates():array
    {
        if ($this->_value()) {
            $selectedCoordinates = [];

            foreach (range($this->_value()['xStart'], $this->_value()['xEnd']) as $col) {
                foreach (range($this->_value()['yStart'], $this->_value()['yEnd']) as $row) {
                    $selectedCoordinates[] = $col . '|' . $row;
                }
            }

            return $selectedCoordinates;
        }

        return [];
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
        if (!$this->getEmpty()) {
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
