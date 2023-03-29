<template>
  <div :class="$style.header">
    <transition name="fade-arrow">
      <svg v-if="isShowArrow" @click="back" width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 1L1 9L9 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </transition>
    <div :class="$style.transitionWrap">
      <transition :name="transitionMode">
        <p :class="$style.name" :key="pageName">
          {{ pageName }}
        </p>
      </transition>
    </div>
    <svg @click="changeTheme" :class="[$style.themeIcon]" viewBox="0 0 14 16" width="50">
      <use :xlink:href="require(`@/assets/icons/theme.svg`) + '#theme'"/>
    </svg>
    <div @click="changeTheme" :class="[$style.theme, theme === 'dark' ? $style.dark : $style.light]">
      <div :class="$style.thumb"></div>
    </div>
  </div>
</template>
<script src="./setup.js"></script>
<style lang="scss" module src="./style.scss"/>