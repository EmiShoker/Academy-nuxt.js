<template>
  <div v-if = "name"
       class = "field"
       :class = "{
    'field--disabled': disabled,
    'field--has-value': value || value ===0,
    'field--has-error': errorMessage && submitCount,
  }">
    <h6 class = "field_title">
      {{ label }}
    </h6>
    <div v-if = "label" class = "field_label-wrapper">

      <label class = "field_label" :class = "{'field_label--required': rules.required}">
      </label>
      <Multiselect v-model = "value"
                   class = "field_select"
                   :autocomplete = "on"
                   :disabled = "disabled"
                   :placeholder = "placeholder"
                   :mode = "mode"
                   :options = "options"
                   :class = "{'has-error': errorMessage && submitCount}" />

      <div v-if = "errorMessage && submitCount" class = "field_error error ">
        {{ errorMessage }}
      </div>

    </div>
  </div>

</template>

<script setup>
import {useField} from "vee-validate";
import Multiselect from "@vueform/multiselect";

const props = defineProps({
  initialValue: {
    default: undefined
  },
  config: {
    type: Object,
    default: () => ({}),
    required: true,
  },
  submitCount: {
    type: Number,
    default: 0,
  }
});

const config = reactive(props.config);

const name = computed(() => {
  return (typeof config.name === 'string' && config.name) || '';
});

const label = computed(() => {
  return (typeof config.label === 'string' && config.label) || '';
});

const veeLabel = computed(() => {
  return (typeof config.veeLabel === 'string' && config.veeLabel) || '';
});

const disabled = computed(() => {
  return (typeof config.disabled === 'boolean' && config.disabled) || false;
});

const placeholder = computed(() => {
  return (typeof config.placeholder === 'string' && config.placeholder) || '';
});
const mode = computed(() => {
  return typeof config.multiple === 'boolean' && config.multiple ? "tags" : "single";
});
const options = computed(() => {
  return ((typeof config.options === 'object' ||
          typeof config.options === 'function') &&
      config.options) || [];
});
const rules = computed(() => {
  return (typeof config.rules === 'object' && config.options) || {};
});
const {value, errorMessage} = name.value ? useField(name.value, rules.value, {
  initialValue: props.initialValue,
  label: veeLabel.value ? `${veeLabel.value}` : label.value ? `${label.value}` : ''
}) : {};

const emit = defineEmits('change');

watch(
    () => value.value,
    value => {
      emit('change', value);
    }
)
</script>

<style lang = "less">
.field .multiselect {
  &.is-active {
    box-shadow: none;
  }
}</style>