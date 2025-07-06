<template>
  <EventsEntry :event="event"/>
</template>

<script setup>
const route = useRoute();
const event = computed(() => route.params.event);

</script>

<style lang="less">

</style>