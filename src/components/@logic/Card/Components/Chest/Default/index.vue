<template>
  <Card>
    <div :class="$style.wrap">
      <!--<div :style="{
        backgroundColor: $props.card.title.background,
        color: $props.card.title.color
      }" :class="$style.title">
        <p>
          {{ $props.card.title.text }}
        </p>
      </div>-->
      <img :class="$style.image" src="@/assets/images/map/road/chest.png" alt="">
      <p class="">
        {{ $props.card.text }}
      </p>
    </div>
  </Card>
</template>
<script src="./setup.js"></script>
<style lang="scss" module src="./style.scss"/>