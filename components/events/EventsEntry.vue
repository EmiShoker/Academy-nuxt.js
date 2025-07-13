<template>
	<article class = "event">
		<EventHeader :data = "pageData"/>

		<div class = "event_container">
			<div class = "content event_content" v-html = "pageData?.content">

			</div>
			<FormReserve/>
		</div>
	</article>

</template>

<script setup>

const props = defineProps({
	event: {
		type: String,
		default: "",
		required: true
	}
});
const pageData = ref({});
const storeApi = useStoreApi();
const getUrl = computed(() => {
	return `${storeApi.api_local}/events/${props.event}.json`
});


const {data, error, refresh} = await useAsyncData("${props.event}", () => {
	return $fetch(getUrl.value);
});

if (data?.value) pageData.value = data.value;
</script>

<style lang = "less" scoped>
.event {
	.container;
	padding: 140px 40px 150px;


}

</style>