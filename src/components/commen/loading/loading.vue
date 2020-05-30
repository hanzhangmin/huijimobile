<template>
  <div v-if="show"
       class="loadingbody">
    <img :src="loadinggig">
    <!-- <div class="spinner item1"></div>
    <div class="spinner item2"></div>
    <div class="spinner item3"> </div> -->
  </div>
</template>
<script>
import loading from "assets/imgs/loading1.gif"
export default {
  name: 'Loading',
  props: {
    show: Boolean
  },
  data () {
    return {
      loadinggig: loading
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
  z-index: 100;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0px 0px 8px 2px #cccccc;
}
.loadingbody img {
  width: 8rem;
  height: auto;
}
.spinner {
  position: absolute;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  top: 40%;
  left: 50%;
  transform: translate(-50%);
  background-color: #ff000f;
  /* -webkit-animation: bounce 2s infinite ease-in-out;
  animation: bounce 2s infinite ease-in-out; */
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
    transform: scale();
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