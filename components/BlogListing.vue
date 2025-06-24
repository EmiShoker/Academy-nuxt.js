<template>
  <section class="events">

    <div class="events_listing">
      <h2 class="section-title">Мероприятия</h2>

      <div class="events_list">
        <CardEvent v-for="(card, cardIdx) in cards" :key="cardIdx" :card="card"/>
      </div>

      <div class="events_arrow">
        <a href="#" class="events_link link">
          <span>Показать еще</span>
          <SvgIcon class="events_arrow-icon" name="arrow" width="92" height="62"></SvgIcon>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const cards = [
  {
    "class": "events_card",
    "link": "nirvana",
    "img": "/images/events/Nirvana.svg",
    "alt": "nirvana",
    "title": "Собираемся и слушаем альбом Nirvana",
    "descr": "Это третий альбом группы, выпущенный после смерти Курта Кобейна и первый, содержащий студийный материал.",
    "time": "07.12.2022 | начало 18.00",
    "datetime": "2022-12-07T18:00"
  },
  {
    "class": "events_card",
    "link": "stuff",
    "img": "/images/events/HowStuffWorks.svg",
    "alt": "stuff",
    "title": "Есть тема, нужно обсудить с HowStuffWorks",
    "descr": "Один из самых популярных подкастов в мире. В нём авторы объясняют, как устроены разные вещи.",
    "time": "14.12.2022 | начало 18.30",
    "datetime": "2022-12-14T18:30"
  },
  {
    "class": "events_card",
    "link": "sade",
    "img": "/images/events/Sade.svg",
    "alt": "sade",
    "title": "Вечер | The Best of Sade",
    "descr": "Музыка группы имеет эклектичный характер, сочетая в себе элементы музыки соул, джаза, ритм-блюза и фанка.",
    "time": "16.12.2021 | начало 18.00",
    "datetime": "2021-12-16T18:00"
  },
  {
    "class": "events_card",
    "link": "malevich",
    "img": "/images/events/Malevich.svg",
    "alt": "malevich",
    "title": "Выставка Малевича в Томске",
    "descr": "Это будет самая полная выставка с 1988 года, того времени, когда впервые заговорили о Малевиче. Экспозиция займёт два этажа павильона.",
    "time": "23.12.2022 | начало 20.00",
    "datetime": "2022-12-23T20:00"
  },
  {
    "class": "events_card",
    "link": "tatler",
    "img": "/images/events/Tatler.svg",
    "alt": "tatler",
    "title": "Мастер — класс по студийной съемке от Tatler",
    "descr": "Фотографы издания расскажут, как им удается создавать потрясающие кадры и что может испортить весь процесс.",
    "time": "25.12.2022 | начало 13.00",
    "datetime": "2022-12-25T13:00"
  },
  {
    "class": "events_card",
    "link": "hatters",
    "img": "/images/events/Hatters.svg",
    "alt": "hatters",
    "title": "Повесилимся на славу на концерте The Hatters",
    "descr": "Российская джипси-фолк-рок группа, основанная в 2016 году в Санкт-Петербурге. В основной состав группы входят Юрий Музыченко.",
    "time": "23.12.2022 | начало 10.00",
    "datetime": "2022-12-23T10:00"
  }
]

</script>


<style scoped lang="less">
.events {
  padding: 140px 0 100px;

  &_list {
    .container;
    display: flex;
    flex-wrap: wrap;
    
  }

  &_link {
    display: flex;
    text-align: center;
    flex-direction: column;

    &:hover .events_arrow-icon {
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
  }

}

</style>