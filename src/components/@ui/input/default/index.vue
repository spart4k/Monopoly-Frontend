<template>
  <div :class="$style.wrap">
    <label :class="$style.label">
      <span>Заголовок</span>
      <input v-model="value" placeholder="Введите" type="text">
    </label>
  </div>
</template>
<script src="./setup.js"></script>
<style lang="scss" module src="./style.scss"/>