<template>
	<div
			v-if = "name"
			class = "check"
			:class = "{
			'check--disabled' : disabled,
			'check--checked' : checked,
			'check--has-value' :errorMessage && submitCount
			}">

		<label class = "check_label"> <input
				v-model = "value"
				:false-value = "undefined"
				:name = "name"
				:true-value = "1"
				class = "check_input"
				type = "checkbox"
		/>

			<span
					:class = "{'check_mark--checked': checked, 'check_mark--has-value': errorMessage && submitCount}"
					class = "check_mark">
			</span>

			<span
					:class = "{'check_caption--checked': checked, 'check_caption--has-value': errorMessage && submitCount}"
					class = "check_caption"
					v-html = "label">
			</span>
			<div v-if = "errorMessage && submitCount" class = "check_error error ">
				{{ errorMessage }}
			</div>
		</label>
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
const disabled = computed(() => {
	return (typeof props.config.disabled === 'boolean' && props.config.disabled) || false;
});
const rules = computed(() => {
	return props.config.rules?.required ? {
		required_check: true,
	} : {}
});

const fixValue = (val) => {
	return val == 1 ? 1 : undefined;
}

const {value, errorMessage} = name.value ? useField(name.value, rules.value, {
	initialValue: fixValue(props.initialValue),
	label: veeLabel.value ? `${veeLabel.value}` : label.value ? `${label.value}` : ''
}) : {};

const checked = computed(() => {
	return value.value === 1;
});
</script>

<style lang = "less" scoped>

</style>