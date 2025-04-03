<template><footer class="page-footer">
    <div class="page-footer_lines">
        <span class="page-footer_line line"></span>
        <span class="page-footer_line line"></span>
    </div>

    <div class="page-footer_container">
        <nav class="page-footer_nav">
            <a href="#" class="page-footer_nav-link link">Календарь мероприятий</a>
            <a href="#" class="page-footer_nav-link link">Провести мероприятие</a>
            <a href="#" class="page-footer_nav-link link">Стать арендатором</a>
            <a href="#" class="page-footer_nav-link link">Наши проекты</a>
            <a href="#" class="page-footer_nav-link link">Контакты</a>
        </nav>
        <form
            action="https://jsonplaceholder.typicode.com/posts"
            id="js-subscribeForm"
            class="page-footer_subscribe subscribe subscribe-form">
            <div class="subscribe_wrapper">
                <span class="subscribe-field_text btext">Подпишись и будь в курсе происходящего</span>
                <div class="subscribe_input-wrapper">
                    <label class="subscribe_field field">
                        <input
                            id="js-subscribeEmail"
                            class="field_input"
                            type="email"
                            placeholder="Email"
                            name="email"
                            required />
                    </label>
                    <button class="btn subscribe-btn" type="submit">Подписаться</button>
                </div>
            </div>

            <label class="check">
                <span class="check_label check_label-s"> Согласен на обработку персональных данных </span>
                <input type="checkbox" name="agree" class="check_input" required checked />

                <span class="check_mark"></span>
            </label>
        </form>
    </div>
    <div class="page-footer_links">
        <div class="page-footer_links-l">
            <p class="page-footer_links-l-copyright">© Millennials 2022</p>
            <a href="#" class="page-footer_link link">Политика конфиденциальности</a>
            <a href="#" class="page-footer_link link">Cookies</a>
        </div>
        <div class="page-footer_links-c">
            <div class="page-footer_links-c-btns">
                <button class="page-footer_links-c-btn x-btn">
                    <SvgIcon class="x-btn_icon" width="24" height="24" name="insta"/>
                    <!-- <img  src="assets/images/insta.svg" /> -->
                </button>
                <button class="page-footer_links-c-btn x-btn">
                    <SvgIcon class="x-btn_icon" width="24" height="24" name="vk"/>
                    <!-- <img class="x-btn_icon" width="24" height="24" src="assets/images/vk.svg" /> -->
                </button>
            </div>
        </div>
        <div class="page-footer_links-r">
            <p class="btext">Создание и продвижение</p>
            <SvgIcon class="page-footer_links-r-icon" width="57" height="17" name="tagree"/>
            <!-- <img class="page-footer_links-r-icon" src="assets/images/tagree.svg" /> -->
        </div>
    </div>
</footer>
 </template>

<script>
import SvgIcon from '../SvgIcon.vue';


    export default {
        
    }
</script>

<style lang="less" scoped>
.line {
    width: 80%;
    gap: 45px;
    margin: 15px auto;
    border-style: solid;
    border-width: 1px;
    border-image: linear-gradient(to right, @grey 25%, @black) 1;

    &:nth-child(2) {
        transform: scaleX(-1);
    }
}
.page-footer {
    flex: 0 0 auto;
    position: relative;
    bottom: 0;
    margin: 0 auto;
    //height: 320px;
    width: 1334px;
    z-index: 100;

    &_lines {
        margin: 0 0 40px;
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

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
            background-color: linear-gradient;
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
        width: 100%;
        &-l {
            &-copyright {
                margin: 0 0 15px;
            }
        }
        &-c {
            flex: 1;
            &-btns {
                display: flex;
                justify-content: center;
                transform: translateX(-65px);
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
                padding: 0 10px;
                margin: 5px auto;
            }
        }
    }
}
.subscribe {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 410px;

    label.error,
    span.error {
        display: block;
        margin: 5px 0 0;
        color: @red;
    }

    &_input-wrapper {
        display: inline-flex;
        width: 100%;
    }
    &_field {
        .field_input {
            width: 275px;
        }
    }
    &-btn {
        width: 135px;
        background-color: @black;
        color: @white;
        height: 55px;
        padding: 0;

        &:hover {
            background-color: @white;
            color: @black;
            border: 1px solid @black;
        }
    }
}

</style>
 