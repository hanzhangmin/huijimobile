<template>
  <div class="body">
    <div class="header">
      <Headergoback>
        <span slot="Headertitle">学习园地</span>
      </Headergoback>
    </div>
    <div class="container">
      <iframe frameborder="0"
              :src="src"></iframe>
    </div>
  </div>
</template>
<script>
import Headergoback from "components/commen/Header/Headergoback"
export default {
  name: "pdfloadernew",
  components: {
    Headergoback
  },
  data () {
    return {
      src: '', // pdf文件地址，
    }
  },
  created () {
    // 有时PDF文件地址会出现跨域的情况,这里最好处理一下
    let name = this.$route.query.name;
    // this.src = "/pdfjs-2.2.228-dist/web/viewer.html?file=http://47.105.118.98/jdpt/HJResourse/Law/" + name;
    this.src = "/web/pdfjs-2.2.228-dist/web/viewer.html?file=" + name;
    // this.src = this.$store.state.styfilesdddj + this.$route.query.name
  },

}

</script>
<style scoped>
.body {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.header {
  height: 6vh;
  border-bottom: 1px solid #cfcfcf;
  z-index: 100;
}
.container {
  flex: auto;
  overflow: hidden;
}
iframe {
  width: 100%;
  height: 96vh;
  box-sizing: border-box;
  overflow: hidden;
  border: none;
}
</style>