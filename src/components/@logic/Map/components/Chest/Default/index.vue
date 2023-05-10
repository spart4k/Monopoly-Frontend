<template>
  <div :class="[$style.chest, $style[$props.cell.position]]">
    <p :class="$style.title">{{ $props.cell.title }}</p>
    <img :src="imagePath" alt="">
    <p :class="$style.price">{{ $props.cell.price }}</p>
  </div>
</template>
<script src="./setup.js"></script>
<style lang="scss" module src="./style.scss"/>