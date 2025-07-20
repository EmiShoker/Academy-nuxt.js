<template>
  <article class = "article-card">
    <a href = "#" class = "article-card_link">
      <picture class = "article-card_picture">
        <source media = "(max-width: 450px)" type = "image/webp" :srcset = "card.img_webp"/>
        <source media = "(max-width: 450px)" :srcset = "card.img"/>

        <source media = "(max-width: 1169px)" type = "image/webp" :srcset = "card.img_tablet_webp"/>
        <source media = "(max-width: 1169px)" :srcset = "card.img_tablet"/>

        <source media = "image/webp" :srcset = "card.img_webp"/>

        <img :src = "card.img" :alt = "card.alt" class = "article-card_img"/>
      </picture>
    </a>

    <div class = "article-card_info">
      <time :datetime = "card.datetime" class = "article-card_time">{{ card.time }}</time>

      <a href = "#" class = "article-card_title-link">
        <h4 class = "article-card_title">{{ card.title }}</h4>
      </a>
      <div class = "arrow article-card_arrow arrow">
        <SvgIcon class = "article-card_arrow-icon" name = "arrow" width = "92" height = "62"/>
      </div>

      <p class = "article-card_description">{{ card.descr }}</p>
    </div>
  </article>

</template>

<script setup>
const props = defineProps({
  card: {
    type: Object,
    required: true,
    default: () => {
    },
  }
})

</script>

<style lang = "less" scoped>
.article-card {
  position: relative;
  box-sizing: border-box;
  display: flex;
  width: 100%;

  & + .article-card {
    margin-top: 120px;

    &::before {
      content: "";
      display: block;
      position: absolute;
      margin: 0 auto 60px;
      bottom: 100%;
      left: 0;
      right: 0;
      width: 100%;
      max-width: 1254px;
      height: 1px;
      background-color: @black;
      pointer-events: none;
    }

    &:nth-last-child(n) {
      margin-bottom: 80px;
    }
  }

  &:hover {
    .article-card_picture {
      box-shadow: 0 0 60px fade(@black, 55%);
    }
  }

  &_link {
    flex-shrink: 0;
    align-self: flex-start;
    display: block;
    width: 467px;
    margin-right: 60px;
    font-size: 0;
    text-decoration: none;

    &:hover {
      & ~ .article-card_info {
        .article-card_title-link {
          color: @red;
          text-decoration: @red;
        }
      }
    }
  }

  &_picture {
    display: block;
    position: relative;
    width: 100%;
    transition: box-shadow 0.3s;
    overflow: hidden;

    &::after {
      content: "";
      display: block;
      width: 100%;
      padding-top: 62.3126%;
    }
  }

  &_img {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &_info {
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: 30px;
    padding-bottom: 30px;
    padding: 30px 0;
    padding-right: 150px;
  }

  &_time {
    margin: 0 0 40px;
    font-weight: 300;
    font-size: 16px;
    line-height: 22px;
  }

  &_title-link,
  &_description {
    max-width: 470px;
  }

  &_title-link {
    margin: auto 0 40px;
    color: @black;
    text-decoration-color: transparent;
    transition: color 0.3s,
    text-decoration-color 0.3s;

    &:hover {
      color: @red;
      text-decoration-color: @red;
    }
  }

  &_title {
    margin: 0;
    color: inherit;
    font-size: 24px;
    font-weight: 600;
    line-height: 33px;
  }

  &_description {
    margin: 0;
    font-size: 16px;
    line-height: 22px;
  }

  &_arrow {
    position: absolute !important;
    right: 0;
    bottom: 30px;
  }
}

</style>
