<template>
  <div :class="$style.visit">
    <div :class="$style.row">
      <p>просто</p>
      <div :class="$style.image">
        <div :class="$style.wrap">
          <p>В</p>
          <img src="@/assets/images/map/road/visit/visit.png" alt="">
          <p>Тюрьме</p>
        </div>
      </div>
    </div>
    <div :class="$style.row">
      <p>посетили</p>
    </div>
  </div>
</template>
<script src="./setup.js"></script>
<style lang="scss" module src="./style.scss"/>