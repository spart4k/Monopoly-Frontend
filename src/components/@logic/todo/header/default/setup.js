import { computed, toRef, reactive } from 'vue'
import { useStore } from '@/store';
import router from '@/router'
export default {
  name: 'Todo-Header',
  components: {
  },
  props: {
  },
  setup () {
    const store = useStore()
    const pageName = computed(() => {
      return store.state.pageName
    })
    const location = toRef(reactive(router), "currentRoute");
    const isShowArrow = computed(() => {
      console.log(location)
      if (location.value.path === '/list') return false
      else {
        return true
      }
    })
    const transitionMode = computed(() => {
      return store.state.headerTransitionMode
    })
    const back = () => {
      store.commit('setHeaderTransitionMode', 'fade-route-back')
      store.commit('setRouteTransitionMode', 'router-view-back')
      router.go(-1)
    }
    const theme = computed(() => {
      return store.state.theme
    })
    const changeTheme = () => {
      let newTheme = ''
      switch (theme.value) {
        case 'dark':
          newTheme = 'light'
          break;
        case 'light':
          newTheme = 'dark'
          break;
      }
      console.log(newTheme)
      store.commit('changeTheme', newTheme)
    }
    return {
      back,
      isShowArrow,
      location,
      pageName,
      transitionMode,
      changeTheme,
      theme
    }
  }
};
