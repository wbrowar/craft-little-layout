<?php
/**
 * Little Layout plugin for Craft CMS 3.x
 *
 * A compact, visual way to lay out fields, elements, and Matrix blocks.
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
    public function rules(): array
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
        return ($this->parsedValue() ?? false) ? $this->parsedValue()['xStart'] : null;
    }

    /**
     * Value for CSS Grid’s `grid-column-end` and `grid-column` properties.
     *
     * @return null|int
     */
    public function getGridColumnEnd()
    {
        return ($this->parsedValue() ?? false) ? $this->parsedValue()['xEnd'] + 1 : null;
    }

    /**
     * Value for CSS Grid’s `grid-row-start` and `grid-row` properties.
     *
     * @return null|int
     */
    public function getGridRowStart()
    {
        return ($this->parsedValue() ?? false) ? $this->parsedValue()['yStart'] : null;
    }

    /**
     * Value for CSS Grid’s `grid-row-end` and `grid-row` properties.
     *
     * @return null|int
     */
    public function getGridRowEnd()
    {
        return ($this->parsedValue() ?? false) ? $this->parsedValue()['yEnd'] + 1 : null;
    }

    /**
     * Value for CSS Grid’s `grid-column` property.
     *
     * @return null|int
     */
    public function getGridColumnSpan()
    {
        return ($this->parsedValue() ?? false) ? ($this->parsedValue()['xEnd'] - $this->parsedValue()['xStart']) + 1 : null;
    }

    /**
     * Value for CSS Grid’s `grid-row` property.
     *
     * @return null|int
     */
    public function getGridRowSpan()
    {
        return ($this->parsedValue() ?? false) ? ($this->parsedValue()['yEnd'] - $this->parsedValue()['yStart']) + 1 : null;
    }

    /**
     * Array of columns selected in the layout field.
     *
     * @return array
     */
    public function getSelectedColumns():array
    {
        if ($this->parsedValue()) {
            $selectedColumns = [];

            foreach (range($this->parsedValue()['xStart'], $this->parsedValue()['xEnd']) as $number) {
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
        if ($this->parsedValue()) {
            $selectedRows = [];

            foreach (range($this->parsedValue()['yStart'], $this->parsedValue()['yEnd']) as $number) {
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
        if ($this->parsedValue()) {
            $selectedCoordinates = [];

            foreach (range($this->parsedValue()['xStart'], $this->parsedValue()['xEnd']) as $col) {
                foreach (range($this->parsedValue()['yStart'], $this->parsedValue()['yEnd']) as $row) {
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
    public function parsedValue()
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
