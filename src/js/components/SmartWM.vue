<template>
  <div class="my-2">
    <Loader v-if="isLoading" />
    <CardItem 
      v-for="(item, i) in items"
      :key="i"
      :item="item"
      @remove="onClickRemove"
    />
    <div class="d-flex my-2">
      <FetchButton
        v-for="(btn) in buttons"
        :key="btn"
        :title="btn"
        @click="onClickFetch(btn)"
      />
    </div>
  </div>
</template>

<script>
import CardItem from "./CardItem.vue";
import Loader from "./Loader.vue"
import FetchButton from "./FetchButton.vue"
import smartwm from "../services/smartwm.js"

export default {
  components: {
    CardItem, Loader, FetchButton
  },
  data() {
    return {
      isLoading: true,
      items: []
    }
  },
  async mounted() {
    const items = await smartwm({ classFrom: this.buttons });
    const collection = Array.isArray(items) ? items : [items];
    this.items.push(...(collection.map((data, i) => ({ id: Date.now() + i, isLoading: false, data }))));
    this.isLoading = false;
  },
  methods: {
    onClickRemove(id) {
      this.items = this.items.filter(item => item.id !== id);
    },
    async onClickFetch(classFrom) {
      // ! this is previous solution for vue3 (but not the best way - find by id and modify instead of deleting)
      // const id = Date.now()
      // this.items.push({ id, isLoading: true })

      // const data = await smartwm({ classFrom })
      // this.onClickRemove(id)
      // this.items.push({ id, isLoading: false, data })

      // ! this works in vue2 but not in vue3
      const item = { id: Date.now(), isLoading: true }
      this.items.push(item)
      
      item.data = await smartwm({ classFrom })
      item.isLoading = false
    },
  },
  computed: {
    buttons() {
      return ["qiwi", "yandex"]
    }
  }
}
</script>