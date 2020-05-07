<template>
  <div class="body">
    <div class="header">
      <Headergoback>
        <span slot="Headertitle">资源</span>
      </Headergoback>
    </div>
    <div class="container">
      <table border="0"
             cellspacing="5"
             cellpadding="5">
        <tr>
          <td>名称：</td>
          <td>{{ziyuan.rdName}}</td>
        </tr>
        <tr>
          <td>地址：</td>
          <td>{{ziyuan .rdAdress}}</td>
        </tr>
        <tr>
          <td>占地面积：</td>
          <td>{{ziyuan.rdAreacovered}}平方米</td>
        </tr>
        <tr>
          <td colspan="2"> 简介：
            <p>{{ziyuan.rdDetails }}</p>
          </td>
        </tr>

      </table>
      <!-- <img v-for="(p,index) of imgs"
           :key="index"
           :src="p"> -->
    </div>
  </div>
</template>
<script>
import {
  post_ziyuan_intro_byid
} from 'network/request'
import Headergoback from "components/commen/Header/Headergoback"
export default {
  name: "ziyuanintro",
  data () {
    return {
      ziyuan: {},
      // imgs: []
    }
  },
  components: {
    Headergoback
  },
  created () {
    post_ziyuan_intro_byid(this.$route.query.id).then(res => {
      console.log(res);
      for (const [k, v] of Object.entries(res.data)) {
        this.$set(this.ziyuan, k, v === null || v === "" ? "未知" : v)
      }
      // if (this.ziyuan.rdBeiyong1 != "未知") {
      //   let photos = this.ziyuan.rdBeiyong1.split(",")
      //   photos.length--;
      //   this.imgs = photos.map(p => {
      //     return `${this.$store.state.ziyuanurl}${p}`
      //   });
      // }
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
  margin-bottom: 2.5rem;
  padding: 5px 10px;
  letter-spacing: 2px;
}
.container table {
  position: relative;
  table-layout: fixed;
  width: 100%;
}
table td {
  word-wrap: break-word;
  word-break: break-all;
  vertical-align: middle;
  padding: 5px;
  border: 1px solid #cccccc;
}
img {
  position: relative;
  width: 100%;
  height: auto;
}
</style>