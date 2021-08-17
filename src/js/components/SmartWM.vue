<template>
  <div class="my-2">
    <CardItem 
      v-for="(item, i) in items"
      :key="i"
      :item="item"
      @remove="onClickRemove"
    />
    <div class="d-flex my-2">
      <label
        v-for="(btn) in buttons"
        :key="btn"
        @click="onClickFetch(btn)"
        type="button"
        class="btn btn-primary flex-grow-1 mx-1"
      >{{ btn }}</label>
    </div>
  </div>
</template>

<script>
import CardItem from "./CardItem.vue";

export default {
  components: {
    CardItem
  },
  data() {
    return {
      items: []
    }
  },
  async mounted() {
    const items = await this.fetchFromNetlify({ classFrom: this.buttons });
    const collection = Array.isArray(items) ? items : [items];
    this.items.push(...(collection.map((item, i) => ({ id: Date.now() + i, ...item }))));
  },
  methods: {
    onClickRemove(id) {
      this.items = this.items.filter(item => item.id !== id);
    },
    async onClickFetch(classFrom) {
      const item = await this.fetchFromNetlify({ classFrom });
      this.items.push({ id: Date.now(), ...item });
    },
    async fetchFromNetlify(data) {
      const url = "https://modest-shaw-b5cb04.netlify.app/.netlify/functions/parsePrice"
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
      });
      return await response.json();
    }
  },
  computed: {
    buttons() {
      return ["qiwi", "yandex"]
    }
  }
}
</script>