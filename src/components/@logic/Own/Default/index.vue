<template>
  <div :class="[$style.own, isShow && $style.isShow]">
    <div :class="$style.list">
      <CardStreet :class="$style.card" v-for="(item, index) in 8" :key="index"/>
    </div>
    <div @click="changeShowing" :class="$style.btn">
      Имущество
    </div>
  </div>
</template>
<script src="./setup.js"></script>
<style lang="scss" module src="./style.scss"/>