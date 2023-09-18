<template>
  <div v-if="!isLoading && !error">
    <h1 class="page-fetch-url-header">Generate DataHub archive recovery URL</h1>
      <form class="bg-transparent border-0 canvas-form" @submit.prevent="fetchUrl">
        <v-container>
          <v-row>
            <v-col class="float-right" sm="3">
              <label for="page-fetch-url-name" class="page-fetch-url-form-label">Enter GCP storage object URL:</label>
            </v-col>
            <v-col class="pl-0 pt-2" sm="9">
              <v-text-field
                id="page-fetch-url-name"
                v-model="gs_source_url"
                class="w-50"
                :disabled="isCreating"
                placeholder="gs://"
              />
            </v-col>
          </v-row>
        </v-container>

        <div class="d-flex justify-end mt-4">
          <button
            id="fetch-url-button"
            :disabled="isCreating"
            aria-controls="page-reader-alert"
            class="canvas-button canvas-button-primary"
            type="submit"
          >
            <span v-if="!isCreating">Generate 7-day archive download URL</span>
            <span v-if="isCreating">
              <v-progress-circular
                class="mr-2"
                color="primary"
                indeterminate
              />
              Creating...
            </span>
          </button>
        </div>
      </form>
      

      <div><span v-if="wasCreated">7-day download URL to deliver to user:</span></div>
      <div><span v-if="wasCreated"> {{ download_url }} </span></div>


      
  </div>
  
</template>

<script>
import Context from '@/mixins/Context'
import {fetchUrl} from '@/utils'

export default {
  name: 'fetchUrl',
  mixins: [Context],
  data: () => ({
    gs_source_url: undefined,
    download_url: undefined,
    isCreating: undefined,
    wasCreated: undefined
  }),
  methods: {
    fetchUrl() {
      this.isCreating = true
//      this.$announcer.polite('Fetching download url...')
      this.download_url = fetchUrl(this.gs_source_url)
      this.isCreating = false
      this.wasCreated = true
    }
  }
}
</script>
