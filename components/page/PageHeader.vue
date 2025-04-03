<template><div class="body">
    <header class="page-header">
        <div class="page-header_container">
            <a href="index.html" class="page-header_logo">
                <SvgIcon class="page-header_logo-icon" name="logo" width="202" height="147"/>
            </a>
            <nav class="page-header_nav" :class="{'page-header_nav--active': navActive}">
                <NuxtLink v-for="(navLink, navLinkIndex) in navList" :key="navLinkIndex" :to="navLink.link" class="page-header_nav-link link">

                    {{ navLink.name }}
                </NuxtLink>
                <!-- <a href="events.html" class="page-header_nav-link link">Мероприятия</a>
                <a href="#blog" class="page-header_nav-link link">Блог</a>
                <a href="#aboutus" class="page-header_nav-link link">О нас</a>
                <a href="#contacts" class="page-header_nav-link link">Контакты</a> -->
            </nav>
            <div class="page-header_nav-user">
                <a href="#" class="page-header_nav-user-link"> Александр С. </a>
                <a href="#" class="page-header_nav-logout">
                    <SvgIcon cclass="page-header_nav-logout-icon" name="door" width="24" height="24"/>
                </a>
            </div>
            <div class="page-header_right-block">
                <a href="#" class="page-header_user-btn btn">
                    Войти
                    <SvgIcon class="page-header_user-icon" name="user" width="21" height="18"/>
                </a>
                <button id="js-navToggle" type="button" class="page-header_nav-toggle" :class="{'page-header_nav-toggle--active': navActive}" @click="navToggle"></button>
            </div>
        </div>
    </header>
</div>
</template>

<script setup>
// import { useStore } from '@/store';
// const store = useStore();
const navActive = ref(false);

const navToggle = () => {
    navActive.value = !navActive.value
    document.documentElement.classList.toggle('show-nav');

};

const navList = [
    {
        link: '/events',
        name: "Мероприятия"
    },
    {
        link: '#blog',
        name: "Блог"
    },
    {
        link: '#aboutus',
        name: "О нас"
    },
    {
        link: '#contacts',
        name: "Контакты"
    },
]
</script>

<style lang="less" scoped>
.page-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 147px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(222, 222, 222, 0.5);
    backdrop-filter: blur(20px);
    z-index: 100;

    @media @bw1660 {
        height: 111px;
    }
    @media @bw768 {
        height: 111px;
    }
    @media @bw320 {
        height: 70px;
    }
    &::before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: fade(@grey, 98%);
        backdrop-filter: blur(20px);
        @supports (backdrop-filter: blur(20px)) {
            background-color: fade(@grey, 25%);
            backdrop-filter: blur(20px);
        }
    }

    &_container {
        .container;
        position: relative;
        display: flex;
        align-items: center;
        z-index: 1;
    }
    &_logo {
        flex-shrink: 0;
        width: 202px;
        height: 147px;
        font-size: 0;
        text-decoration: none;

        @media @bw1660 {
            width: 152px;
            height: 111px;
        }
        @media @bw768 {
            width: 152px;
            height: 111px;
        }
        @media @bw360 {
            width: 96px;
            height: 70px;
        }
    }
    &_logo-icon {
        width: 100%;
        height: 100%;
    }
    &_nav {
        box-sizing: border-box;
        display: flex;
        align-items: baseline;
        margin: 0 auto;

        @media @bw1020 {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100vh;
            flex-direction: column;
            align-items: flex-start;
            padding: 211px 30px 30px;
            background-color: fade(@grey, 98%);
            transition: transform 0.4s;
            transform: translateX(-100%);

            overflow-x: hidden;
            overflow-y: auto;

            @supports (backdrop-filter: blur(20px)) {
                background-color: fade(@grey, 70%);
                backdrop-filter: blur(20px);
            }
        }
        @media @bw768 {
            padding: 150px 20px 30px;
        }
        &--active {
                @media @bw1020 {
                transform: translateX(0);
            }
        }
        &-link {
            margin: 10px 25px;
        }
    }
    &_nav-toggle {
        display: none;
        &:hover {
            cursor: pointer;
        }
        @media @bw1020 {
            display: block;
            position: relative;
            right: -11px;
            margin-left: 18px;
            width: 40px;
            height: 40px;
            border: none;
            background: none;
        }
        @media @bw768 {
            margin-left: 5px;
        }
        &::before,
        &::after {
            content: "";
            display: block;
            position: absolute;
            top: 19px;
            left: 11px;
            width: 18px;
            height: 2px;
            border-radius: 2px;
            background-color: @black;
            transform-origin: 50% 50%;
            transition:
                transform 0.4s,
                box-shadow 0.4s;
        }
        &::before {
            top: 13px;
            box-shadow: 0 6px 0 @black;
        }
        &::after {
            top: 25px;
        }
        &--active {
            &::before {
            transform: translate(0, 6px) rotate(45deg);
            box-shadow: none;
            }
            &::after {
                transform: translate(0, -6px) rotate(-45deg);
            }
        }
    }
    &_nav-user {
        display: none;

        @media @bw1020 {
            display: flex;
            align-items: center;
            margin-top: 20px;
        }
    }
    &_nav-user-link {
        margin-right: 25px;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
    }
    &_nav-logout {
        width: 24px;
        height: 24px;
        font-size: 0;
    }
    &_right-block {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 202px;

        @media @bw1660 {
            width: 152px;
        }
        @media @bw1020 {
            width: auto;
            margin-left: auto;
        }
    }
    &_user-btn {
        @media @bw1020 {
            display: flex;
            width: 40px;
            height: 40px;
            padding: 0;
            border: none;
            background: none;
            color: @black;
            font-size: 0;
        }
        &:hover {
            @media @bw1020 {
                cursor: default;
                border: none;
                background-color: transparent;
            }
        }
    }
    &_user-icon {
        display: none;
        @media @bw1020 {
            display: block;
            margin: auto;
        }
    }
}

.show-nav {
    body {
        @media @bw1020 {
            overflow: hidden;
        }
    }
}

</style>
 