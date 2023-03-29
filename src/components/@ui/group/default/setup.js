import { computed, ref } from 'vue'
import { useStore } from '@/store';

export default {
  name: 'Group-Default',
  components: {
  },
  props: {
    group: {
      type: Object,
      default: () => {}
    }
  },
  setup (props, ctx) {
    const { emit } = ctx
    const store = useStore()
    const isShowOptions = ref(false)
    const choosedOption = ref(props.group)
    const groups = computed(() => {
      return store.state.groups
    })
    const title = computed(() => {
      if (choosedOption.value?.title) return choosedOption.value.title
      else {
        return 'Выберите'
      }
    })
    const showOptions = () => {
      isShowOptions.value = !isShowOptions.value
    }
    const hideOptions = () => {
      isShowOptions.value = false
    }
    const options = computed(() => {
      let array = []
      groups.value.forEach((item) => {
        if (item.id === props?.group?.id) return
        else {
          array.push(item)
        }
      })
      return array
    })
    const chooseOption = (item) => {
      console.log(item)
      choosedOption.value = item
      hideOptions()
      emit('changeGroup', choosedOption.value)
    }
    return {
      groups,
      options,
      isShowOptions,
      showOptions,
      title,
      chooseOption,
      hideOptions,
      choosedOption
    }
  }
};
