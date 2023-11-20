import { computed } from 'vue'
import { useStore } from '@/store';

import cardComponents from '@/components/@logic/Card/Components/cardComponents'
import OwnColumn from '../Components/Column/Default'
export default {
  name: 'Own',
  components: {
    ...cardComponents,
    OwnColumn
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
    const streets = ['green', 'blue', 'lightBlue', 'brown', 'yellow', 'red', 'purple', 'orange']
    const changeShowing = () => {
      store.commit('own/showMap', !isShow.value)
    }
    console.log(streets)
    const ownStreets = computed(() => {
      return own.value.filter((item) => item.type === 'street' )
    })
    const ownStation = computed(() => {
      return own.value.filter((item) => item.type === 'station' )
    })
    const ownSerivce = computed(() => {
      return own.value.filter((item) => item.type === 'service' )
    })
    const ownColsStreets = computed(() => {
      const cols = {}
      streets.forEach((item) => {
        cols[item] = []
      });
      ownStreets.value.forEach((card) => {
        streets.forEach((street) => {
          if (card.street === street) cols[street].push(card)
        })
      });
      return cols
    })
    const ownColsStation = computed(() => {
      const cols = []
      ownStation.value.forEach((card) => {
        cols.push(card)
      });
      return [cols]
    })
    const ownColsServices = computed(() => {
      const cols = []
      ownSerivce.value.forEach((card) => {
        cols.push(card)
      });
      return [cols]
    })
    return {
      own,
      changeShowing,
      isShow,
      streets,
      ownStreets,
      ownColsStreets,
      ownStation,
      ownColsStation,
      ownSerivce,
      ownColsServices
    }
  }
};
