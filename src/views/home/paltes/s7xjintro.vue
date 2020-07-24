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
        <!-- // acceptor: ""验收方
              // bidding: true//是否投标
              // createdAt: "2020-07-18T06:01:03.663Z"
              // deliverySituation: ""工程款支付情况
              // implement: true是否招标实施方
              // implementer: ""实施方
              // name: "测试"
              // number: "test"//项目编号
              // projected: true//是否立项
              // relatedDocuments: [{ … }]
              // remarks: ""备注
              // supervisor: ""监理方 -->
        <tr>
          <td>项目名：</td>
          <td>{{details.name}}</td>
        </tr>
        <tr>
          <td>项目编号：</td>
          <td>{{details.number}}</td>
        </tr>
        <tr>
          <td>是否招标实施方：</td>
          <td>{{details.implement==true?"是":"否"}}</td>
        </tr>
        <tr>
          <td>实施方：</td>
          <td>{{details.implementer}}</td>
        </tr>
        <tr>
          <td>是否立项：</td>
          <td>{{details.projected==true?"是":"否"}}</td>
        </tr>
        <tr>
          <td>是否投标：</td>
          <td>{{details.bidding==true?"是":"否"}}</td>
        </tr>
        <tr>
          <td>验收方：</td>
          <td>{{details.acceptor}}</td>
        </tr>
        <tr>
          <td>监理方：</td>
          <td>{{details.supervisor}}</td>
        </tr>
        <tr>
          <td>支付情况：</td>
          <td>{{details.deliverySituation}}</td>
        </tr>
        <tr>
          <td>备注：</td>
          <td>{{details.remarks}}</td>
        </tr>
      </table>
      <div v-for="(p,index) of imgs"
           :key="index">
        <van-image :src="p">
          <template v-slot:loading>
            <van-loading type="spinner"
                         size="100" />
          </template>
        </van-image>
      </div>
    </div>
  </div>
</template>
<script>
import gujia from 'components/commen/gujia'
import { panfuan } from "assets/js/all"
import {
  get_project_construction
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
    get_project_construction(this.id)
      .then(res => {
        console.log(res);
        for (const [k, v] of Object.entries(res)) {
          this.$set(this.details, k, panfuan(v))
        }
        this.imgs = res.relatedDocuments.map(p => {
          return p.url
        });
      }, err => {
        this.$toast.fail("加载失败！", 2000)
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
  border-radius: 10px;
  border-collapse: collapse;
}
table,
th,
td {
  border: 1px solid #efefef;
}
table td {
  word-wrap: break-word;
  word-break: break-all;
  display: table-cell;
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