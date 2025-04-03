<template>
  <div>
    <PageHeader class="app_header"/>
    <NuxtPage class="app_page"/>
    <PageFooter class="app_footer" />

    <ModalWindow name="events">
      <template #content>
        <FormEvents></FormEvents>
      </template>
    </ModalWindow>
  </div>
</template>
<script setup>
import { useStore } from '@/stores';

const store= useStore();

const acriveModals = computed(() => {
  return store.hasActiveModals;
});

watch(
  () => acriveModals.value,
  (val) => {
    if (val) {
      document.documentElement.classList.add('popup-overflow');
    }
  else {
    document.documentElement.classList.remove('popup-overflow');
  }
},
{deep: true}
);
</script>
<style lang="less">
.app {
  &_page {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }
}
</style>