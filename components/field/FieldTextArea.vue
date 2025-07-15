<template>
  <div v-if = "name" :class = "{'field--disabled': disabled}" class = "field">
    <label class = "field_title" for = "name">
      {{ label }}
      <textarea v-model = "value"
          class = "field_textarea"
          :placeholder = "placeholder"
          :disabled = "disabled"
          autocomplete = "off"></textarea>
    </label>
    <div v-if = "errorMessage && submitCount" class = "field_error error ">
      {{ errorMessage }}
    </div>
  </div>
</template>
<script setup>
import {useField} from 'vee-validate';

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

const name = computed(() => {
  return (typeof props.config.name === 'string' && props.config.name) || '';
});

const label = computed(() => {
  return (typeof props.config.label === 'string' && props.config.label) || '';
});

const veeLabel = computed(() => {
  return (typeof props.config.veeLabel === 'string' && props.config.veeLabel) || '';
});
const placeholder = computed(() => {
  return (typeof props.config.placeholder === 'string' && props.config.placeholder) || '';
});
const disabled = computed(() => {
  return (typeof props.config.disabled === 'boolean' && props.config.disabled) || false;
});
const rules = computed(() => {
  return (typeof props.config.rules === 'object' && props.config.rules) || {};
});
const {value, errorMessage} = name.value ? useField(name.value, rules.value, {
  initialValue: props.initialValue,
  label: veeLabel.value ? `${veeLabel.value}` : label.value ? `${label.value}` : ''
}) : {};
</script>
<style lang = "less"></style>