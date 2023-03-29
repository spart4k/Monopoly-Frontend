<template>
  <button :class="[$style.wrapper, sm && $style.sm, md && $style.md, lg && $style.lg, black && $style.black, disable && $style.disable]" @click="$emit('click')">
    <slot />
  </button>
</template>
<script src="./setup.js"></script>
<style lang="scss" module src="./style.scss"/>