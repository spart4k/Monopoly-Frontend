<template>
  <Card>
    <div :class="$style.wrap">
      <div :style="{
        backgroundColor: $props.card.title.background,
        color: $props.card.title.color
      }" :class="$style.title">
        <p>
          {{ $props.card.title.text }}
        </p>
      </div>
      <p :class="$style.ownRight">ПРАВО СОБСТВЕННОСТИ</p>
      <div class="">
        <div :class="$style.rent">
          <p>РЕНТА БЕЗ ЗДАНИЙ</p>
          <p>4</p>
        </div>
        <div v-for="(item, index) in 4" :key="index" :class="$style.houseCount">
          <p>
            <span>
              1
            </span>
            ЗДАНИЕ
          </p>
          <p>
            20
          </p>
        </div>
        <div :class="$style.hotel">
          <p>ОТЕЛЬ</p>
          <p>450</p>
        </div>
        <div :class="$style.hint">
          <p>
            Если игроку принадлежат <span>всё</span>
            имущество одной улицы, рента
            <span>удваивается</span>
          </p>
        </div>
        <div :class="$style.houseCost">
          <p>Постройка дома</p>
          <p>50</p>
        </div>
        <div :class="$style.hotelCost">
          <p>Постройка отеля</p>
          <p>50</p>
        </div>
        <div :class="$style.pledge">
          <p>Залог</p>
          <p>50</p>
        </div>
      </div>
    </div>
  </Card>
</template>
<script src="./setup.js"></script>
<style lang="scss" module src="./style.scss"/>