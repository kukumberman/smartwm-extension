<template>
  <label
    @click="$emit('click')"
    type="button"
    class="btn btn-primary flex-grow-1 m-1"
  >{{ title }}</label>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>

<style>

</style>