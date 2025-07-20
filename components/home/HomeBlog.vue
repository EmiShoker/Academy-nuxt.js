<template>
  <section class = "listing">
    <h2 id = "blog" class = "listing_title section-title">Блог</h2>

    <div class = "listing_article-list">
      <CardBlog v-for = "(card, cards) in cards" :key = "cardIndex" :card = "card"/>
    </div>

    <a href = "#" class = "listing_link link">Смотреть все</a>
  </section>

</template>

<script setup>
const cards = [
  {
    "class": "article-card",
    "img": "/images/blog/theatre.svg",
    "img_tablet": "/images/blog/theatre_tablet.jpg",
    "img_webp": "/images/blog/theatre.webp",
    "img_tablet_webp": "/images/blog/theatre_tablet.webp",
    "alt": "Theatre Photosession",
    "title": "Фотосессия в стенах Театра драмы",
    "descr": "Организовывая фотосессию для локального бренда одежды мы смогли воплотить все пожелания заказчика и у нас получилась отличная работа. Смотрите как это было...",
    "time": "26.11.2022",
    "datetime": "2021-11-26T00:00"
  },
  {
    "class": "article-card",
    "img": "/images/blog/VR.svg",
    "img_tablet": "/images/blog/VR_tablet.jpg",
    "img_webp": "/images/blog/VR.webp",
    "img_tablet_webp": "/images/blog/VR_tablet.webp",
    "alt": "VR exhibition",
    "title": "Выставка VR в Томске",
    "descr": "Клуб виртуальной реальности - это другие миры. яркие эмоции. новый опыт. ... Мы предоставляем нашим клиентам лучший игровой VR-опыт в Томске...",
    "time": "05.11.2022",
    "datetime": "2021-12-05T00:00"
  },
  {
    "class": "article-card",
    "img": "/images/blog/radio.svg",
    "img_tablet": "/images/blog/radio_tablet.jpg",
    "img_webp": "/images/blog/radio.webp",
    "img_tablet_webp": "/images/blog/radio_tablet.webp",
    "alt": "Rocking radio",
    "title": "Rocking radio в заброшенном ангаре",
    "descr": "15 электрогенераторов, километры проводов и пару тонн света. Все это для того, чтобы организовать лучшую вечеринку года для ребят из Новосибирска.",
    "time": "01.11.2022",
    "datetime": "2022-11-01T00:00"
  },
];

</script>

<style lang = "less" scoped>
.home {
  &-listing {
    margin-bottom: 95px;
  }
}

.listing {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1414px;
  margin: 0 auto;
  padding: 0 40px;

  @media @bw1660 {
    margin: 0 -20px -100px;
  }
  @media @bw1340 {
    margin: 0 -15px -100px;
  }
  @media @bw1020 {
    justify-content: center;
    margin: 0 -15px -80px;
  }
  @media @bw768 {
    margin: 0 -10px -80px;
  }
  @media @bw650 {
    margin: 0 0 -60px;
  }

  &_link {
    display: flex;
    text-align-last: end;
    flex-direction: column;

    &:hover .listing_arrow-icon {
      transform: rotate(270deg);
    }
  }

  &_arrow {
    &-icon {
      transition: transform 0.3s;
      padding: 30px 0;
      margin: auto;
      transform: rotate(90deg);
    }

    margin: 70px auto;
  }
}


</style>
