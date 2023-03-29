import { onMounted, computed } from 'vue'
import Loader from '@/components/@ui/loader/default'
import { useStore } from '@/store';

import TodoHeader from '@/components/@logic/todo/header/default'
import TodoList from '@/components/@logic/todo/list/default'

export default {
  name: 'Todo-Default',
  components: {
    TodoList,
    Loader,
    TodoHeader
  },
  props: {
  },
  setup () {
    const store = useStore()
    const transitionMode = computed(() => {
      return store.state.routeTransitionMode
    })
    const list = computed(() => {
      return store.state.list
    })
    onMounted(() => {
    })
    return {
      list,
      transitionMode
    }
  }
};
