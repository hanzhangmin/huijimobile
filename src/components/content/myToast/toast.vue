<template>
  <div class="toastbox"
       v-show="showtoast">
    <div class="toast">{{message}}</div>
  </div>
</template>
<script>
export default {
  name: "mytoast",
  data () {
    return {
      message: "",
      showtoast: Boolean
    }
  },
  // methods: {
  //   toast (message, timeout) {
  //     this.message = message;
  //     this.show = true
  //     setTimeout(() => {
  //       this.show = false
  //     }, timeout);
  //   }
  // },
}
</script>
<style scoped>
.toastbox {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0);
}
.toast {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 5px 1rem;
  font-size: 1.5rem;
  background-color: rgba(0, 0, 0, 0.5);
  color: #ffffff;
  z-index: 10000;
  border-radius: 5px;
  transition: display 0.3;
}
</style>