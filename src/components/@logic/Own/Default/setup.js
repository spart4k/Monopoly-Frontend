import { computed } from 'vue'
import { useStore } from '@/store';

import CardStreet from '@/components/@logic/Card/Street/Default'

export default {
  name: 'Own',
  components: {
    CardStreet
  },
  props: {
  },
  setup () {
    const store = useStore()
    console.log(store.state.own.own)
    const own = computed(() => store.state.own.own)
    const isShow = computed(() => {
      return store.state.own.isShow
    })
    const changeShowing = () => {
      store.commit('own/showMap', !isShow.value)
    }
    return {
      own,
      changeShowing,
      isShow
    }
  }
};
