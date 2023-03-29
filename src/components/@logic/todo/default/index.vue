<template>
  <div :class="$style.todo">
    <TodoHeader/>
    <div :class="$style.content">
      <transition :name="transitionMode">
        <router-view/>
      </transition>
    </div>
  </div>
</template>
<script src="./setup.js"></script>
<style lang="scss" module src="./style.scss"/>