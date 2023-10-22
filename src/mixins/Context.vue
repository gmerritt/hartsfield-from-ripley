<script>
import {mapActions} from 'pinia'
import {mapState} from 'pinia'
import {useContextStore} from '@/stores/context'

export default {
  name: 'Context',
  computed: {
    ...mapState(useContextStore, [
      'applicationState',
      'config',
      'currentUser',
      'eventHub',
      'isLoading',
      'screenReaderAlert'
    ]),
  },
  methods: {
    ...mapActions(useContextStore, [
      'alertScreenReader',
      'loadingComplete',
      'loadingStart'
    ])
  }
}
</script>
