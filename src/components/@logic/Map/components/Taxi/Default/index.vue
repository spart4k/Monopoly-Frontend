<template>
  <div :class="[$style.taxi, $style[$props.cell.position]]">
    <p :class="$style.title">{{ $props.cell.title }}</p>
    <p :class="$style.price">Заплатите<br>{{ $props.cell.price }} Р</p>
  </div>
</template>
<script src="./setup.js"></script>
<style lang="scss" module src="./style.scss"/>