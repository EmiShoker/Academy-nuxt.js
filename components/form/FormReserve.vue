<template>
	<div class = "form-events">
		<form class = "form-events_form form" @submit = "onSubmit">
			<FieldCheckList
					class = "form_check-list"
					:config = "{
				name: 'reserve',
				label: 'Забронировать столик',
				options: options,
			}"
					:submitCount = "submitCount"/>
			<button class = "form-events_btn-submit btn btn--red" type = "submit">Купить билеты</button>
		</form>
	</div>
</template>
<script setup>
import {useForm} from 'vee-validate';

const {handleSubmit, submitCount} = useForm();
const onSubmit = handleSubmit(async (values) => {
	console.log(values);
});

const options = [
	{
		label: '1 стол',
		value: '1',
		color: 'red'
	},
	{
		label: '2 стол',
		value: '2',
	},
	{
		label: '3 стол',
		value: '3',
	},
	{
		label: '4 стол',
		value: '4',
	},
	{
		label: '5 стол',
		value: '5',
	},
]
</script>
<style lang = "less" scoped>

</style>