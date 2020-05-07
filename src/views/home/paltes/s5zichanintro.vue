<template>
  <div class="body">
    <div class="header">
      <Headergoback>
        <span slot="Headertitle">资产详情</span>
      </Headergoback>
    </div>
    <div class="container">

      <div>
        <table v-if="hastz">
          <caption>台账表</caption>
          <tr>
            <td>资产名称：</td>
            <td>{{name}}</td>
          </tr>
          <tr>
            <td>单位：</td>
            <td>{{taizhang.zjtzJilangdanwei}}</td>
          </tr>
          <tr>
            <td>数量：</td>
            <td>{{taizhang.zjtzShuliang}}</td>
          </tr>
          <tr>
            <td>单价：</td>
            <td>{{taizhang.zjtzDanjian}}</td>
          </tr>
          <tr>
            <td>原值：</td>
            <td>{{taizhang.zjtzYuanzhi}}</td>
          </tr>
          <tr>
            <td>现值：</td>
            <td>{{taizhang.zjtzXianzhi}}</td>
          </tr>
          <tr>
            <td>变动情况：</td>
            <td>{{taizhang.zjtzBiandongqingkuang}}</td>
          </tr>
          <tr>
            <td>品牌：</td>
            <td>{{taizhang.zjtzPinpai}}</td>
          </tr>
          <tr>
            <td>型号：</td>
            <td>{{taizhang.zjtzXinghao}}</td>
          </tr>
          <tr>
            <td>构建时间：</td>
            <td>{{taizhang.zjtzGoujianshijian}}</td>
          </tr>
          <tr>
            <td>来源：</td>
            <td>{{taizhang.zjtzLaiyuan}}</td>
          </tr>
          <tr>
            <td>预计使用年限：</td>
            <td>{{taizhang.zjtzYvjinianxian}}</td>
          </tr>
          <tr>
            <td>管理部门：</td>
            <td>{{taizhang.zjtzDepartment}}</td>
          </tr>
          <tr>
            <td>管理人员：</td>
            <td>{{taizhang.zjtzPeople}}</td>
          </tr>
          <tr>
            <td>状态：</td>
            <td>{{taizhang.zjtzZhuangtai}}</td>
          </tr>
          <tr>
            <td>备注：</td>
            <td>{{taizhang.zjtzBeizhu}}</td>
          </tr>
        </table>
        <p v-else>暂无台账表</p>
      </div>
      <div>
        <table v-if="hasjy">
          <caption>经营表</caption>
          <tr>
            <td>资产名称：</td>
            <td>{{name}}</td>
          </tr>
          <tr>
            <td>承租人：</td>
            <td>{{jingying.zcjyChengzhuren}}</td>
          </tr>
          <tr>
            <td>状态：</td>
            <td>{{jingying.zcjyZhuangtai}}</td>
          </tr>
          <tr>
            <td>支付情况：</td>
            <td>{{jingying.zcjyZhifuqinkuang}}</td>
          </tr>
          <tr>
            <td>有无签订合同：</td>
            <td>{{jingying.zcjyHetong===true?"有":"无"}}</td>
          </tr>
          <tr>
            <td>合同期限：</td>
            <td>{{jingying.zcjyHetongqixian}}</td>
          </tr>
          <tr>
            <td>支付合同金额：</td>
            <td>{{jingying.zcjyHetongjine}}</td>
          </tr>
          <tr>
            <td>备注：</td>
            <td>{{jingying.zcjyBeizhu}}</td>
          </tr>
          <!-- <tr>
            <td rowspan="2">合同图片：</td>

          </tr>
          <tr>
            <td rowspan="2">{{jingying}}</td>
          </tr> -->
        </table>
        <p v-else>暂无经营表</p>
      </div>

    </div>
  </div>
</template>
<script>
import {
  post_zichanintro_byid
} from 'network/request'
import Headergoback from "components/commen/Header/Headergoback"
export default {
  name: "ziyuanlist",
  components: {
    Headergoback
  },
  data () {
    return {
      zid: 1,
      id: 1,
      name: "",
      taizhang: {},
      jingying: {},
      hastz: true,
      hasjy: true
    }
  },
  created () {
    this.zid = this.$route.query.zid;
    this.id = this.$route.query.id
    console.log(this.$route.query);
    post_zichanintro_byid(this.$store.state.vid, this.zid, this.id)
      .then(res => {
        // console.log(res);
        this.name = res.ZCJY_TypeName
        // console.log(this.name);
        if (res.zichantaizhang === "没有数据") {
          this.hastz = false
        } else {
          for (const [k, v] of Object.entries(res.zichantaizhang)) {
            this.$set(this.taizhang, k, v === null ? "未知" : v)
            // console.log(k + ":" + v);
          }
          // console.log(this.taizhang);
        }
        if (res.zichanjingying === "没有数据") {
          this.hasjy = false
        } else {
          for (const [k, v] of Object.entries(res.zichanjingying)) {
            this.$set(this.jingying, k, v === null ? "未知" : v)
            // console.log(k + ":" + v);
          }
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
  flex-direction: column;
}
.header {
  height: 6vh;
  border-bottom: 1px solid #cfcfcf;
  z-index: 100;
}
.container {
  flex: auto;
  background-color: #efefef;
  padding: 0 10px;
}
.container div {
  background: white;
  border-radius: 10px;
  padding: 5px;
  margin: 10px 0px;
}
table {
  width: 100%;
}
table td:first-child {
  text-align: right;
  padding: 4px 0px;
}
table caption {
  text-align: left;
  padding: 5px;
  border-bottom: 1px solid #cccccc;
}
</style>