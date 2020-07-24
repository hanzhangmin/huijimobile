<template>
  <div class="body">
    <div class="header">
      <Headergoback>
        <span slot="Headertitle">资产详情</span>
      </Headergoback>
    </div>
    <div class="container">

      <div class="table">
        <table v-if="hastz">
          <caption>台账表</caption>
          <tr>
            <td>资产名称：</td>
            <td>{{name}}</td>
          </tr>
          <tr>
            <td>单位：</td>
            <td>{{taizhang.unitOfMeasurement}}</td>
          </tr>
          <tr>
            <td>数量：</td>
            <td>{{taizhang.quantity}}</td>
          </tr>
          <tr>
            <td>单价：</td>
            <td>{{taizhang.unitPrice}}人民币</td>
          </tr>
          <tr>
            <td>原值：</td>
            <td>{{taizhang.zjtzYuanzhi}}</td>
          </tr>
          <tr>
            <td>现值：</td>
            <td>{{taizhang.presentValue}}</td>
          </tr>
          <tr>
            <td>变动情况：</td>
            <td>{{taizhang.changes}}</td>
          </tr>
          <tr>
            <td>品牌：</td>
            <td>{{taizhang.brand}}</td>
          </tr>
          <tr>
            <td>型号：</td>
            <td>{{taizhang.sizeAndModel}}</td>
          </tr>
          <tr>
            <td>构建时间：</td>
            <td>{{taizhang.creationTime}}</td>
          </tr>
          <tr>
            <td>来源：</td>
            <td>{{taizhang.source}}</td>
          </tr>
          <tr>
            <td>预计使用年限：</td>
            <td>{{taizhang.estimatedYears}}</td>
          </tr>
          <tr>
            <td>使用人</td>
            <td>{{taizhang.useDepartmentsAndUser}}</td>
          </tr>
          <!-- <tr>
            <td>管理部门：</td>
            <td>{{taizhang.zjtzDepartment}}</td>
          </tr>
          <tr>
            <td>管理人员：</td>
            <td>{{taizhang.zjtzPeople}}</td>
          </tr> -->
          <tr>
            <td>状态：</td>
            <td>{{taizhang.productStatus}}</td>
          </tr>
          <tr>
            <td>备注：</td>
            <td>{{taizhang.remarks}}</td>
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
            <td>{{jingying.lessee}}</td>
          </tr>
          <tr>
            <td>有无签订合同：</td>
            <td>{{jingying.contractSigned===true?"有":"无"}}</td>
          </tr>
          <tr>
            <td>合同状态：</td>
            <td>{{jingying.contractStatus}}</td>
          </tr>
          <tr>
            <td>合同期限：</td>
            <td>{{jingying.durationOfCooperation}}</td>
          </tr>
          <tr>
            <td>合同金额：</td>
            <td>{{jingying.amount}}</td>
          </tr>
          <tr>
            <td>支付情况：</td>
            <td>{{jingying.paymentStatus}}</td>
          </tr>
          <tr>
            <td>备注：</td>
            <td>{{jingying.remarks}}</td>
          </tr>
          <tr>
            <td rowspan="2">合同图片：</td>

          </tr>
          <tr>
            <td rowspan="2">
              <span v-if="imgs.length===0">
                无
              </span>
              <div v-else
                   v-for="(p,index) of imgs"
                   :key="index">
                <van-image :src="p">
                  <template v-slot:loading>
                    <van-loading type="spinner"
                                 size="20" />
                  </template>
                </van-image>
              </div>
            </td>
          </tr>
        </table>

        <p v-else>暂无经营表</p>
      </div>

    </div>
  </div>
</template>
<script>
import { panfuan } from "assets/js/all"
import {
  get_assets
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
      hasjy: true,
      imgs: []
    }
  },
  created () {
    // this.zid = this.$route.query.zid;
    this.id = this.$route.query.id
    // console.log(this.$route.query);
    get_assets(this.id)
      .then(res => {
        console.log(res);
        this.name = res.name
        if (res.nonOperatingAssets === null) {
          this.hastz = false
        } else {
          for (const [k, v] of Object.entries(res.nonOperatingAssets)) {
            this.$set(this.taizhang, k, panfuan(v))
          }
        }
        if (res.operatingAssets === null) {
          this.hasjy = false
        } else {
          for (const [k, v] of Object.entries(res.operatingAssets)) {
            this.$set(this.jingying, k, panfuan(v))
          }
          this.imgs = res.nonOperatingAssets.relatedDocuments.map(file => {
            return file.url
          })
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
  /* background-color: #efefef; */
}
.table:nth-child(n + 1) {
  border-bottom: 1px solid #cccccc;
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