import { computed } from 'vue'

export default {
  name: 'Serivce',
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
      return require(`@/assets/images/map/road/service/${props.cell.name}.png`)
    })
    return {
      imagePath
    }
  }
};
