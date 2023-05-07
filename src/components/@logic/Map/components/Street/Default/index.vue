<template>
  <div :class="[$style.street, $style[$props.cell.position]]">
    <div :class="$style.price">
      {{ $props.cell.price }} Р
    </div>
    <div :class="$style.header">
      <div :class="$style.title">
      <p>
        {{ $props.cell.title }}
      </p>
    </div>
    <div :class="$style.color" :style="{ 'background-color': $props.cell.color }"></div>
    </div>
  </div>
</template>
<script src="./setup.js"></script>
<style lang="scss" module src="./style.scss"/>