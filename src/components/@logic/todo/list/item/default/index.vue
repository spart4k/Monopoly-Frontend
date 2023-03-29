<template>
  <div @click="openTask" :class="$style.task">
    <div :class="$style.title">
      {{ $props.data.title }}
    </div>
    <div :class="$style.description">
      {{ $props.data.description }}
    </div>
    <Group :class="$style.group" @changeGroup="changeGroup" :group="$props.data.group"/>
    <div :class="[$style.action]">
      <svg @click.stop="removeTask" :class="[isDeleted && $style.isDeleted]" viewBox="0 0 14 16" width="50">
        <use :xlink:href="!isDeleted ? require(`@/assets/icons/remove.svg`) + '#removed' : require(`@/assets/icons/return.svg`) + '#return'"/>
      </svg>
    </div>
  </div>
</template>
<script src="./setup.js"></script>
<style lang="ssss" module src="./style.scss"/>