<template>
@@include('blocks/aboutus.html')

<div class="home">
    @@include('blocks/blog-listing.html', {"class": "home-listing"})
    <br />
    @@include('blocks/upcoming.html', {"class": "home-upcoming" })
</div>

@@include('blocks/contacts.html')
<div class="doit">
<blockquote class="title-huge">
    <span class="title-huge-part1">Просто делайте,</span>
    <span class="title-huge-part2">что нравится,</span>
    <br />
    <span class="title-huge-part3">а мы вам поможем</span>
</blockquote>
</div>
</template>

<script setup>


</script>

<style lang="less" scoped></style>