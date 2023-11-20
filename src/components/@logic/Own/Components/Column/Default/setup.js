import {} from 'vue'
import cardComponents from '@/components/@logic/Card/Components/cardComponents'
export default {
  name: 'Own-Column',
  components: {
    ...cardComponents
  },
  props: {
    column: {
      type: Array,
      default: () => []
    }
  },
  setup () {
    return {
    }
  }
};
