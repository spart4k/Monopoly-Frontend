<template>
  <div :class="$style.task">
    <!--<TodoItem v-for="(item) in list" :key="item.id" :data="item"/>-->
    <v-btn @click="edit" :class="$style.btn" black>
      Редактировать
    </v-btn>
    <Loader
      v-if="loading"
    />
    <div :class="$style.content">
      <!--<h1>{{ task.title }}</h1>-->
      <p>
        {{ task.description }}
      </p>
    </div>

  </div>
</template>
<script src="./setup.js"></script>
<style lang="scss" module src="./style.scss"/>