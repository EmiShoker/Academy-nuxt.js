<template>
  <div v-if = "name && options?.length"
      ref = "radio"
      :class = "{
			'radio--disabled' : disabled,
			'check--checked' : checked,
			'check--has-value' :errorMessage && submitCount
			}"
      class = "radio">

    <h6 class = "radio_title">
      {{ label }}
    </h6>

    <div class = "radio_list">
      <label class = "radio_item" v-for = "item in options" :key = "item.value">

        <input v-model = "value"
            :name = "name"
            :true-value = "item.value"
            :value = "item.value"
            class = "radio_input"
            type = "radio"/>
        <span class = "radio_mark"></span>
        <span class = "radio_label">{{ item.label }}</span>
      </label>
    </div>
    <div v-if = "errorMessage && submitCount" class = "radio_error error ">
      {{ errorMessage }}
    </div>
  </div>
</template>
<script setup>
import { useField } from "vee-validate";

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
const disabled = computed(() => {
  return (typeof props.config.disabled === 'boolean' && props.config.disabled) || false;
});
const options = computed(() => {
  return (Array.isArray(props.config.options) && props.config.options) || [];
});

const rules = computed(() => {
  return (typeof props.config.rules === 'object' && props.config.options) || {};
});
const {value, errorMessage} = name.value ? useField(name.value, rules.value, {
  initialValue: props.initialValue,
  label: veeLabel.value ? `${veeLabel.value}` : label.value ? `${label.value}` : ''
}) : {};

watch(
    () => value.value,
    (val) => {
      if (typeof val === 'undefined') return;

      const inList = options.value.some(item => item.value === val);
      if (!inList) value.value = undefined;

    },
    {
      immediate: true,
    }
)

</script>

<style lang = "less"
    scoped>

</style>