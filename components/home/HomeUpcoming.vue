<template>
  <section class = "home-upcoming upcoming">
    <div class = "upcoming_wrapper">
      <div class = "upcoming_container">
        <h2 class = "upcoming_title section-title">Мероприятия</h2>
        <!--      swiper-->
        <swiper-container class = "swiper swiper--3s" ref = "swiper">
          <swiper-slide class = "upcoming_swiper-slide swiper-slide"
              v-for = "(card, cardIx) in eventsList"
              :key = "cardIx">
            <CardEvent class = "event-card" :card = "card"/>
          </swiper-slide>
        </swiper-container>

        <div class = "swiper-footer">
          <button type = "button" class = "arrow swiper-arrow-prev arrow--left">
            <SvgIcon name = "arrow"/>
          </button>

          <div class = "swiper-pagination"></div>

          <button type = "button" class = "swiper-arrow-next arrow">
            <SvgIcon name = "arrow"/>
          </button>
        </div>

        <NuxtLink class = "upcoming_link link" to = "/events">Смотреть все</NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
// import {Swiper, SwiperSlide} from 'swiper/vue';

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

const swiper = ref();

const update = (sw) => {
  sw.update();
}

const params = {
  slidesPerView: 3,
  freeMode: true,
  spaceBetween: 0,
  speed: 500,
  grabCursor: true,
  on: {
    resize: (swiper) => {
      update(swiper);
    }
  }
};
//pagination

onMounted(() => {
  nextTick(() => {
    Object.assign(swiper.value, params);
    swiper.value.initialize();
    update(swiper.value.swiper);
  });
});

</script>

<style scoped lang = "less">
.upcoming {
  &_wrapper {
    padding: 84px 0 148px;
    //background-image: url("../assets/images/home-events.png");
    background-position: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;

    @media @bw1660 {
      padding: 100px 0 77px;
    }

    @media @bw1340 {
      padding: 80px 0 43px;
    }

    @media @bw768 {
      padding: 50px 0 40px 0;
    }
  }

  &_container {
    .container();
    display: flex;
    flex-direction: column;

    @media @bw1340 {
      padding-left: 0;
      padding-right: 0;
    }
  }

  &_link {
    display: flex;
    text-align: end;
    flex-direction: column;

    @media @bw1340 {
      margin-right: 30px;
    }

    @media @bw768 {
      margin-right: 20px;
      padding-left: 20px;
    }
  }

  &_swiper-slide.swiper-slide {
    &:first-child {
      //margin-left: 30px;
      @media @bw768 {
        margin-left: 20px;
      }
    }

    &:last-child {
      //margin-right: 30px;
      @media @bw768 {
        margin-right: 20px;
      }
    }
  }
}

</style>