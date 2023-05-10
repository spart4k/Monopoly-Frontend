import { computed } from 'vue'

export default {
  name: 'Chest',
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
      return require(`@/assets/images/map/road/chest/chest-${props.cell.position}.png`)
    })
    return {
      imagePath
    }
  }
};
