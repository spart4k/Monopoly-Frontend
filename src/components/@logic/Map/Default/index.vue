<template>
  <div :class="$style.map">
    <div :class="$style.wrap">
      <div :class="$style.road">
        <div :class="$style.left">
          <div :class="$style.cell" v-for="(item, index) in cellsLeft" :key="index">
            <!--<Street :cell="{ ...item, position: 'left' }"/>-->
            <component :is="item.type" :cell="{ ...item, position: 'left' }"/>
          </div>
        </div>
        <div :class="$style.center">
          <div :class="$style.top">
            <div :class="$style.cell" v-for="(item, index) in cellsTop" :key="index">
               <component :is="item.type" :cell="{ ...item, position: 'top' }"/>
            </div>
          </div>
          <div :class="$style.bottom">
            <div :class="$style.cell" v-for="(item, index) in cellsBottom" :key="index">
               <component :is="item.type" :cell="{ ...item, position: 'bottom' }"/>
            </div>
          </div>
        </div>
        <div :class="$style.right">
          <div :class="$style.cell" v-for="(item, index) in cellsRight" :key="index">
             <component :is="item.type" :cell="{ ...item, position: 'right' }"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./setup.js"></script>
<style lang="scss" module src="./style.scss"/>