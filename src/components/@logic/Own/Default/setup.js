import { computed, ref } from 'vue'
import { useStore } from '@/store';

import cardComponents from '@/components/@logic/Card/Components/cardComponents'

export default {
  name: 'Own',
  components: {
    ...cardComponents
  },
  props: {
  },
  setup () {
    console.log(cardComponents)
    const store = useStore()
    console.log(store.state.own.own)
    const own = computed(() => store.state.cards.cards)
    const isShow = computed(() => {
      return store.state.own.isShow
    })
    const streets = ref(['green, blue, lightBlue, brown, yellow, red, purple, orange'])
    const changeShowing = () => {
      store.commit('own/showMap', !isShow.value)
    }
    return {
      own,
      changeShowing,
      isShow,
      streets
    }
  }
};
