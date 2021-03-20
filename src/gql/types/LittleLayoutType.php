<?php

namespace wbrowar\littlelayout\gql\types;

use craft\gql\base\GqlTypeTrait;
use GraphQL\Type\Definition\Type;

class LittleLayoutType
{
    use GqlTypeTrait;

    public static function getName(): string
    {
        return 'LittleLayout';
    }

    public static function getFieldDefinitions(): array
    {
        return [
            'empty' => [
                'name' => 'empty',
                'type' => Type::boolean(),
                'description' => 'Determine if field has a value.',
            ],
            'gridColumnStart' => [
                'name' => 'gridColumnStart',
                'type' => Type::int(),
                'description' => 'Value for CSS Grid’s `grid-column-start` and `grid-column` properties.',
            ],
            'gridColumnEnd' => [
                'name' => 'gridColumnEnd',
                'type' => Type::int(),
                'description' => 'Value for CSS Grid’s `grid-column-end` and `grid-column` properties.',
            ],
            'gridRowStart' => [
                'name' => 'gridRowStart',
                'type' => Type::int(),
                'description' => 'Value for CSS Grid’s `grid-row-start` and `grid-row` properties.',
            ],
            'gridRowEnd' => [
                'name' => 'gridRowEnd',
                'type' => Type::int(),
                'description' => 'Value for CSS Grid’s `grid-row-end` and `grid-row` properties.',
            ],
            'gridColumnSpan' => [
                'name' => 'gridColumnSpan',
                'type' => Type::int(),
                'description' => 'Value for CSS Grid’s `grid-column` property.',
            ],
            'gridRowSpan' => [
                'name' => 'gridRowSpan',
                'type' => Type::int(),
                'description' => 'Value for CSS Grid’s `grid-row` property.',
            ],
            'selectedColumns' => [
                'name' => 'selectedColumns',
                'type' => Type::listOf(Type::int()),
                'description' => 'Array of columns selected in the layout field.',
            ],
            'selectedRows' => [
                'name' => 'selectedRows',
                'type' => Type::listOf(Type::int()),
                'description' => 'Array of rows selected in the layout field.',
            ],
            'selectedCoordinates' => [
                'name' => 'selectedCoordinates',
                'type' => Type::listOf(Type::string()),
                'description' => 'Array of coordinates selected in the layout field. Coordinates are formatted in `x|y` format.',
            ],
        ];
    }
}