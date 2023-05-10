import { computed } from 'vue'

export default {
  name: 'Chance',
  components: {
  },
  props: {
    cell: {
      type: Object,
      default: () => {}
    }
  },
  setup (props) {
    const imagePath = computed(() => {
      return require(`@/assets/images/map/road/chance/chance-${props.cell.position}.png`)
    })
    return {
      imagePath
    }
  }
};
