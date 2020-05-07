<template>
  <div class="body">
    <div class="header">
      <Headergobr>
        <span slot="Headertitle">意见建议</span>
        <span slot="Headerright"
              class="iconfont icon-fankuitianxie"
              @click.stop="gofeedback"></span>
      </Headergobr>
    </div>
    <div class="container">
      <table border="0"
             cellspacing="5"
             cellpadding="5">
        <tr>
          <td>标题：</td>
          <td>{{fd.fTitle}}</td>
        </tr>
        <tr>
          <td>提交时间：</td>
          <td>{{fd.fTime}}</td>
        </tr>
        <tr>
          <td>意见建议类型：</td>
          <td>{{type}}</td>
        </tr>
        <tr>
          <td>状态：</td>
          <td>处理中</td>
        </tr>
      </table>
      <p>{{fd.fContent}}</p>
      <img v-for="(p,index) of imgs"
           :key="index"
           :src="p">
    </div>
  </div>
</template>
<script>
import {
  get_fkdetail_byid
} from 'network/request'
import Headergobr from "components/commen/Header/Headergobr"
export default {
  name: "fddno",
  data () {
    return {
      fd: {},
      type: "资金",
      imgs: []
    }
  },
  components: {
    Headergobr
  },
  created () {
    this.type = this.$route.query.type
    get_fkdetail_byid(this.$route.query.id)
      .then(res => {
        for (const [k, v] of Object.entries(res.feedback)) {
          this.$set(this.fd, k, v === null ? "未知" : v)
        }
        if (this.fd.fImagepath != "未知") {
          let photos = this.fd.fImagepath.split(",")
          photos.length--;
          this.imgs = photos.map(p => {
            return `${this.$store.state.feedbackurl}${p}`
          });
        }
      })
  },
  methods: {
    gofeedback () {
      this.$router.push("index/feedback")
    }
  },
}
</script>
<style scoped>
.body {
  width: 100vw;
  min-height: 100vh;
  display: flex;
}
.header {
  height: 6vh;
  border-bottom: 1px solid #cfcfcf;
  z-index: 100;
}
.container {
  margin-top: 6vh;
  margin-bottom: 2.5rem;
  padding: 5px 10px;
  letter-spacing: 2px;
}
.container table {
  position: relative;
  table-layout: fixed;
  width: 100%;
  box-shadow: 0px 0px 5px 5px #efefef inset;
  border-radius: 10px;
}
table td {
  word-wrap: break-word;
  word-break: break-all;
  vertical-align: middle;
  padding: 5px;
}
p {
  text-indent: 2rem;
  padding: 5px;
  line-height: 2rem;
}
img {
  position: relative;
  width: 100%;
  height: auto;
}
</style>
