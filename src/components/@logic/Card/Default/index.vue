<template>
  <div :class="$style.card">
    <div :class="$style.wrap">
      <slot/>
    </div>
  </div>
</template>
<script src="./setup.js"></script>
<style lang="scss" module src="./style.scss"/>