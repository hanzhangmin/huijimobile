<template>
  <div class="body">
    <img id="title"
         :src="title" />
    <img id='bailu2'
         :src="welcome">
    <img id='bailu3'
         :src="welcome">
    <img id='bailu'
         :src="welcome">
    <button type="button"
            @click="toindex">跳过</button>
  </div>
</template>
<script>
import welcome from "assets/imgs/welcome.gif"
import title from "assets/imgs/title3.png"
export default {
  data () {
    return {
      welcome,
      title
    }
  },
  created () {
    setTimeout(() => {
      this.$router.push("/index")
    }, 3000)
  },
  methods: {
    toindex () {
      this.$router.push("/index")
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
}
#title {
  margin: 30% 2rem;
  width: 5rem;
  height: auto;
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
  position: fixed;
  width: 90px;
  height: 90px;
  animation: mymove 4s infinite linear;
  -webkit-animation: mymove 4s infinite linear; /*Safari and Chrome*/
}
#bailu2 {
  position: fixed;
  width: 50px;
  height: 50px;
  animation: mymove 6s infinite linear;
  -webkit-animation: mymove 6s infinite linear; /*Safari and Chrome*/
}

@keyframes mymove {
  from {
    left: 100%;
    top: 40vh;
  }
  to {
    left: -60%;
    top: -30%;
  }
}
@-webkit-keyframes mymove /*Safari and Chrome*/ {
  from {
    left: 100%;
    top: 40vh;
  }
  to {
    left: -60%;
    top: -30%;
  }
}
@keyframes mymove2 {
  from {
    left: 60%;
    top: 50vh;
  }
  to {
    left: -60%;
    top: -30%;
  }
}
@-webkit-keyframes mymove2 /*Safari and Chrome*/ {
  from {
    left: 60%;
    top: 50vh;
  }
  to {
    left: -60%;
    top: -30%;
  }
}
button {
  position: absolute;
  bottom: 5vh;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  right: 10vw;
  font-size: 1rem;
  background-color: pink;
  color: #cf2d28;
}
</style>