<template>
  <div class="home">
    <HomeMainHeader class="home_main-header"/>
    <HomeOffers/>
  </div>
</template>

<script setup>
</script>

<style lang="less">
.home {
  box-sizing: border-box;
  width: 100%;
  overflow: hidden;
  @media @bw1340 {
    padding: 80px 0;
  }

  &_main-header {
    margin-bottom: 100px;
    @media @bw1340 {
      margin-bottom: 75px;
    }
    @media @bw768 {
      margin-bottom: 40px;
    }
  }

  &_offers {
    margin: 0 auto 200px;
    @media @bw1340 {
      margin-bottom: 130px;
    }
    @media @bw768 {
      margin-bottom: 100px;
    }
  }
}

</style>