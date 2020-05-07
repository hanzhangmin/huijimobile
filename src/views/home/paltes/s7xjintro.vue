<template>
  <div class="body">
    <div class="header">
      <Headergoback>
        <span slot="Headertitle">项目建设</span>
      </Headergoback>
    </div>
    <div class="container">
      <table border="0"
             cellspacing="5"
             cellpadding="5">
        <tr>
          <td>项目名：</td>
          <td>{{details.omName}}</td>
        </tr>
        <tr>
          <td>项目编号：</td>
          <td>{{details.omTenderingmaterial}}</td>
        </tr>
        <tr>
          <td>是否实施：</td>
          <td>{{details.omImplementation==true?"是":"否"}}</td>
        </tr>
        <tr>
          <td>实施方：</td>
          <td>{{details.omImplementingparty}}</td>
        </tr>
        <tr>
          <td>是否立项：</td>
          <td>{{details.omSourceoffunds}}</td>
        </tr>
        <tr>
          <td>是否招标：</td>
          <td>{{details.omImplementtheplan}}</td>
        </tr>
        <tr>
          <td>验收方：</td>
          <td>{{details.omAcceptanceparty}}</td>
        </tr>
        <tr>
          <td>监理方：</td>
          <td>{{details.omFollowupmanagement}}</td>
        </tr>
        <tr>
          <td>支付情况：</td>
          <td>{{details.omDivisionofresponsibility}}</td>
        </tr>
        <tr>
          <td>备注：</td>
          <td>{{details.omType}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import {
  get_project_detail_byid
} from 'network/request'
import Headergoback from "components/commen/Header/Headergoback"
export default {
  name: "xjintro",
  components: {
    Headergoback
  },
  data () {
    return {
      details: {},
      imgs: [],
      id: 1
    }
  },
  created () {
    this.id = this.$route.query.id
    get_project_detail_byid(this.id)
      .then(res => {
        if (res.OperationManagement != null) {
          for (const [k, v] of Object.entries(res.OperationManagement)) {
            // console.log(k + ":" + (v === null ? "未知" : v));
            // this.huiyi[k] = v//无法做到响应式添加
            this.$set(this.details, k, (v === null || "" ? "未知" : v))
          }
          console.log(this.details);
          // if (this.details.vaPhoto != "未知") {
          //   let photos = this.details.vaPhoto.split(",")
          //   photos.length--;
          //   this.imgs = photos.map(p => {
          //     return `${this.$store.state.vhuiyipurl}${p}`
          //   });
          // }
        } else {
        }
      })
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