<template>
  <div :class="$style.column">
    <component :style="{ 'z-index': index * 11, top: `${index * 15}%` }" :is="item.type" :class="$style.card" :card="item" v-for="(item, index) in column" :key="index"/>
  </div>
</template>
<script src="./setup.js"></script>
<style lang="scss" module src="./style.scss"/>