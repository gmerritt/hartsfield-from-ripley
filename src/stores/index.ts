import { useContextStore } from '@/stores/context'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
  setup() {
    const store = useContextStore()

    return {
      store,
    }
  },
}
