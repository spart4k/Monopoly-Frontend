<template>
  <div :class="$style.list">
    <Loader
      v-if="loading"
    />
    <div :class="$style.wrap" v-else>
      <TodoItem v-for="(item) in list" :key="item.id" :data="item"/>
    </div>
  </div>
</template>
<script src="./setup.js"></script>
<style lang="scss" module src="./style.scss"/>