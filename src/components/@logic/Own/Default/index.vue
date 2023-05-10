<template>
  <div :class="[$style.own, isShow && $style.isShow]">
    <div :class="$style.list">
      <component :is="item.type" :class="$style.card" :card="item" v-for="(item, index) in own" :key="index"/>
      <!--<Street :class="$style.card" :card="item" v-for="(item, index) in own" :key="index"/>-->
    </div>
    <div @click="changeShowing" :class="$style.btn">
      Имущество
    </div>
  </div>
</template>
<script src="./setup.js"></script>
<style lang="scss" module src="./style.scss"/>