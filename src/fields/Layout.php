<?php
/**
 * Little Layout plugin for Craft CMS 3.x
 *
 * A compact, visual way to lay out fields, elements, and Matrix blocks.
 *
 * @link      https://wbrowar.com
 * @copyright Copyright (c) 2021 Will Browar
 */

namespace wbrowar\littlelayout\fields;

use craft\helpers\Html;

use Craft;
use craft\base\ElementInterface;
use craft\base\Field;
use GraphQL\Type\Definition\Type;
use wbrowar\littlelayout\gql\types\LittleLayoutType;
use wbrowar\littlelayout\models\LayoutModel;
use yii\db\Schema;
use craft\helpers\Json;

/**
 * @author    Will Browar
 * @package   LittleLayout
 * @since     1.0.0
 */
class Layout extends Field
{
    // Public Properties
    // =========================================================================

    /**
     * @var array
     */
    public array $boxIcons = [];

    /**
     * @var string
     */
    public string $boxSize = '';

    /**
     * @var int
     */
    public int $clearable = 1;

    /**
     * @var int
     */
    public int $cols = 1;

    /**
     * @var string
     */
    public string $defaultValue = '';

    /**
     * @var int
     */
    public int $rows = 1;

    /**
     * @var string
     */
    public string $selectionMode = 'box';

    // Static Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public static function displayName(): string
    {
        return Craft::t('little-layout', 'Little Layout');
    }

    /**
     * @inheritdoc
     */
    public function useFieldset(): bool
    {
        return true;
    }

    // Public Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public function rules(): array
    {
        $rules = parent::rules();
        $rules = array_merge($rules, [
            [['clearable', 'cols', 'rows'], 'integer'],
            [['clearable', 'cols', 'rows'], 'default', 'value' => 1],
            [['boxSize', 'defaultValue', 'selectionMode'], 'string'],
            ['boxSize', 'default', 'value' => ''],
            ['defaultValue', 'default', 'value' => ''],
            ['selectionMode', 'default', 'value' => 'box'],
        ]);
        return $rules;
    }

    /**
     * @inheritdoc
     */
    public function getContentColumnType(): array|string
    {
        return Schema::TYPE_TEXT;
    }

    /**
     * @inheritdoc
     */
    public function getContentGqlType(): Type|array
    {
        return LittleLayoutType::getType();
    }

    /**
     * @inheritdoc
     */
    public function getSettingsHtml():? string
    {
        // Add our field JS
        $fieldProperties = $this->getFieldProperties();

        // Render the settings template
        return Craft::$app->getView()->renderTemplate(
            'little-layout/_components/fields/Layout_settings',
            [
                'name' => $fieldProperties['jsVars']['fieldNamespace'],
                'field' => $this,
                'fieldNamespacedName' => $fieldProperties['jsVars']['fieldNamespacedName'] ?? '',
                'namespacedId' => $fieldProperties['namespacedId'],
            ]
        );
    }

    /**
     * @inheritdoc
     */
    public function getStaticHtml($value, ElementInterface $element): string
    {
        return $this->getInputHtml($value, $element, false);
    }

    /**
     * @inheritdoc
     */
    public function getInputHtml($value, ?ElementInterface $element = null, $editable = true): string
    {
        // Add our field JS
        $fieldProperties = $this->getFieldProperties();

        $boxIcons = [];
        if ($this->boxIcons ?? false) {
            foreach ($this->boxIcons as $icon) {
                if ($icon['column'] ?? false && $icon['row'] ?? false) {
                    $boxIcons[$icon['column'] . '|' . $icon['row']] = [
                        'description' => $icon['description'],
                        'id' => $icon['icon'],
                    ];
                }
            }
        }

        // Render the input template
        return Craft::$app->getView()->renderTemplate(
            'little-layout/_components/fields/Layout_input',
            [
                'boxIcons' => $boxIcons,
                'editable' => $editable,
                'field' => $element->getFieldLayout()->getFieldByHandle($this->handle),
                'fieldNamespacedName' => $fieldProperties['jsVars']['fieldNamespacedName'],
                'id' => $fieldProperties['id'],
                'name' => $this->handle,
                'namespacedId' => $fieldProperties['namespacedId'],
                'value' => $value,
            ]
        );
    }

    /**
     * @inheritdoc
     */
    public function isValueEmpty($value, ElementInterface $element): bool
    {
        return $value->getEmpty();
    }

    /**
     * @inheritdoc
     */
    public function normalizeValue($value, ?ElementInterface $element = null): LayoutModel
    {
        if (\is_string($value) && !empty($value)) {
            $value = Json::decodeIfJson($value);
        }
        if (\is_array($value)) {
            $model = new LayoutModel($value);
        } elseif ($value instanceof LayoutModel) {
            $model = $value;
        } else {
            $model = new LayoutModel(['raw' => $value]);
        }

        return $model;
    }

    // Private Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    private function getFieldProperties(): array
    {
        // Get our id and namespace
        $id = Html::id($this->handle ?? '');
        $namespacedId = Craft::$app->getView()->namespaceInputId($id);

        // Variables to pass down to our field JavaScript to let it namespace properly
        $jsonVars = [
            'fieldNamespacedName' => Craft::$app->getView()->namespaceInputName($id),
            'fieldNamespace' => Craft::$app->getView()->namespace,
            'id' => $id,
            'name' => $this->handle,
            'namespacedId' => $namespacedId,
            'prefix' => Craft::$app->getView()->namespaceInputId(''),
        ];

        return [
            'id' => $id,
            'jsVars' => $jsonVars,
            'namespacedId' => $namespacedId,
        ];
    }
}
