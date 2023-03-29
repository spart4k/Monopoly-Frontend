<template>
   <div :class="$style.group">
      <div :class="$style.wrap">
        <div @click.stop="showOptions" :class="[$style.label, isShowOptions && $style.isOpen]">
          <p>{{ title }}</p>
          <svg :class="isShowOptions && $style.isOpen" viewBox="0 0 14 16" width="50">
            <use :xlink:href="require(`@/assets/icons/arrow.svg`) + '#sprite_name'"/>
          </svg>
        </div>
        <transition name="dropdown">
          <div v-if="isShowOptions" :class="$style.options">
            <p @click.stop="chooseOption(item)" v-for="(item) in options" :key="item.id">
              {{ item.title }}
            </p>
          </div>
        </transition>
      </div>
   </div>
</template>
<script src="./setup.js"></script>
<style lang="scss" module src="./style.scss"/>