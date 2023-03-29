import { computed, ref, onMounted } from 'vue'
import { useStore } from '@/store';
import router from '@/router'

import TodoItem from '../item/default'
import Loader from '@/components/@ui/loader/default'

export default {
  name: 'Todo-List',
  components: {
    TodoItem,
    Loader
  },
  props: {
  },
  setup () {
    const store = useStore()
    const loading = ref(true)
    const setLoading = (state) => {
      loading.value = state
    }
    const header = ref({
      title: {
        label: 'Заголовок',
        type: 'title',
        sort: true,
        width: '30%'
      },
      description: {
        label: 'Описание',
        type: 'description',
        sort: true,
        width: '40%'
      },
      group: {
        label: 'Статус',
        type: 'group',
        sort: true,
        width: '20%'
      },
      actions: {
        label: '',
        type: 'actions',
        sort: false,
        width: '10%'
      },
    })
    const list = computed(() => {
      return store.state.list.filter((el) => !el.isDeleted)
    })
    const getList = async () => {
      if (!loading.value) setLoading(true)
      await store.dispatch('getList', { isDeleted: false })
      setLoading(false)
    }
    const addTask = () => {
      store.commit('setRouteTransitionMode', 'router-view')
      store.commit('setHeaderTransitionMode', 'fade-route')
      router.push({
        path: '/list/add'
      })
    }
    const openRemoved = () => {
      store.commit('setRouteTransitionMode', 'router-view')
      store.commit('setHeaderTransitionMode', 'fade-route')
      store.commit('setPageName', 'Удаленные')
      router.push({
        path: '/list/removed'
      })
    }
    onMounted(() => {
      getList()
      store.commit('setPageName', 'Список задач')
    })
    return {
      loading,
      list,
      addTask,
      openRemoved,
      header
    }
  }
};
