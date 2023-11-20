<template>
  <div :class="[$style.own, true && $style.isShow]">
    <div :class="$style.list">
      <OwnColumn :column="item" v-for="(item, index) in ownColsStreets" :key="index" />
      <OwnColumn :column="item" v-for="(item, index) in ownColsStation" :key="index" />
      <OwnColumn :column="item" v-for="(item, index) in ownColsServices" :key="index" />
    </div>
    <!--<div @click="changeShowing" :class="$style.btn">
      Имущество
    </div>-->
  </div>
</template>
<script src="./setup.js"></script>
<style lang="scss" module src="./style.scss"/>