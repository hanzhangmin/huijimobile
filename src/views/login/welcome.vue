<template>
  <div class="body">
    <div>
      <img id="title"
           :src="title" />
      <img id='bailu2'
           :src="welcome">
      <img id='bailu3'
           :src="welcome">
      <img id='bailu'
           :src="welcome">
    </div>
    <div class="button">
      <button type="button"
              @click="toindex">跳过</button>
    </div>
  </div>
</template>
<script>

import welcome from "assets/imgs/welcome.gif"
import title from "assets/imgs/title3.png"
let setTimeoutid = 0;
export default {
  data () {
    return {
      welcome,
      title
    }
  },
  created () {
    setTimeoutid = setTimeout(() => {
      this.$router.push("/index")
    }, 5000)
  },
  methods: {
    toindex () {
      this.$router.push("/index")
      clearTimeout(setTimeoutid)
    }
  },
}
</script>
<style scoped>
.body {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-image: url("~assets/imgs/welcomeback.jpg");
  background-size: cover;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.body div:first-child {
  flex: auto;
}
#title {
  margin: 30% 2rem;
  width: 5rem;
  height: auto;
}
.button {
  text-align: right;
  margin: 20px;
  bottom: 0px;
}
button {
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 1rem;
  background-color: pink;
  color: #cf2d28;
}
#bailu,
#bailu3,
#bailu2 {
  position: fixed;
  z-index: 100;
}
#bailu {
  width: 70px;
  height: 70px;
  animation: mymove 5s infinite linear;
  -webkit-animation: mymove 5s infinite linear; /*Safari and Chrome*/
}
#bailu3 {
  width: 90px;
  height: 90px;
  animation: mymove 4s infinite linear;
  -webkit-animation: mymove 4s infinite linear; /*Safari and Chrome*/
}
#bailu2 {
  width: 50px;
  height: 50px;
  animation: mymove2 6s infinite linear;
  -webkit-animation: mymove2 6s infinite linear; /*Safari and Chrome*/
}

@keyframes mymove {
  from {
    left: 100%;
    top: 40%;
  }
  to {
    left: -30%;
    top: -30%;
  }
}
@-webkit-keyframes mymove /*Safari and Chrome*/ {
  from {
    left: 100%;
    top: 40%;
  }
  to {
    left: -30%;
    top: -30%;
  }
}
@keyframes mymove1 {
  from {
    left: 80%;
    top: 40%;
  }
  to {
    left: -60%;
    top: -30%;
  }
}
@-webkit-keyframes mymove1 /*Safari and Chrome*/ {
  from {
    left: 80%;
    top: 40%;
  }
  to {
    left: -60%;
    top: -30%;
  }
}
@keyframes mymove2 {
  from {
    left: 60%;
    top: 30%;
  }
  to {
    left: -60%;
    top: -30%;
  }
}
@-webkit-keyframes mymove2 /*Safari and Chrome*/ {
  from {
    left: 60%;
    top: 50%;
  }
  to {
    left: -60%;
    top: -30%;
  }
}
</style>