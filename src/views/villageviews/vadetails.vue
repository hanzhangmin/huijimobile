<template>
  <div class="body">
    <div class="header">
      <Headergoback>
        <span slot="Headertitle">{{title}}</span>
      </Headergoback>
    </div>
    <gujia v-if="showgujia"></gujia>
    <div class="container"
         v-if="!showgujia">
      <div v-if="show1">
        <table border="0"
               cellspacing="5"
               cellpadding="5">
          <tr>
            <td>会议主题：</td>
            <td>{{huiyi.title}}</td>
          </tr>
          <tr>
            <td>会议时间：</td>
            <td>{{huiyi.time}}</td>
          </tr>
          <tr>
            <td>会议地点：</td>
            <td>{{huiyi.location}}</td>
          </tr>
          <!-- <tr>
            <td>会议类型：</td>
            <td>{{huiyi.vaTypeofaffair}}</td>
          </tr> -->
          <tr>
            <td>会议主持人：</td>
            <td>{{huiyi.host}}</td>
          </tr>
          <tr>
            <td>会议记录人：</td>
            <td>{{huiyi.recorder}}</td>
          </tr>
          <tr>
            <td>会议参与人员：</td>
            <td>{{huiyi.actor}}</td>
          </tr>
        </table>

        <p>{{huiyi.content}}</p>
      </div>
      <div v-if="show2">
        <table border="0"
               cellspacing="5"
               cellpadding="5">
          <tr>
            <td>活动主题：</td>
            <td>{{huodong.name}}</td>
          </tr>
          <tr>
            <td>活动时间：</td>
            <td>{{huodong.time}}</td>
          </tr>
          <tr>
            <td>活动地点：</td>
            <td>{{huodong.location}}</td>
          </tr>
        </table>
        <p>{{huodong.content}}</p>
      </div>
      <div v-if="show3">
        <table border="0"
               cellspacing="5"
               cellpadding="5">
          <tr>
            <td>迁移人姓名：</td>
            <td>{{qianyi.name}}</td>
          </tr>
          <tr>
            <td>迁移人性别：</td>
            <td>{{qianyi.sex===0?"男":"女"}}</td>
          </tr>
          <tr>
            <td>迁移时间：</td>
            <td>{{qianyi.migrationTime}}</td>
          </tr>
          <tr>
            <td>迁移地址：</td>
            <td>{{qianyi.migrationLocation}}</td>
          </tr>
        </table>
      </div>
      <div v-show="show3">
        <p>迁移相关文档：</p>
        <p v-if="imgs.length===0">
          暂无
        </p>
        <img v-else
             v-for="(p,index) of imgs"
             :key="index"
             v-lazy="p">
      </div>
      <!-- <img v-for="(p,index) of imgs"
           :key="index"
           v-lazy="p"> -->
      <div v-for="(p,index) of imgs"
           :key="index">
        <van-image :src="p">
          <template v-slot:loading>
            <van-loading type="spinner"
                         size="20" />
          </template>
        </van-image>
      </div>
    </div>
  </div>
</template>
<script>
import gujia from 'components/commen/gujia'
import { panfuan } from "assets/js/all"
import Headergoback from "components/commen/Header/Headergoback"

import {
  request,
  get_village_action,
  get_migrater,
  get_village_meeting
} from "network/request"

export default {
  name: "vadetail",
  components: {
    Headergoback,
    gujia
  },
  data () {
    return {
      title: "",
      huiyi: {},
      huodong: {},
      qianyi: {},
      show1: false,
      show2: false,
      show3: false,
      imgs: [],
      showgujia: true
    }
  },
  computed: {
    type () {
      return this.$route.query.type
    },
    id () {
      return this.$route.query.id
    },
  },
  created () {
    // this.$loading.show()
    switch (this.type) {
      case 1:
        this.title = "行政村会议"
        this.show1 = true
        get_village_meeting(this.id)
          .then(res => {
            console.log(res);

            for (const [k, v] of Object.entries(res)) {
              this.$set(this.huiyi, k, panfuan(v))
            }
            try {
              this.imgs = res.relatedDocuments.map(p => {
                return p.url
              });
            } catch (error) {

            }

            this.showgujia = false
          }, err => {
            // this.isnull = true
            // this.stufiles.splice(0, this.stufiles.length)
            this.$mytoast.toast("加载失败！", 2000)
          })
        break;
      case 2:
        this.title = "村组织活动"
        this.show2 = true
        get_village_action(this.id)
          .then(res => {
            console.log(res);
            for (const [k, v] of Object.entries(res)) {
              this.$set(this.huodong, k, panfuan(v))
            }
            try {
              this.imgs = res.relatedDocuments.map(p => {
                return p.url
              });
            } catch (error) {

            }

            this.showgujia = false
          }, err => {
            // this.isnull = true
            // this.stufiles.splice(0, this.stufiles.length)
            this.$mytoast.toast("加载失败！", 2000)
          })
        break;
      case 3:
        this.title = "户口迁入"
        this.show3 = true
        get_migrater(this.id)
          .then(res => {
            console.log(res);

            for (const [k, v] of Object.entries(res)) {
              this.$set(this.qianyi, k, panfuan(v))
            }
            for (const [k, v] of Object.entries(res)) {
              this.$set(this.qianyi, k, panfuan(v))
            }
            try {
              this.imgs = res.relatedDocuments.map(p => {
                return p.url
              });
            } catch (error) {
            }
            this.showgujia = false
          }, err => {
            this.$toast.fail("加载失败！")
          })
        break;
      case 4:
        this.title = "户口迁出"
        this.show3 = true
        get_migrater(this.id)
          .then(res => {
            console.log(res);
            for (const [k, v] of Object.entries(res)) {
              this.$set(this.qianyi, k, panfuan(v))
            }
            try {
              this.imgs = res.relatedDocuments.map(p => {
                return p.url
              });
            } catch (error) {
            }


            this.showgujia = false

          }, err => {
            this.$toast.fail("加载失败！")
          })
        break;
      default:
        break;
    }
  },
  mounted () {
    // this.$loading.hide();
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
table td {
  word-wrap: break-word;
  word-break: break-all;
  vertical-align: middle;
  padding: 5px;
}
table,
th,
td {
  border: 1px solid #efefef;
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
