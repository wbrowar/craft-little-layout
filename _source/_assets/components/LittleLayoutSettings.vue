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
          <input type="text" id="cols" class="text" size="3" :name="`${ field.fieldNamespace }[cols]`" autofocus="" autocomplete="off" aria-describedby="cols-instructions" v-model.number="settingsCols">
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
          <input type="text" id="rows" class="text" size="3" :name="`${ field.fieldNamespace }[rows]`" autofocus="" autocomplete="off" aria-describedby="rows-instructions" v-model.number="settingsRows">
        </div>
      </div>

      <div id="clearable-field" class="field">
        <div class="heading">
          <label id="clearable-label" for="clearable">Empty Layout</label>
        </div>
<!--        <div id="clearable-instructions" class="instructions">-->
<!--          <p></p>-->
<!--        </div>-->
        <div class="input ltr">
          <div class="select">
            <select id="clearable" :name="`${ field.fieldNamespace }[clearable]`" v-model="settingsClearable">
              <option value="1">Layouts can be reset</option>
              <option value="2">Layouts cannot be reset</option>
            </select>
          </div>
<!--          <input type="checkbox" id="clearable" :name="`${ field.fieldNamespace }[clearable]`" v-model="settingsClearable" true-value="1" false-value="0">-->
<!--          <input type="text" id="clearable" class="text fullwidth" :name="`${ field.fieldNamespace }[clearable]`" autofocus="" autocomplete="off" aria-describedby="clearable-instructions" v-model.number="settingsClearable">-->
        </div>
      </div>
    </div>

    <div>

      <div id="default-value-field" class="field">
        <div class="heading">
          <label id="default-value-label" for="default-value">Default</label>
        </div>
<!--        <div id="rows-instructions" class="instructions">-->
<!--          <p>What this field will be called in the control panel.</p>-->
<!--        </div>-->
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
          />
<!--          <input type="text" id="rows" class="text fullwidth" name="types[wbrowar\littlelayout\fields\Layout][rows]" autofocus="" autocomplete="off" aria-describedby="rows-instructions" v-model.number="settingsRows">-->
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
  props: ['clearable', 'cols', 'defaultValue', 'field', 'rows'],
  setup: (props) => {
    const settingsClearable = ref(props.clearable);
    const settingsCols = ref(props.cols ? parseInt(props.cols) : 1);
    const settingsRows = ref(props.rows ? parseInt(props.rows) : 1);

    return { settingsClearable, settingsCols, settingsRows }
  },
  mounted() {
    console.log('Little Layout Settings');
  }
})
</script>
