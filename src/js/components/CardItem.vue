<template>
  <div class="card my-1">

    <Spinner v-if="item.isLoading" />
    <template v-else>
      <div class="card-header d-flex justify-content-between align-items-center">
        <span>{{ item.data.title }}</span>
        <label
          @click="$emit('remove', item.id)"
          type="button"
          class="btn btn-danger btn-sm mb-0"
        >&times;</label>
      </div>
      <div class="card-body">
        <template v-if="item.data.error">
          <p>⛔️ {{ item.data.error }}</p>
        </template>
        <template v-else>
          <p class="my-1">{{ item.data.a }}</p>
          <p class="my-1">{{ item.data.b }}</p>
        </template>
      </div>
    </template>
  </div>
</template>

<script>
import Spinner from "./Spinner.vue"

export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  components: {
    Spinner
  },
}
</script>

<style>

</style>