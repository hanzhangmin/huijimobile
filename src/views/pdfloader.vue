<template>
  <div class="body">
    <div class="header">
      <Headergoback>
        <span slot="Headertitle">学习园地</span>
      </Headergoback>
    </div>
    <div class="arrow">
      <span @touchstart="idx=0"
            @touchend="idx=-1"
            @click="scaleD">放大 </span>
      <span @click="changePdfPage(0)">上一页</span>
      {{currentPage}} / {{pageCount}}
      <span @click="changePdfPage(1)">下一页 </span>
      <span @touchstart="idx=1"
            @touchend="idx=-1"
            @click="scaleX">缩小 </span>
    </div>
    <div class="container">

      <pdf :src="src"
           ref="wrapper"
           :page="currentPage"
           @num-pages="pageCount=$event"
           @page-loaded="currentPage=$event"
           @loaded="loadPdfHandler">
      </pdf>

    </div>

    <!-- 自己引入就可以使用,这里我的需求是做了分页功能,如果不需要分页功能,只要src就可以了 -->

    <!-- <pdf :src="src"
         :page="currentPage"
         @num-pages="pageCount=$event"
         @page-loaded="currentPage=$event"
         @loaded="loadPdfHandler">
    </pdf> -->
    <!--
         src需要展示的PDF地址
             page 当前展示的PDF页码
               num-pages PDF文件总页码
    page-loaded一开始加载的页面
    loaded 加载事件
         -->
  </div>
</template>
<script>
import pdf from "vue-pdf"
import Headergoback from "components/commen/Header/Headergoback"
export default {
  name: "pdfloader",
  components: {
    pdf,
    Headergoback
  },
  data () {
    return {
      currentPage: 0, // pdf文件页码
      pageCount: 0, // pdf文件总页数
      fileType: 'pdf', // 文件类型
      src: '', // pdf文件地址，
      scale: 100, //放大系数
      idx: -1,
    }
  },
  created () {
    // 有时PDF文件地址会出现跨域的情况,这里最好处理一下
    console.log(this.$route.query.name);
    this.src = this.$store.state.styfilesdddj + this.$route.query.name
  },
  methods: {
    // 改变PDF页码,val传过来区分上一页下一页的值,0上一页,1下一页
    changePdfPage (val) {
      // console.log(val)
      if (val === 0 && this.currentPage > 1) {
        this.currentPage--
        // console.log(this.currentPage)
      }
      if (val === 1 && this.currentPage < this.pageCount) {
        this.currentPage++
        // console.log(this.currentPage)
      }
    },
    // pdf加载时
    loadPdfHandler (e) {
      this.currentPage = 1 // 加载的时候先加载第一页
    },
    scaleD () {
      this.scale += 5;
      // this.$refs.wrapper.$el.style.transform = "scale(" + this.scale + ")";
      this.$refs.wrapper.$el.style.width = parseInt(this.scale) + "%";
    },

    //缩小
    scaleX () {
      if (this.scale == 100) {
        return;
      }
      this.scale += -5;
      this.$refs.wrapper.$el.style.width = parseInt(this.scale) + "%";
      // this.$refs.wrapper.$el.style.transform = "scale(" + this.scale + ")";
    }
  }
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
  overflow: scroll;
}
.arrow {
  text-align: center;
  position: fixed;
  width: 100%;
  top: 2.4rem;
  z-index: 100;
  background-color: white;
}
.arrow span {
  padding: 5px;
  display: inline-block;
  padding: 5px;
  color: #cf2d28;
  background: #fac2c0;
  margin: 5px;
  border-radius: 5px;
}
</style>