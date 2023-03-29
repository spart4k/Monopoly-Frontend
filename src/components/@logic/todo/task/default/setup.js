import { computed, ref, onMounted } from 'vue'
import { useStore } from '@/store';
import router from '@/router'

import Loader from '@/components/@ui/loader/default'

export default {
  name: 'Todo-Task',
  components: {
    Loader
  },
  props: {
  },
  setup () {
    const store = useStore()
    const loading = ref(false)
    const task = ref({})
    const setLoading = (state) => {
      loading.value = state
    }
    const list = computed(() => {
      return store.state.list
    })
    const pageName = computed(() => {
      return store.state.pageName
    })
    const getTask = async () => {
      if (!loading.value) setLoading(true)
      const response = await store.dispatch('getTask', +router.currentRoute.params.id)
      console.log(response)
      task.value = response
      if (!pageName.value) {
        store.commit('setPageName', task.value.title)
      }
      setLoading(false)
    }
    const edit = () => {
      const id = router.currentRoute.params.id
      store.commit('setPageName', task.value.title)
      router.push({
        path: `/list/${id}/edit`
      })
    }
    onMounted(() => {
      getTask()
    })
    return {
      loading,
      list,
      task,
      pageName,
      edit
    }
  }
};
