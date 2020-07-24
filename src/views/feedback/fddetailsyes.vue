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
        <!--
   


        // relatedDocuments	{...}
        // status*	string
        // example: 0
        // 反馈状态

        // Enum:
        // Array [ 3 ]
        // processed	boolean
        // example: false
        // 是否已处理

        // handler	number
        // example: 1
        // 反馈处理者

       
        -->
        <tr>
          <td>标题：</td>
          <td>{{fd.title}}</td>
        </tr>
        <tr>
          <td>提交时间：</td>
          <td>{{fd.time}}</td>
        </tr>
        <tr>
          <td>意见建议类型：</td>
          <td>{{fd.type}}</td>
        </tr>
        <tr>
          <td>状态：</td>
          <td>{{fd.status}}</td>
        </tr>
        <tr>
          <td>处理单位：</td>
          <td>{{fd.department}}</td>
        </tr>
        <tr>
          <td>是否处理</td>
          <td>{{fd.processed===false?"否":"是"}}</td>
        </tr>
        <tr>
          <td>处理结果：</td>
          <td>{{fd.handlRes}}</td>
        </tr>
        <tr>
          <td>向上级反馈附带信息</td>
          <td>{{fd.upMessage}}</td>
        </tr>
        <tr>
          <td>退回反馈附带信息</td>
          <td>{{fd.downMessage}}</td>
        </tr>
      </table>
      <p>{{fd.content}}</p>
      <img v-for="(p,index) of imgs"
           :key="index"
           :src="p">
    </div>
  </div>
</template>
<script>
import { panfuan, formatDate } from "assets/js/all"
import {
  // patch_feedback,
  get_feedback
} from 'network/request'
import Headergobr from "components/commen/Header/Headergobr"
export default {
  name: "fddyes",
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
    get_feedback(this.$route.query.id)
      .then(res => {
        console.log(res);
        for (const [k, v] of Object.entries(res)) {
          this.$set(this.fd, k, panfuan(v))
        }
        switch (res.type) {
          case 0:
            this.$set(this.fd, "type", "资金")
            break;
          case 1:
            this.$set(this.fd, "type", "资产")
            break;
          case 2:
            this.$set(this.fd, "type", "资源")
            break;
          case 3:
            this.$set(this.fd, "type", "党务")
            break;
          case 4:
            this.$set(this.fd, "type", "财务")
            break;
          case 5:
            this.$set(this.fd, "type", "其他")
            break;
          default:
            break;
        }
        this.$set(this.fd, "time", formatDate(new Date(res.createdAt), 'yyyy-MM-dd'))
        this.imgs = res.relatedDocuments.map(p => {
          return p.url
        });
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
