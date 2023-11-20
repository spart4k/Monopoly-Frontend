import { computed } from 'vue'
import { useStore } from '@/store';

export default {
  name: 'Player-Info',
  components: {
  },
  props: {
  },
  setup () {
    const store = useStore()
    const nickName = computed(() => store.state.user.nickname)
    const balance = computed(() => store.state.user.balance)
    return {
      nickName,
      balance
    }
  }
};
