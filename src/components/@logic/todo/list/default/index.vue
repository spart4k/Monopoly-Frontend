<template>
  <div :class="$style.list">
    <div :class="$style.panel">
      <v-btn @click="openRemoved" :class="[$style.btn, $style.removed]" black>Удаленные</v-btn>
      <v-btn @click="addTask" :class="$style.btn" black>Добавить</v-btn>
    </div>
    <Loader
      v-if="loading"
    />
    <div class="">

    </div>
    <div :class="$style.wrap">
      <TodoItem v-for="(item) in list" :key="item.id" :class="$style.todoItem" :data="item"/>
    </div>
  </div>
</template>
<script src="./setup.js"></script>
<style lang="scss" module src="./style.scss"/>