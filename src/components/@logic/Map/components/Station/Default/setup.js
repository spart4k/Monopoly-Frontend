import { computed } from 'vue'

export default {
  name: 'Station',
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
      return require(`@/assets/images/map/road/train/train-${props.cell.position}.png`)
    })
    return {
      imagePath
    }
  }
};
