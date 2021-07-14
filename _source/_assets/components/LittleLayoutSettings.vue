<template>
  <div class="ll-grid ll-grid-cols-[minmax(100px,250px),1fr] ll-gap-6">
    <div>
      <div id="cols-field" class="field">
        <div class="heading">
          <label id="cols-label" class="required" for="cols">Layout Columns</label>
        </div>
        <div id="cols-instructions" class="instructions">
          <p>Define the columns in your layout.</p>
        </div>
        <div class="input ltr">
          <input type="text" id="cols" class="text" size="3" :name="`${ field.fieldNamespace }[cols]`" autofocus="" autocomplete="off" aria-describedby="cols-instructions" @focusout="validateColsField" v-model.number="settingsCols">
        </div>
      </div>

      <div id="rows-field" class="field">
        <div class="heading">
          <label id="rows-label" class="required" for="rows">Layout Rows</label>
        </div>
        <div id="rows-instructions" class="instructions">
          <p>Define the rows in your layout.</p>
        </div>
        <div class="input ltr">
          <input type="text" id="rows" class="text" size="3" :name="`${ field.fieldNamespace }[rows]`" autofocus="" autocomplete="off" aria-describedby="rows-instructions" @focusout="validateRowsField" v-model.number="settingsRows">
        </div>
      </div>

      <div id="clearable-field" class="field">
        <div class="heading">
          <label id="clearable-label" for="clearable">Empty Layout</label>
        </div>
        <div class="input ltr">
          <div class="select">
            <select id="clearable" :name="`${ field.fieldNamespace }[clearable]`" v-model="settingsClearable">
              <option value="1">Layouts can be reset</option>
              <option value="2">Layouts cannot be reset</option>
            </select>
          </div>
        </div>
      </div>

      <div id="selection-mode-field" class="field">
        <div class="heading">
          <label id="selection-mode-label" for="selection-mode">Selection Mode</label>
        </div>
        <div class="input ltr">
          <div class="select">
            <select id="selection-mode" :name="`${ field.fieldNamespace }[selectionMode]`" v-model="settingsSelectionMode">
              <option value="box">Select multiple rows and columns</option>
              <option value="single">Select a single box</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <div>

      <div id="default-value-field" class="field">
        <div class="heading">
          <label id="default-value-label" for="default-value">Default Value</label>
        </div>
        <div class="input ltr">
          <LittleLayoutFieldControl
              clearable
              editable
              :field-namespace="field.fieldNamespace"
              :field-default="defaultValue"
              :field-id="field.namespacedId"
              field-name="defaultValue"
              :layout-cols="settingsCols"
              :layout-rows="settingsRows"
              :selection-mode="settingsSelectionMode"
              v-if="settingsCols && settingsRows"
          />
          <p v-else>⚠️ Settings missing! Layout Columns and Layout Rows settings are required.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import LittleLayoutFieldControl from './LittleLayoutFieldControl.vue';

export default defineComponent({
  name: 'LittleLayoutSettings',
  components: {
    LittleLayoutFieldControl,
  },
  props: ['clearable', 'cols', 'defaultValue', 'field', 'rows', 'selectionMode'],
  setup: (props) => {
    const settingsClearable = ref(props.clearable);
    const settingsCols = ref(props.cols ? parseInt(props.cols) : 1);
    const settingsRows = ref(props.rows ? parseInt(props.rows) : 1);
    const settingsSelectionMode = ref(props.selectionMode);

    return { settingsClearable, settingsCols, settingsRows, settingsSelectionMode }
  },
  methods: {
    validateColsField() {
      if (!this.settingsCols || !parseInt(this.settingsCols)) {
        this.settingsCols = 1;
      }
    },
    validateRowsField() {
      if (!this.settingsRows || !parseInt(this.settingsRows)) {
        this.settingsRows = 1;
      }
    },
  },
  mounted() {
    console.log('Little Layout Settings');
  }
})
</script>
