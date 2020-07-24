<template>
  <div class="body">
    <div class="header">
      <Headergoback>
        <span slot="Headertitle">收支详情</span>
      </Headergoback>
    </div>

    <div class="container">
      <h4>{{name}}</h4>
      <div class="jieyu">

        <span v-if="jieyu>0">月结余：{{jieyu}}元</span>
        <span v-else
              style="color:#cf2d28">月结余：{{jieyu}}元</span>
      </div>

      <table cellpadding="0"
             border="0"
             cellspacing="5px">
        <div v-for="(item,index) in shouzhi"
             :key="index">
          <tr>
            <td v-if="item.money>0"
                style="background-color:darkgreen">
              <span>{{item.time}}</span><br>
              <span>￥{{item.money}}元</span><br>
            </td>
            <td v-else
                style="background-color:#CF2D28">
              <span>{{item.time}}</span><br>
              <span>￥{{item.money}}元</span><br>
            </td>
            <td>{{item.reason}}</td>
          </tr>
        </div>
      </table>
    </div>
  </div>
</template>
<script>
import {
  get_fund
} from 'network/request'
import Headergoback from "components/commen/Header/Headergoback"
export default {
  name: "zijinintro",
  components: {
    Headergoback
  },
  data () {
    return {
      zid: 1,
      name: "",
      shouzhi: [],
      jieyu: 0
    }
  },
  created () {
    this.zid = this.$route.params.id;
    this.name = this.$route.params.name
    console.log(this.$route.params.name);
    get_fund(this.zid)
      .then(res => {
        console.log(res);
        if (res.status === "null") {
          this.jieyu = "--"
        } else {
          this.jieyu = parseFloat(res.monthincome).toFixed(2)
          this.shouzhi = res.record.map(item => {
            return {
              time: item.zijinxiangqing.cdTime,
              money: parseFloat(item.meicishouzhi).toFixed(2),
              reason: item.zijinxiangqing.cdXiangqing
            }
          })
        }
      }, err => {
        // this.isnull = true
        // this.lists.splice(0, this.lists.length)
        this.$toast.fail("加载失败！")
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
  /* background: #efefef; */
}
h4 {
  margin: 4px;
  padding: 0px 10px;
}
.jieyu {
  text-align: right;
  color: darkgreen;
  padding: 0px 10px;
}
table {
  vertical-align: middle;
  width: 100%;
  padding: 0px 10px;
}
table td {
  padding: 4px;
  display: table-cell;
  vertical-align: middle;
}
table td:first-child {
  min-width: 40vw;
  text-align: center;
  color: white;
  border-radius: 10px;
}
table div {
  background: white;
  border-radius: 10px;
  margin: 0.5rem 0px;
}
</style>