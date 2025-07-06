<template>
  <div>
    <PageHeader class="app_header"/>
    <NuxtPage class="app_page"/>
    <!--    <PageFooter class="app_footer"/>-->

    <ModalWindow name="events">
      <template #content>
        <FormEvents></FormEvents>
      </template>
    </ModalWindow>
    <ModalWindow name="rent" width="600px" widthContainer="500px" customClass="modal-window--blue">
      <template #content>
        <h4>
          Звоните солу
        </h4>

      </template>
    </ModalWindow>
  </div>
</template>

<script setup>
import {useStore} from "@/stores";
import {computed, watch} from 'vue';

const store = useStore();

const activeModals = computed(() => {
  return store.hasActiveModals;
});

watch(
    () => activeModals.value,
    (val) => {
      if (val) {
        document.documentElement.classList.add("popup-overflow");
      } else {
        document.documentElement.classList.remove("popup-overflow");
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