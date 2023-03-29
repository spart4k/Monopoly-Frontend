import { ref, watch } from 'vue'

export default {
  name: 'v-input',
  props: {
    valueProxy: {
      type: String,
      default: ''
    }
  },
  setup(props, ctx) {
    console.log(props)
    const { emit } = ctx
    const value = ref(props.valueProxy)
    watch(() => value.value, (newValue) => {
      console.log(newValue)
      emit('input', newValue)
    })
    return {
      value
    }
  }
};