<?php

namespace wbrowar\littlelayout\gql\types;

use craft\gql\GqlEntityRegistry;
use craft\gql\base\GqlTypeTrait;

use craft\gql\base\ObjectType;
use craft\gql\TypeManager;
use GraphQL\Type\Definition\Type;


class GridType extends ObjectType
{
    use GqlTypeTrait;

    public static function getName(): string
    {
        return 'Grid';
    }

    /**
     * @inheritdoc
     */
    public static function getType(): Type
    {
        if ($type = GqlEntityRegistry::getEntity(self::getName())) {
            return $type;
        }

        $type = GqlEntityRegistry::createEntity(self::getName(), new self([
            'name' => static::getName(),
            'fields' => self::class . '::getFieldDefinitions',
            'description' => 'Values for CSS Grid layouts.',
        ]));

        return $type;
    }

    public static function getFieldDefinitions(): array
    {
        $fieldDefinitions = [
            'columnStart' => [
                'name' => 'columnStart',
                'type' => Type::int(),
                'description' => 'Value for CSS Grid’s `grid-column-start` and `grid-column` properties.',
            ],
            'columnEnd' => [
                'name' => 'columnEnd',
                'type' => Type::int(),
                'description' => 'Value for CSS Grid’s `grid-column-end` and `grid-column` properties.',
            ],
            'rowStart' => [
                'name' => 'rowStart',
                'type' => Type::int(),
                'description' => 'Value for CSS Grid’s `grid-row-start` and `grid-row` properties.',
            ],
            'rowEnd' => [
                'name' => 'rowEnd',
                'type' => Type::int(),
                'description' => 'Value for CSS Grid’s `grid-row-end` and `grid-row` properties.',
            ],
            'columnSpan' => [
                'name' => 'columnSpan',
                'type' => Type::int(),
                'description' => 'Value for CSS Grid’s `grid-column` property.',
            ],
            'rowSpan' => [
                'name' => 'rowSpan',
                'type' => Type::int(),
                'description' => 'Value for CSS Grid’s `grid-row` property.',
            ],
        ];

        return TypeManager::prepareFieldDefinitions($fieldDefinitions, self::getName());
    }
}