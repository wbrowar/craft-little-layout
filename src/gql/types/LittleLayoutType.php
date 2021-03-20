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
            'grid' => [
                'name' => 'grid',
                'type' => Type::listOf(GridType::getType()),
            ]
        ];
    }
}