<template>
  <div class="my-2">
    <div class="d-flex my-2">
      <button @click="stage='display'" class="btn btn-primary flex-grow-1 mr-1">Display</button>
      <button @click="stage='storage'" class="btn btn-primary flex-grow-1 ml-1">Storage</button>
    </div>
    <template v-if="displayStage">
      <h3>Display</h3>
      <template v-if="items.length > 0">
        <button @click="refreshItems" class="btn btn-primary btn-block">🔄 Refresh Items</button>
        <CardItem 
          v-for="(item, i) in items"
          :key="i"
          :item="item"
        />
      </template>
      <Loader v-else-if="isLoading" />
      <template v-else>
        <div class="card">
          <div class="card-body">no items found</div>
        </div>
      </template>
    </template>
    <StorageList v-if="storageStage" />
  </div>
</template>

<script>
import CardItem from "./CardItem.vue";
import Loader from "./Loader.vue"
import FetchButton from "./FetchButton.vue"
import StorageList from "./StorageList.vue"
import smartwm from "../services/smartwm.js"
import storage from "../services/storage.js"

export default {
  components: {
    CardItem, Loader, FetchButton, StorageList
  },
  data() {
    return {
      stage: "display",
      isLoading: true,
      items: []
    }
  },
  async created() {
    this.stage = "display"

    const saved = storage.getItems()

    if (saved.length > 0) {
      await this.loadItems(saved)
      this.isLoading = false
    }
    else {
      this.isLoading = false
    }
  },
  methods: {
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
      
      const response = await smartwm({ 
        data: {
          from: classFrom,
          to: "privatuah_auto"
        }
      })

      if (response.ok) {
        item.data = response.data.constructed
        item.isLoading = false
      }
    },
    async loadItems(data) {
      // { from: "qiwi", to: "privatuah_auto" }
      const response = await smartwm({ data })

      if (!response.ok) {
        console.log("mounted error")
      }

      const items = response.data
      const collection = Array.isArray(items) ? items : [items]
      const entries = collection
        .map(entry => entry.error ? { error: entry.error } : entry.constructed)
        .map((data, i) => ({ id: Date.now() + i, isLoading: false, data }))
      this.items.push(...entries)
    },
    async refreshItems() {
      this.load
      this.items = []
      this.isLoading = true
      await this.loadItems(storage.getItems())
      this.isLoading = false
    }
  },
  computed: {
    displayStage() {
      return this.stage === "display"
    },
    storageStage() {
      return this.stage === "storage"
    }
  }
}
</script>