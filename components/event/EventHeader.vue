<template>
  <header class="event-header">
    <h2 class="event-header_title title">
      {{ title }}
    </h2>
    <div class="event-header_info">
      <div class="event-header_info-date">
        <span class="event-header_info-date_line line"></span>
        <time :datetime="datetime" class="event-header_info-date_number">{{ date }}</time>
        <p>{{ location }}</p>
        <span class="event-header_info-date_line line"></span>
      </div>
      <picture>
        <img :src="img" alt="Sade" class="event-header-img"/>
        <!--        <source type="image/webp" :srcset="img_mobile">-->


        <!--        <source media="(max-width: 1169px)" :srcset="img">-->
        <!--        <source media="(max-width: 1169px)" :srcset="img_mobile" alt="Sade" type="image/webp">-->


      </picture>
      <div class="event-header_info-date">
        <span class="event-header_info-date_line-r line"></span>
        <p>
          <span class="event-header_info-date_number">
          {{ time }}
        </span>
          начало
        </p>
        <p>{{ address }}</p>
        <span class="event-header_info-date_line-r line"></span>
      </div>
    </div>
  </header>
</template>
<script setup>
const props = defineProps({
  data: {
    type: Object,
    default: () => ({})
  }
});

const config = reactive(props.data);

const title = computed(() => {
  return (typeof config.title === "string" && config.title) || ""
});
const datetime = computed(() => {
  return (typeof config.datetime === "string" && config.datetime) || ""
});
const date = computed(() => {
  return (typeof config.date === "string" && config.date) || ""
});
const time = computed(() => {
  return (typeof config.time === "string" && config.time) || ""
});
const location = computed(() => {
  return (typeof config.location === "string" && config.location) || ""
});
const address = computed(() => {
  return (typeof config.address === "string" && config.address) || ""
});
const img = computed(() => {
  return (typeof config.img === "string" && config.img) || ""
});
const img_mobile = computed(() => {
  return (typeof config.img_mobile === "string" && config.img_mobile) || ""
});
</script>
<style scoped lang="less">
.event-header {

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  &_title {
    padding: 38px 0 80px;
    margin: 0;
  }

  &_info {
    display: flex;
    flex-direction: row;

    &-date {
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: 16px;
      text-transform: uppercase;
      font-family: @font3;
      font-weight: 700;

      p {
        margin: 12px 0 0;

        &:nth-child(3) {
          margin: 12px 0 12px;
        }
      }

      &_line {
        margin: 0;

        &-r {
          margin: 0;
          transform: scaleX(-1);
        }
      }

      &_number {
        font-size: 30px;
        font-weight: 300;
      }
    }
  }

  &-img {
    padding: 0 60px 80px;
  }
}

</style>