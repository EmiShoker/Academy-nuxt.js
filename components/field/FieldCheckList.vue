<template>
  <div
      v-if = "name && options?.length"
      class = "check-list"
  >
    <h4 class = "check-list_title">
      {{ label }}
    </h4>
    <div class = "check-list_items">
      <div
          v-for = "item in options"
          :key = "item[optionsLabel]"
          ref = "check"
          :class = "{
			'check--disabled' : disabled,
			'check--checked' : checked,
			'check--has-value' : submitCount,
			'check--red' : item[optionsColor] === 'red',
			}"
          class = "check-list_item check">
        <label class = "check_label">
          <input
              :true-value = "item[optionsValue]"
              :value = "item[optionsValue]"
              class = "check_input"
              type = "checkbox"
          />
          <span class = "check_mark"></span>

          <span
              v-if = "item[optionsLabel]"
              class = "check_caption"
              v-html = "item[optionsLabel]"
          ></span>
        </label>

      </div>
    </div>
    <div v-if = "errorMessage && submitCount" class = "field_error error ">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script setup>
import {useField} from "vee-validate";

const emit = defineEmits(['change']);
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
const config = reactive(config);

const name = computed(() => {
  return (typeof config.name === 'string' && config.name) || '';
});

const label = computed(() => {
  return (typeof config.label === 'string' && config.label) || '';
});

const veeLabel = computed(() => {
  return (typeof config.veeLabel === 'string' && config.veeLabel) || '';
});

const options = computed(() => {
  return (Array.isArray(config.options) && config.options) || [];
});

const optionsLabel = computed(() => {
  return (typeof config.optionsLabel === 'string' && config.optionsLabel) || 'label';
});
const optionsValue = computed(() => {
  return (typeof config.optionsValue === 'string' && config.optionsValue) || 'value';
});

const optionsColor = computed(() => {
  return (typeof config.optionsColor === 'string' && config.optionsColor) || 'color';
});
const disabled = computed(() => {
  return (typeof config.disabled === 'boolean' && config.disabled) || false;
});
const rules = computed(() => {
  return (typeof config.rules === 'object' && config.rules) || {};
});
const fixValue = () => {
  if (Array.isArray(value.value)) return false;

  if (typeof value.value === 'number' || typeof value.value === 'string') {
    value.value = [value.value];
    return true
  }

  value.value = [];
  return true;
}

const {value, errorMessage} = name.value ? useField(name.value, rules.value, {
  initialValue: initialValue,
  label: veeLabel.value ? `${veeLabel.value}` : label.value ? `${label.value}` : ''
}) : {};

fixValue();

watch(
    () => value.value,
    (val) => {
      if (!fixValue()) emit('change', val);
    },
    {
      immediate: false,
    }
)
</script>

<style lang = "less">
.check-list {
  &_title {
    margin: 0 0 20px;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;

    @media @bw500 {
      font-size: 16px;
      line-height: 20px;
    }

    &--mb30 {
      margin-bottom: 30px;
      @media @bw500 {
        line-height: 20px;
      }
    }
  }

  &_items {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}
</style>