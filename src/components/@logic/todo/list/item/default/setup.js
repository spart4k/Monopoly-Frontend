import { onMounted, computed, ref } from 'vue'
import router from '@/router'
import { useStore } from '@/store';

import Group from '@/components/@ui/group/default'

export default {
  name: 'Todo-List-Item',
  components: {
    Group
  },
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  setup (props) {
    //const { emit } = ctx
    const store = useStore()
    const loading = ref(true)
    const setLoading = (state) => {
      loading.value = state
    }
    const list = computed(() => {
      return store.state.list
    })
    //const getList = async () => {
    //  if (!loading.value) setLoading(true)
    //  await store.dispatch('getList')
    //  setLoading(false)
    //}
    const openTask = () => {
      store.commit('setPageName', props.data.title)
      store.commit('setHeaderTransitionMode', 'fade-route')
      store.commit('setRouteTransitionMode', 'router-view')
      router.push({
        path: `/list/${props.data.id}`
      })
    }
    const isDeleted = computed(() => {
      return props.data.isDeleted
    })
    const removeTask = async () => {
      console.log('remove', props.data.id)
      if (!isDeleted.value) await store.dispatch('removeTask', props.data.id)
      else await store.dispatch('returnTask', props.data.id)
    }
    const changeGroup = (group) => {
      console.log(group, props.data.id)
      store.dispatch('changeStatus', { id: props.data.id , group: group.id})
      //emit('changeGroup', group, props.data.id)
      //console.log(group, props.data.id)
    }
    onMounted(() => {
      //const newList = [
      //  {
      //    id: 0,
      //    title: 'Сделать тестовое',
      //    description: 'Декомпозировать задачи и составить план',
      //    group: {
      //      id: 0,
      //      title: 'Выполняется'
      //    },
      //    isDeleted: false
      //  },
      //  {
      //    id: 1,
      //    title: 'Подготовить прототип',
      //    description: 'Подготовить прототип макета',
      //    group: {
      //      id: 0,
      //      title: 'Выполнить'
      //    },
      //    isDeleted: false
      //  }
      //]
      //localStorage.setItem('list', JSON.stringify(newList))
      //getList()
    })
    return {
      list,
      loading,
      setLoading,
      openTask,
      changeGroup,
      removeTask,
      isDeleted
    }
  }
};
