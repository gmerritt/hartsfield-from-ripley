import { useContextStore } from '@/stores/context'

export default {
  setup() {
    const store = useContextStore()

    return {
      store,
    }
  },
}
