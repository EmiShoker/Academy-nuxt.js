<template>
	<div v-if = "name" class = "field" :class = "{'field--disabled:': disabled}">
		<div class = "field_wrap">

			<input
					v-model = "value"
					v-maska = "mask"
					class = "field_input"
					:class = "{
        'field_input--has-value':value || value === 0,
        'field_input--has-error': errorMessage && submitCount,
      }"
					:autocomplete = "autocomplete"
					:disabled = "disabled"
					:inputmode = "inputmode"
					type = "text"
			/>
			<span v-if = "label" class = "field_label" :class = "{}">{{ label }}</span>
		</div>
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

const autocomplete = computed(() => {
	return (typeof props.config.autocomplete === 'string' && props.config.autocomplete) || 'on';
});

const disabled = computed(() => {
	return (typeof props.config.disabled === 'boolean' && props.config.disabled) || false;
});

const inputmode = computed(() => {
	return (typeof props.config.inputmode === 'string' && props.config.inputmode) || 'text';
});


const rules = computed(() => {
	return Object.assign((typeof props.config.rules === 'object' && props.config.rules) || {}, {});
});

const {value, errorMessage} = name.value ? useField(name.value, rules.value, {
	initialValue: props.initialValue,
	label: veeLabel.value ? `${veeLabel.value}` : label.value ? `${label.value}` : ''
}) : {};
</script>

<style
		lang = "less"
		scoped>

</style>