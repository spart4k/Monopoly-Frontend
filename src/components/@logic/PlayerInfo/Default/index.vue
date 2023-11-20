<template>
  <div :class="$style.playerInfo">
    <p :class="$style.nickname">
      {{ nickName }}
    </p>
    <p :class="$style.balance">
      {{ balance }}
      <span>
        Р
      </span>
    </p>

  </div>
</template>
<script src="./setup.js"></script>
<style lang="scss" module src="./style.scss"/>