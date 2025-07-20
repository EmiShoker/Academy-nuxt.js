<template>
  <footer class = "page-footer">
    <div class = "page-footer_lines">
      <span class = "page-footer_line line"></span>
      <span class = "page-footer_line line"></span>
    </div>
    <div class = "page-footer_block">
      <div class = "page-footer_block-links">
        <a class = "page-footer_block-link link" href = "#">Календарь мероприятий</a>
        <a class = "page-footer_block-link link" href = "#">Провести мероприятие</a>
        <a class = "page-footer_block-link link" href = "#">Стать арендатором</a>
        <a class = "page-footer_block-link link" href = "#">Наши проекты</a>
        <a class = "page-footer_block-link link" href = "#">Контакты</a>
      </div>
      <form id = "js-subscribeForm"
          action = "https://jsonplaceholder.typicode.com/posts"
          class = "page-footer_subscribe-form subscribe-form">
        <h4 class = "subscribe-form_title btext">
          Подпишись и будь в курсе происходящего
        </h4>
        <div class = "subscribe-form_wrapper">
          <FieldEmail :config = "{
          name: 'email',
          label: 'Email',
        }"
              :submitCount = "submitCount"
              class = "subscribe-form_input"
          />
          <button class = "subscribe-form_submit btn" type = "submit">Подписаться</button>
        </div>
        <label class = "subscribe-form_check check">
          <span class = "check_label check_label--s"> Согласен на обработку персональных данных </span>
          <input checked
              class = "check_input"
              name = "agree"
              required type = "checkbox"/>
          <span class = "check_mark"></span>
        </label>
      </form>
    </div>
    <div class = "page-footer_block2">
      <div class = "page-footer_block2-socials socials">
        <a class = "page-footer_block2-social socials_link" href = "">
          <SvgIcon class = "page-footer_block2-social_icon socials_icon" name = "insta" height = "24" width = "24"/>
        </a>
        <a class = "page-footer_block2-social socials_link" href = "">
          <SvgIcon class = "page-footer_block2-social_icon socials_icon" name = "vk" height = "24" width = "24"/>
        </a>
      </div>
      <div class = "page-footer_block2-links">
        <a class = "page-footer_block2-link link" href = "">Политика конфиденциальности</a>
        <a class = "page-footer_block2-link link " href = "">Cookies</a>
      </div>
      <div class = "page-footer_block2-copyright">
        © Millennials 2022
      </div>
      <div class = "page-footer_block2-create">
        Создание и продвижение
        <a class = "page-footer_create-icon" href = "">
          <SvgIcon height = "17" name = "tagree" width = "57"/>
        </a>

      </div>
    </div>
    <!--    <div class = "page-footer_container">-->
    <!--      <nav class = "page-footer_nav">-->
    <!--        <a href = "#" class = "page-footer_nav-link link">Календарь мероприятий</a>-->
    <!--        <a href = "#" class = "page-footer_nav-link link">Провести мероприятие</a>-->
    <!--        <a href = "#" class = "page-footer_nav-link link">Стать арендатором</a>-->
    <!--        <a href = "#" class = "page-footer_nav-link link">Наши проекты</a>-->
    <!--        <a href = "#" class = "page-footer_nav-link link">Контакты</a>-->
    <!--      </nav>-->
    <!--      <form-->
    <!--          action = "https://jsonplaceholder.typicode.com/posts"-->
    <!--          id = "js-subscribeForm"-->
    <!--          class = "page-footer_subscribe subscribe subscribe-form">-->
    <!--        <div class = "subscribe_wrapper">-->
    <!--          <span class = "subscribe-field_text btext">Подпишись и будь в курсе происходящего</span>-->
    <!--          <div class = "subscribe_input-wrapper">-->
    <!--            <label class = "subscribe_field field">-->
    <!--              <input-->
    <!--                  id = "js-subscribeEmail"-->
    <!--                  class = "field_input"-->
    <!--                  type = "email"-->
    <!--                  placeholder = "Email"-->
    <!--                  name = "email"-->
    <!--                  required/>-->
    <!--            </label>-->
    <!--            <button class = "btn subscribe-btn" type = "submit">Подписаться</button>-->
    <!--          </div>-->
    <!--        </div>-->

    <!--        <label class = "check">-->
    <!--          <span class = "check_label check_label-s"> Согласен на обработку персональных данных </span>-->
    <!--          <input type = "checkbox" name = "agree" class = "check_input" required checked/>-->

    <!--          <span class = "check_mark"></span>-->
    <!--        </label>-->
    <!--      </form>-->
    <!--    </div>-->
    <!--    <div class = "page-footer_links">-->
    <!--      <div class = "page-footer_links-l">-->
    <!--        <p class = "page-footer_links-l-copyright">© Millennials 2022</p>-->
    <!--        <a href = "#" class = "page-footer_link link">Политика конфиденциальности</a>-->
    <!--        <a href = "#" class = "page-footer_link link">Cookies</a>-->
    <!--      </div>-->
    <!--      <div class = "page-footer_links-c">-->
    <!--        <div class = "page-footer_links-c-btns">-->
    <!--          <button class = "page-footer_links-c-btn x-btn">-->
    <!--            <SvgIcon class = "x-btn_icon" name = "inst" width = "24" height = "24"/>-->
    <!--          </button>-->
    <!--          <button class = "page-footer_links-c-btn x-btn">-->
    <!--            <SvgIcon class = "x-btn_icon" name = "vk" width = "24" height = "24"/>-->
    <!--          </button>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      <div class = "page-footer_links-r">-->
    <!--        <p class = "btext">Создание и продвижение</p>-->
    <!--        <SvgIcon class = "page-footer_links-r-icon" name = "tagree" height = "17px" width = "56px"/>-->
    <!--      </div>-->
    <!--    </div>-->
  </footer>

</template>
<script setup>
</script>
<style lang = "less" scoped>
.page-footer {
  .container;
  padding-bottom: 75px;
  @media @bw1170 {
    padding-bottom: 60px;
  }
  @media @bw600 {
    padding-bottom: 50px;
  }
  //flex: 0 0 auto;
  //position: relative;
  //bottom: 0;
  //margin: 0 auto;
  ////height: 320px;
  //width: 1334px;
  //z-index: 100;

  &_lines {
    display: flex;
    margin-bottom: 60px;
    gap: 100px;
    @media @bw1660 {
      gap: 90px;
    }
    @media @bw1020 {
      gap: 50px;
    }
    @media @bw600 {
      gap: 20px;
    }

    &::before,
    &::after {
      content: "";
      flex-grow: 1;
      width: 2px;
      height: 2px;
    }

    &::before {
      background: linear-gradient(270deg, @black 0%, rgba(255, 255, 255, 0) 82.86%);
    }

    &::after {
      background: linear-gradient(90deg, @black 0%, rgba(255, 255, 255, 0) 100%);

    }
  }

  &_block {
    display: flex;
    gap: 50px;
    justify-content: space-between;
    margin-bottom: 60px;

    &-links {
      position: relative;
      display: flex;
      flex-direction: column;
    }

    &-link {
      padding: 5px 0 5px;
      border-left: 5px solid @red;

      &::before {
        content: "";
        padding: 0 10px;
      }

      &:hover {
        border-left: 5px solid @black;
      }
    }
  }

  &_block2 {
    display: grid;
    grid-template-columns: 1fr 160px 1fr;
    grid-template-areas:
        "copyright socials create"
        "links socials create";


    &-socials {
      grid-area: socials;
    }

    &-links {
      display: flex;
      grid-area: links;
      gap: 60px;
    }

    &-copyright {
      grid-area: copyright;
      margin-bottom: 20px;
    }

    &-create {
      display: flex;
      grid-area: create;
      margin-left: auto;
      align-self: flex-end;
      align-items: flex-end;
      gap: 15px;

      &-link {
        flex-shrink: 0;
        font-size: 0;
        color: @black;
        transition: .2s;

        &:hover {
          @media (hover: hover) {
            color: @red;
          }
        }

        &:active {
          color: @red;
        }
      }
    }
  }

  //&_social {
  //  color: @white;
  //
  //  &-icon {
  //    transform: translateY(4px);
  //  }
  //}

  &_container {
    display: flex;
    width: 100%;
    justify-content: space-between;

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
      //background-color: linear-gradient;
      pointer-events: none;
    }
  }

  &_nav {
    display: flex;
    flex-direction: column;

    &-link {
      text-align: start;
      border-left: 5px solid @red;
      line-height: 34px;

      &::before {
        content: "";
        padding: 0 10px;
      }

      &:hover {
        border-left: 5px solid @black;
      }
    }
  }

  &_link {
    margin-right: 25px;
  }

  &_links {
    padding: 50px 0 25px;
    display: flex;
    align-items: flex-end;
    width: 100%;

    &-l {
      &-copyright {
        margin: 0 0 15px;
      }
    }

    &-c {
      flex: 1; // Занимает все доступное пространство
      &-btns {
        display: flex;
        justify-content: center;
        margin-right: 150px;
      }


      &-btn {
        margin: 0 5px;

        &:hover {
          transform: rotate(360deg);
        }
      }
    }

    &-r {
      display: flex;
      align-items: flex-end;

      &-icon {
        margin: 0 0 5px 5px;
      }
    }
  }
}

.subscribe-form {
  max-width: 410px;
  width: 100%;

  &_title {
    margin: 0 0 15px;
    font-weight: 600;
    font-size: 16px;
    line-height: 1.3;
  }

  &_wrapper {
    display: flex;
    height: 55px;
    margin-bottom: 15px;
  }

  &_field-wrapper {
    flex-grow: 1;
  }

  &_input {
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    background-color: @white;
    border-radius: 0;
    border: none;
    font-size: 14px;
    line-height: 1.2;
    color: @black;

    //.field_input {
    //  width: 275px;
    //}

    &::placeholder {
      color: @grey-dark;
    }
  }

  &_submit {
    width: 135px;
    background-color: @black;
    color: @white;
    //padding: 0;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    outline: none;
    height: 100%;
    //padding: 15px 23px;
    //background-color: @white;
    //color: @white;

    &:hover {
      background-color: transparent;
      color: @black;
      border: 1px solid @black;
    }
  }

  //box-sizing: border-box;
  //display: flex;
  //flex-direction: column;
  //width: 410px;

  label.error,
  div.error {
    display: block;
    margin: 5px 0 0;
    color: @red;
  }

  //&_input-wrapper {
  //  display: inline-flex;
  //  width: 100%;
  //}
  //
  //&_field {
  //  .field_input {
  //    width: 275px;
  //  }
  //}

  //&-btn {
  //  width: 135px;
  //  background-color: @black;
  //  color: @white;
  //  height: 55px;
  //  padding: 0;
  //
  //  &:hover {
  //    background-color: @white;
  //    color: @black;
  //    border: 1px solid @black;
  //  }
  //}
}

</style>