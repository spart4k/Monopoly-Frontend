import { computed } from 'vue'
import Card from '@/components/@logic/Card/Default'
//import { useStore } from '@/store';

export default {
  name: 'Card-Serivce',
  components: {
    Card
  },
  props: {
    card: {
      type: Object,
      default: () => {}
    }
  },
  setup (props) {
    const image = computed(() => require(`@/assets/images/map/road/${props.card.image}.png`))
    return {
      image
    }
  }
};
