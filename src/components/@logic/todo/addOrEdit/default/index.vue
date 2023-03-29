<template>
  <div>
    <Loader
      v-if="loading"
    />
    <div v-else :class="$style.form">
      <v-input placeholder="Введите" v-model="form.title" :valueProxy="form.title"/>
      <v-textarea placeholder="Введите" v-model="form.description" :valueProxy="form.description"/>
      <Group :group="form.group" @changeGroup="changeGroup"/>
      <v-btn :disable="isValid" @click="save" black>
        Сохранить
      </v-btn>
    </div>
  </div>
</template>
<script src="./setup.js"></script>
<style lang="scss" module src="./style.scss"/>