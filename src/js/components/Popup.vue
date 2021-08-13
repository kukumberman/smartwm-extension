<template>
  <div class="container">
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
  }
}
</script>