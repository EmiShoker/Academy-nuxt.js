<template>
  <h1 class="main-header_title">АРТ — ПРОСТРАНСТВО</h1>
  <div class="main-header_logo">
    <SvgIcon class="main-header_lenni" name="lenni" width="100%" height="325"></SvgIcon>
  </div>
<!--  <img class="main-header_lenni" src="assets/images/home/LENNI.svg" />-->
  <h1 class="main-header_subtitle">ДЛЯ ЛЮДЕЙ, ГОРЯЩИХ СЕРДЦЕМ И ДЕЛОМ<br />МЕСТО ДЛЯ НАСТОЯЩЕГО</h1>

</template>
<script setup lang="ts">
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
  &_logo{
    width: 100%;
  }

}

</style>