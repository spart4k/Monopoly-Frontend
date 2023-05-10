<template>
  <div :class="[$style.station, $style[$props.cell.position]]">
    <p :class="$style.title">{{ $props.cell.title }}</p>
    <img :src="imagePath" alt="">
    <p :class="$style.price">{{ $props.cell.price }} Р</p>
  </div>
</template>
<script src="./setup.js"></script>
<style lang="scss" module src="./style.scss"/>