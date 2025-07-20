<template>
  <section class = "home-offers offers">
    <h4 class = "home-offers_title">Я хочу:</h4>

    <div class = "home-offers_btns">
      <button @click = "openEventModal" class = "home-offers_btn btn btn--red" type = "button">Провести
        мероприятие
      </button>
      <button @click = "openRentModal" class = "home-offers_btn btn" type = "button">Стать арендатором</button>
    </div>
  </section>
</template>

<script setup>
import {useStore} from "@/stores";

const store = useStore();

const openEventModal = () => {
  store.setModal('events', {
    show: true,
  })
}
const openRentModal = () => {
  store.setModal('rent', {
    show: true,
  })
}
</script>
<style lang = "less" scoped>
.home-offers {
  .container;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &_title {
    display: flex;
    justify-content: center;
    max-width: 624px;
    width: 100%;
    margin: 0 0 46px 25px;
    font-weight: 400;
    font-family: @font2;
    font-size: 22px;
    line-height: 1.36;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    @media (max-width: 1340px) {
      font-size: 16px;
    }
  }

  &_btns {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 624px;
    width: 100%;

    @media (max-width: 600px) {
      width: 624px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  &_btn {
    &:first-child {
      width: 272px;
      padding: 15px 0;
    }

    &:last-child {
      width: 246px;
    }

    @media (max-width: 600px) {
      width: 100%;
      margin-top: 25px;
    }
  }
}


//.home-offers {
//  box-sizing: border-box;
//  display: flex;
//  flex-direction: column;
//  align-items: center;
//  text-align: center;
//  margin: auto;
//  width: 100%;
//  padding: 0 0 150px;
//  &_title {
//    font-family: @font2;
//    font-size: 26px;
//    text-transform: uppercase;
//    font-weight: 400;
//    text-align: center;
//  }
//  &_btns {
//    display: flex;
//    justify-content: space-between;
//    align-items: center;
//    margin-top: 30px;
//    max-width: 624px;
//    gap: 130px;
//  }
//  &-btn {
//    padding: 15px 0;
//  }
//  //&_btn-r,
//  //&_btn-b {
//  //  padding: 15px 0;
//  //  width: 300px;
//  //}
//}
</style>
