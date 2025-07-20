<template>
  <h2 id = "contacts" class = "section-title">контакты</h2>
  <section class = "contacts">
    <div class = "contacts_wrapper">
      <div class = "contacts_info">
        <div class = "contacts_info-img">
          <SvgIcon class = "contacts_info-img_icon" name = "location"></SvgIcon>
        </div>
        <div class = "contacts_info-text">
          <h4 class = "contacts_info-text_title">Томск, Белая 8</h4>
          <p class = "contacts_info-text_data">2 этаж<br/>оф. 207-208</p>
        </div>
      </div>
      <div class = "contacts_info">
        <div class = "contacts_info-img">
          <SvgIcon class = "contacts_info-img_icon" name = "home"></SvgIcon>
        </div>
        <div class = "contacts_info-text">
          <h4 class = "contacts_info-text_title">Отдел аренды</h4>
          <p class = "contacts_info-text_data">+7 499 350 0730<br/>hi@tagree.ru</p>
        </div>
      </div>
      <div class = "contacts_info">
        <div class = "contacts_info-img">
          <SvgIcon class = "contacts_info-img_icon" name = "star"></SvgIcon>
        </div>
        <div class = "contacts_info-text">
          <h4 class = "contacts_info-text_title">Отдел мероприятий</h4>
          <p class = "contacts_info-text_data">+7 499 350 0730<br/>hi@tagree.ru</p>
        </div>
      </div>
    </div>

    <div class = "contacts_map-container">
      <div class = "contacts_map" id = "js-contactsMap"></div>
    </div>
  </section>
  <div class = "doit">
    <blockquote class = "title-huge">
      <span class = "title-huge-part1">Просто делайте, что нравится,</span>
      <br/>
      <span class = "title-huge-part2">а мы вам поможем</span>
    </blockquote>
  </div>
</template>
<script setup>
</script>
<style lang = "less" scoped>
.contacts {
  .container();
  display: flex;
  justify-content: space-between;

  &_map {
    width: 762px;
    height: 493px;
  }

  &_wrapper {
    margin: auto 0;
  }

  &_info {
    display: flex;
    align-items: center;
    margin-bottom: 50px;

    &:nth-of-type(3) {
      margin-bottom: 0;
    }

    &-img {
      box-sizing: border-box;
      padding: 46px;
      background-color: @black;
      width: 110px;
      height: 110px;
    }

    &-text {
      margin-left: 50px;

      &_title {
        font-weight: 600;
        font-size: 20px;
        margin: 10px 0 5px;
      }

      &_data {
        font-size: 16px;
      }
    }
  }
}

.doit {
  box-sizing: border-box;
  //position: relative;
  margin-top: 100px;
  width: 100%;
  font-family: @font3;
  text-align: right;
  font-weight: 700;
  font-size: 117px;
  white-space: nowrap;
}

.title-huge {
  margin: 0 0 0 -60px;

  &-part2 {
    margin-right: -50px;
  }
}

</style>