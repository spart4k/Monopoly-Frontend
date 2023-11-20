<template>
  <div :class="$style.game">
    <div :class="$style.wrap">
      <PlayerInfo :class="$style.playerInfo"/>
      <BarLeft/>
      <Map/>
      <BarRight/>
    </div>
    <Own/>
  </div>
</template>
<script src="./setup.js"></script>
<style lang="scss" module src="./style.scss"/>