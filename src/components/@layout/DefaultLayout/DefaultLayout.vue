<template>
  <div :class="$style.wrapper">
    <slot />
  </div>
</template>
<script>
import { ref, onMounted, onUnmounted } from 'vue'
import { useStore } from '@/store';

export default {
  name: 'DefaultLayout',
  setup() {
    const store = useStore()
    const scaleFactorX = ref(null)

    const updateFactors = () => {
      const { clientWidth } = document.body
      scaleFactorX.value = 16 * clientWidth / 1440
      if (clientWidth <= 450) scaleFactorX.value = 16
      if (clientWidth >= 1600) {
        scaleFactorX.value = 16 * 1600 / 1440
      }
      document.documentElement.style.fontSize = `${scaleFactorX.value}px`
    }

    onMounted(() => {
      const theme = localStorage.getItem('theme')
      if (theme) store.commit('changeTheme', theme)
      updateFactors(null)
      window.addEventListener('resize', () => updateFactors('resize'))
    })

    onUnmounted(() => window.removeEventListener('resize', updateFactors))
  },
}
</script>
<style lang="scss" module>
@import './DefaultLayout.scss';
</style>
