<template>
  <div class="input-group my-2">
    <div class="input-group-prepend">
      <div class="input-group-text">
        <input type="checkbox" v-model="visible">
      </div>
    </div>
    <input :type="visible ? 'text' : 'password'" class="form-control" v-model="input">
    <input type="text" class="form-control" :value="output" readonly>
    <div class="input-group-append">
      <button class="btn btn-primary" @click="onClickCopy">📋</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      input: "",
      output: ""
    }
  },
  watch: {
    input() {
      this.output = this.convert(this.input);
    }
  },
  methods: {
    convert(value) {
      const word = Array.from(value)
      .map(a => {
        return a.charCodeAt().toString()
      })
      .join("");
      const output = window.btoa(word);
      return output;
    },
    onClickCopy() {
      window.navigator.clipboard.writeText(this.output)
    }
  }
}
</script>