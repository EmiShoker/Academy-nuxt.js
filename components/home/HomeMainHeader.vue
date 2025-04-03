<template>
<div class="main-header">
    <h1 class="main-header_title">АРТ — ПРОСТРАНСТВО</h1>
    <Image class="main-header_lenni" name="LENNI"/>
    <!-- <img class="main-header_lenni" src="assets/images/LENNI.svg" /> -->
    <h1 class="main-header_subtitle">ДЛЯ ЛЮДЕЙ, ГОРЯЩИХ СЕРДЦЕМ И ДЕЛОМ<br />МЕСТО ДЛЯ НАСТОЯЩЕГО</h1>

    <div class="main-header_choice choice">
        <h1 class="choice_title">Я хочу:</h1>
        <div class="choice_btn-container">
            <button @click="eventOpenBtn" id="js-eventOpenBtn" class="choice_btn-r btn btn-red">Провести мероприятие</button>
            <button class="choice_btn-b btn">Стать арендатором</button>
        </div>
    </div>
</div>
</template>

<script setup>
    import { useStore } from '@/stores';
    const store = useStore();
    const eventOpenBtn = () => {
        store.setModal('events', {
            show: true,
        });
    }
</script>

<style lang="less">
.main-header {
    &_title {
        margin-top: 100px;
    }
    &_title,
    &_subtitle {
        font-family: @font2;
        font-size: 40px;
        color: @black;
        text-shadow:
            0 0 16px,
            0 0 7px currentColor;
        text-align: center;
        padding: 60px 0;
    }

    // &_lenni {
    // }
}   
</style>
