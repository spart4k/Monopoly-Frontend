import { computed, ref, onMounted, watch } from 'vue'
import { useStore } from '@/store';
import router from '@/router'
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'

import Group from '@/components/@ui/group/default'
import Loader from '@/components/@ui/loader/default'
export default {
  name: 'Todo-AddOrEdit',
  components: {
    Loader,
    Group
  },
  props: {
  },
  setup () {
    console.log('new')
    const form = ref({
      title: '',
      description: '',
      group: {}
    })
    const rules = {
      title: { required }, // Matches state.firstName
      description: { required }, // Matches state.lastName
      group: { required }
    }
    const mode = computed(() => {
      if (router.currentRoute?.params?.id) return 'editTask'
      else return 'createTask'
    })
    const v$ = useVuelidate(rules, form.value)
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
    const save = async () => {
      setLoading(true)
      const response = await store.dispatch(mode.value, form.value)
      console.log(response)
      router.push({
        path: `/list/${response.id}`
      })
      store.commit('setPageName', response.title)
      setLoading(false)
      console.log(response)
    }
    const changeGroup = (group) => {
      form.value.group = group
    }
    console.log(Object.values(form.value))
    const isValid = computed(() => {
      return v$.value.$invalid
    })
    onMounted(() => {
      if (mode.value === 'createTask') store.commit('setPageName', 'Создать задачу')
      store.commit('setRouteTransitionMode', 'router-view')
      store.commit('setHeaderTransitionMode', 'fade-route')
      if (mode.value === 'editTask') getTask()
    })
    const getTask = async () => {
      setLoading(true)
      const response = await store.dispatch('getTask', +router.currentRoute?.params?.id)
      form.value.id = response.id
      for (let key in form.value) {
        form.value[key] = response[key]
      }
      console.log(form.value)
      loading.value = false
    }
    watch(form, (newValue) => {
      console.log(v$.value, newValue)
    })
    console.log(v$.value)
    return {
      loading,
      setLoading,
      list,
      task,
      pageName,
      form,
      save,
      changeGroup,
      isValid,
      mode,
      v$,
      rules,
      getTask
    }
  }
};
