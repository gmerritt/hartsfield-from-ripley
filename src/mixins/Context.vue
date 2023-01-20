<script>
import { mapActions } from 'pinia'
import { useContextStore } from "@/stores/context"

export default {
  name: 'Context',
  setup() {
    const context = useContextStore()
    return {
      currentUser: context.currentUser,
      loading: context.loading
    }
  },
  methods: {
    ...mapActions(useContextStore, [
      'loadingComplete',
      'loadingStart'
    ])
  }
}
</script>
