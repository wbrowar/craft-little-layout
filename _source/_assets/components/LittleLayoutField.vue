<template>
  <LittleLayoutFieldControl
    :clearable="settingsClearable === '1'"
    :editable="editable === 'true'"
    :field-namespace="field.fieldNamespacedName"
    :field-default="defaultValue"
    :field-id="field.namespacedId"
    field-name="raw"
    :layout-cols="settingsCols"
    :layout-rows="settingsRows"
    :scroll-message="scrollMessage" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import LittleLayoutFieldControl from './LittleLayoutFieldControl.vue';

export default defineComponent({
  name: 'LittleLayoutField',
  components: {
    LittleLayoutFieldControl,
  },
  props: ['clearable', 'cols', 'defaultValue', 'editable', 'field', 'handle', 'rows', 'scrollMessage'],
  setup: (props) => {
    const settingsClearable = ref(props.clearable);
    const settingsCols = ref(props.cols ? parseInt(props.cols) : 1);
    const settingsRows = ref(props.rows ? parseInt(props.rows) : 1);

    return { settingsClearable, settingsCols, settingsRows }
  },
})
</script>
