<template>
  <div v-if="show"
       class="loadingbody">
    <div class="spinner">
    </div>
  </div>
</template>
<script>
export default {
  name: 'Loading',
  props: {
    show: Boolean
  },
  data () {
    return {
    }
  }
}
</script>
<style scoped>
.loadingbody {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%);
  background-color: white;
  z-index: 100;
  padding: 1rem 4rem;
  border-radius: 1rem;
  text-align: left;
}

.spinner {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #ff000f;
  -webkit-animation: bounce 2s infinite ease-in-out;
  animation: bounce 2s infinite ease-in-out;
}
/* .double-bounce2 {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}
.double-bounce1,
.double-bounce2 {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #ff000f;
  opacity: 0.6;
  position: absolute;
  -webkit-animation: bounce 2s infinite ease-in-out;
  animation: bounce 2s infinite ease-in-out;
} */
@-webkit-keyframes bounce {
  0% {
    transform: rotate(0deg) translate(200px, 60px) rotate(0deg);
    -webkit-transform: rotate(0deg) translate(200px, 60px) rotate(0deg);
  }
  /* 50% {
    transform: rotate(0deg) translate(200px, 60px) rotate(0deg);
    -webkit-transform: rotate(0deg) translate(200px, 60px) rotate(0deg);
  } */
  100% {
    transform: rotate(360deg) translate(200px, 60px) rotate(360deg);
    -webkit-transform: rotate(360deg) translate(200px, 60px) rotate(360deg);
  }
}

@keyframes bounce {
  0% {
    transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
  }
}
</style>