import {} from 'vue'
import Card from '@/components/@logic/Card/Default'
//import { useStore } from '@/store';

export default {
  name: 'Card-Chest',
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
