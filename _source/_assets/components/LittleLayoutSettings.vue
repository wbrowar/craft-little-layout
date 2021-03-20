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
          <input type="text" id="cols" class="text fullwidth" :name="`${ field.fieldNamespace }[cols]`" autofocus="" autocomplete="off" aria-describedby="cols-instructions" v-model.number="settingsCols">
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
          <input type="text" id="rows" class="text fullwidth" :name="`${ field.fieldNamespace }[rows]`" autofocus="" autocomplete="off" aria-describedby="rows-instructions" v-model.number="settingsRows">
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
  props: ['cols', 'defaultValue', 'field', 'rows'],
  setup: (props) => {
    const settingsCols = ref(props.cols ? parseInt(props.cols) : 1);
    const settingsRows = ref(props.rows ? parseInt(props.rows) : 1);

    return { settingsCols, settingsRows }
  },
  mounted() {
    console.log('Little Layout Settings');
  }
})
</script>
