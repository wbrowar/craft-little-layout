<?php
/**
 * Little Layout plugin for Craft CMS 3.x
 *
 * SOME_DESCRIPTION
 *
 * @link      https://wbrowar.com
 * @copyright Copyright (c) 2021 Will Browar
 */

namespace wbrowar\littlelayout\fields;

use craft\helpers\Html;

use Craft;
use craft\base\ElementInterface;
use craft\base\Field;
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
     * @var int
     */
    public $cols = 1;

    /**
     * @var int
     */
    public $defaultValue = '';

    /**
     * @var int
     */
    public $rows = 1;

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
    public function rules()
    {
        $rules = parent::rules();
        $rules = array_merge($rules, [
            [['cols', 'rows'], 'integer'],
            ['defaultValue', 'string'],
            ['cols', 'default', 'value' => 1],
            ['rows', 'default', 'value' => 1],
            ['defaultValue', 'default', 'value' => ''],
        ]);
        return $rules;
    }

    /**
     * @inheritdoc
     */
    public function getContentColumnType(): string
    {
        return Schema::TYPE_TEXT;
    }

    /**
     * @inheritdoc
     */
    public function getContentGqlType()
    {
        return LittleLayoutType::getType();
    }

    /**
     * @inheritdoc
     */
    public function getSettingsHtml():string
    {
        // Add our field JS
        $fieldProperties = $this->_getFieldProperties();

        // Render the settings template
        return Craft::$app->getView()->renderTemplate(
            'little-layout/_components/fields/Layout_settings',
            [
                'name' => $fieldProperties['jsVars']['fieldNamespace'],
                'field' => $this,
                'namespacedId' => $fieldProperties['namespacedId'],
                'registerJs' => $fieldProperties['registerJs'],
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
    public function getInputHtml($value, ElementInterface $element = null, $editable = true): string
    {
        // Add our field JS
        $fieldProperties = $this->_getFieldProperties();

        // Render the input template
        return Craft::$app->getView()->renderTemplate(
            'little-layout/_components/fields/Layout_input',
            [
                'name' => $this->handle,
                'value' => $value,
                'field' => $this,
                'fieldNamespacedName' => $fieldProperties['jsVars']['fieldNamespacedName'],
                'id' => $fieldProperties['id'],
                'namespacedId' => $fieldProperties['namespacedId'],
                'registerJs' => $fieldProperties['registerJs'],
                'editable' => $editable,
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
    public function normalizeValue($value, ElementInterface $element = null)
    {
//        $valueArray = Json::decodeIfJson($value);
//
//        if ($valueArray['raw'] ?? false) {
//            $valueParsed = explode('|', $valueArray['raw']);
//
//            if (count($valueParsed) == 4) {
//                // Values for CSS grid
//                $columnStart = $valueParsed[0];
//                $columnEnd = $valueParsed[1] + 1;
//                $rowStart = $valueParsed[2];
//                $rowEnd = $valueParsed[3] + 1;
//                $columnSpan = ($columnEnd - $columnStart);
//                $rowSpan = ($rowEnd - $rowStart);
//
//                // Selected values
//                $selectedColumns = [];
//                foreach (range($columnStart, $columnEnd - 1) as $number) {
//                    $selectedColumns[] = $number;
//                }
//                $selectedRows = [];
//                foreach (range($rowStart, $rowEnd - 1) as $number) {
//                    $selectedRows[] = $number;
//                }
//                $selectedCoordinates = [];
//                foreach (range($columnStart, $columnEnd - 1) as $col) {
//                    foreach (range($rowStart, $rowEnd - 1) as $row) {
//                        $selectedCoordinates[] = $col . '|' . $row;
//                    }
//                }
//            }
//        }
//
//        // All of the properties that can be accessed from the field
//        // Usage: {{ entry.layout.grid.columnStart }}
//        $valueArray['empty'] = $valueArray['raw'] ?? false ? $valueArray['raw'] == '' : true;
//        $valueArray['grid'] = [
//            'columnStart' => $columnStart ?? null,
//            'columnEnd' => $columnEnd ?? null,
//            'rowStart' => $rowStart ?? null,
//            'rowEnd' => $rowEnd ?? null,
//            'columnSpan' => $columnSpan ?? null,
//            'rowSpan' => $rowSpan ?? null,
//        ];
//        $valueArray['selected'] = [
//            'columns' => $selectedColumns ?? null,
//            'rows' => $selectedRows ?? null,
//            'coordinates' => $selectedCoordinates ?? null,
//        ];
//
//        return $valueArray;

        // If we're passed in a string, assume it's JSON-encoded, and decode it
        if (\is_string($value) && !empty($value)) {
            $value = Json::decodeIfJson($value);
        }
        // If we're passed in an array, make a model from it
        if (\is_array($value)) {
            // Create a new LayoutModel model and populate it
            $model = new LayoutModel($value);
        } elseif ($value instanceof LayoutModel) {
            $model = $value;
        } else {
            // Just create a new empty model
            $model = new LayoutModel(null);
        }

        return $model;
    }

    /**
     * @inheritdoc
     */
    public function serializeValue($value, ElementInterface $element = null)
    {
        return parent::serializeValue($value, $element);
    }

    // Private Methods
    // =========================================================================


    /**
     * @inheritdoc
     */
    private function _getFieldProperties(): array
    {
//        Craft::dd($this);
        
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
        $jsonVarsString = Json::encode($jsonVars);

        return [
            'id' => $id,
            'jsVars' => $jsonVars,
            'namespacedId' => $namespacedId,
            'registerJs' => "$(`[data-little-layout='{$namespacedId}']`).LittleLayout(" . $jsonVarsString . ");",
        ];
    }
}
