<template>
  <div>
    <EventsPage :events="eventsList"/>
  </div>
</template>

<script setup>
const app = useNuxtApp();
const storeApi = useStoreApi();

const eventsList = ref([]);

const getUrl = computed(() => {
  return app.$getUrl(`/events.json`, null, storeApi.api_local);
});

const {data} = await useAsyncData(`events`, () => {
  return $fetch(getUrl.value)
});
if (data?.value) eventsList.value = data.value;

</script>

<style lang="less">

</style>