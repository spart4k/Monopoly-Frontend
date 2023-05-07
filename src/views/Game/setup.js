import {} from 'vue';
//import { useStore } from '@/store';

import Todo from '@/components/@logic/todo/default'
import Map from '@/components/@logic/Map/Default'
import BarLeft from '@/components/@logic/Bar/Left/Default'
import BarRight from '@/components/@logic/Bar/Right/Default'
import Own from '@/components/@logic/Own/Default'

export default {
  name: 'Game-View',
  components: {
    Todo,
    Map,
    BarLeft,
    BarRight,
    Own
  },
  props: {
  },
  setup() {
    //const store = useStore();
    console.log()
    console.log('init')
    return {
    };
  },
};
