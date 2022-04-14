<template>
  <div class="container" :style="isExtension ? 'width: 500px' : ''">
    <PasswordInput />
    <SmartWM />
  </div>
</template>

<script>
import PasswordInput from "./PasswordInput.vue";
import SmartWM from "./SmartWM.vue";

export default {
  components: {
    PasswordInput, SmartWM
  },
  data() {
    return {
      isExtension: false,
    }
  },
  mounted() {
    // ! kinda easiest way
    // if (window?.chrome?.extension) {
    //   this.isExtension = true
    // }

    // ! manually configured webpack
    this.isExtension = process.env.BUILD_ENV === "extension"
  }
}
</script>