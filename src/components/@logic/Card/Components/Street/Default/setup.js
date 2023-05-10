import {} from 'vue'
import Card from '@/components/@logic/Card/Default'
//import { useStore } from '@/store';

export default {
  name: 'Card-Street',
  components: {
    Card
  },
  props: {
    card: {
      type: Object,
      default: () => {}
    }
  },
  setup () {
    return {
    }
  }
};
