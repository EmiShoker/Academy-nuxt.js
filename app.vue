<template>
  <div>
    <PageHeader class="app_header"/>
    <NuxtPage class="app_page"/>
    <PageHeader class="app_footer"/>
  </div>
</template>
<style lang="less">
.app {
  &_page{
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }
}
</style>