<template>
  <div>
    <h3>Storage</h3>
    <button @click="addItem()" class="btn btn-primary btn-block">🆕 Add Item</button>
    <template v-if="items.length > 0">
      <template v-for="(item, i) in items">
        <div class="input-group my-2" :key="i">
          <div class="input-group-prepend">
            <span class="input-group-text">{{ getIcon(item) }}</span>
            <span class="input-group-text">from</span>
          </div>
          <input type="text" class="form-control" v-model="item.display.from">
          <div class="input-group-prepend">
            <span class="input-group-text">to</span>
          </div>
          <input type="text" class="form-control" v-model="item.display.to">
          <div class="input-group-append">
            <button class="btn btn-primary" type="button" @click="updateItemAt(i)" :class="{ 'disabled': !isItemModified(item) }">☑️</button>
            <button class="btn btn-primary" type="button" @click="removeItemAt(i)">❌</button>
          </div>
        </div>
      </template>
    </template>
    <template v-else>
      <div class="card">
        <div class="card-body">Empty</div>
      </div>
    </template>
  </div>
</template>

<script>
import storage from "../services/storage.js"

export default {
  data() {
    return {
      items: []
    }
  },
  created() {
    this.items = storage.getItems().map(({ from, to }) => {
      return {
        values: { from, to },
        display: { from, to }
      }
    })
  },
  methods: {
    addItem() {
      const item = {
        values: { from: "", to: "" },
        display: { from: "", to: "" }
      }
      this.items.push(item)
      this.saveItems()
    },
    updateItemAt(index) {
      const item = this.items[index]
      item.values.from = item.display.from
      item.values.to = item.display.to
      this.saveItems()
    },
    isItemModified(item) {
      return !(item.display.from === item.values.from && item.display.to === item.values.to)
    },
    removeItemAt(index) {
      this.items.splice(index, 1)
      this.saveItems()
    },
    getIcon(item) {
      if (!this.isItemModified(item)) {
        return "✅"
      }
      else {
        return "❌"
      }
    },
    saveItems() {
      const itemsToSave = this.items.map(entry => {
        return {
          from: entry.values.from,
          to: entry.values.to
        }
      })

      storage.updateItems(itemsToSave)
    }
  }
}
</script>

<style>

</style>