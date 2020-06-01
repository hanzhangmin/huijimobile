<template>
  <div class="body">
    <div class="header">
      <Headergoback>
        <span slot="Headertitle">{{title}}</span>
      </Headergoback>
    </div>
    <div class="container">
      <div v-if="show1">
        <table border="0"
               cellspacing="5"
               cellpadding="5">
          <tr>
            <td>会议主题：</td>
            <td>{{huiyi.vaName}}</td>
          </tr>
          <tr>
            <td>会议时间：</td>
            <td>{{huiyi.vaTime}}</td>
          </tr>
          <tr>
            <td>会议地点：</td>
            <td>{{huiyi.vaPlace}}</td>
          </tr>
          <tr>
            <td>会议类型：</td>
            <td>{{huiyi.vaTypeofaffair}}</td>
          </tr>
          <tr>
            <td>会议主持人：</td>
            <td>{{huiyi.vaHost}}</td>
          </tr>
          <tr>
            <td>会议记录人：</td>
            <td>{{huiyi.vaNotetaker}}</td>
          </tr>
          <tr>
            <td>会议参与人员：</td>
            <td>{{huiyi.vaAttendants}}</td>
          </tr>
        </table>
        <p>{{huiyi.vaContent}}</p>
      </div>
      <div v-if="show2">
        <table border="0"
               cellspacing="5"
               cellpadding="5">
          <tr>
            <td>活动时间：</td>
            <td>{{huodong.cdyzzhdTime}}</td>
          </tr>
          <tr>
            <td>活动地点：</td>
            <td>{{huodong.cdyzzhdPlace}}</td>
          </tr>
          <tr>
            <td>活动类型：</td>
            <td>{{huodong.cunhuodongleixing.chdlxName}}</td>
          </tr>
        </table>
        <p>{{huodong.cdyzzhdContent}}</p>
      </div>
      <div v-if="show3">
        <table border="0"
               cellspacing="5"
               cellpadding="5">
          <tr>
            <td>迁移人姓名：</td>
            <td>{{qianyi.hkqyName}}</td>
          </tr>
          <tr>
            <td>迁移人性别：</td>
            <td>{{qianyi.hkqySex}}</td>
          </tr>
          <tr>
            <td>迁移时间：</td>
            <td>{{qianyi.hkqyTime}}</td>
          </tr>
          <tr>
            <td>迁移地址：</td>
            <td>{{qianyi.hkqyDizhi}}</td>
          </tr>
        </table>
      </div>
      <div v-show="show3">
        <p>迁移证明：</p>
        <p v-if="imgs.length===0">
          未知
        </p>
        <img v-else
             v-for="(p,index) of imgs"
             :key="index"
             :src="p">
      </div>

      <img v-for="(p,index) of imgs"
           :key="index"
           :src="p">
    </div>
  </div>
</template>
<script>

import Headergoback from "components/commen/Header/Headergoback"
import {
  request,
  get_meeting_details,
  get_activity_details,
  get_qianyi_details
} from "network/request"

export default {
  name: "vadetail",
  components: {
    Headergoback
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
      imgs: []
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
    this.$loading.show()
    switch (this.type) {
      case 1:
        this.title = "行政村会议"
        this.show1 = true
        get_meeting_details(this.id)
          .then(res => {
            // console.log(res);

            for (const [k, v] of Object.entries(res.villageaffair)) {
              // console.log(k + ":" + (v === null ? "未知" : v));
              // this.huiyi[k] = v//无法做到响应式添加
              this.$set(this.huiyi, k, (v === null ? "未知" : v))
            }
            if (this.huiyi.vaPhoto != "未知") {
              let photos = this.huiyi.vaPhoto.split(",")
              photos.length--;
              this.imgs = photos.map(p => {
                return `${this.$store.state.vhuiyipurl}${p}`
              });
            }
          }, err => {
            // this.isnull = true
            // this.stufiles.splice(0, this.stufiles.length)
            this.$mytoast.toast("加载失败！", 2000)
          })
        break;
      case 2:
        this.title = "村组织活动"
        this.show2 = true
        get_activity_details(this.id)
          .then(res => {
            for (const [k, v] of Object.entries(res.data)) {
              this.$set(this.huodong, k, (v === null ? "未知" : v))
            }
            if (this.huodong.cdyzzhdZhenshilujing != "未知") {
              let photos = this.huodong.cdyzzhdZhenshilujing.split(",")
              photos.length--;
              this.imgs = photos.map(p => {
                return `${this.$store.state.vhuodongpurl}${p}`
              });
            }
          }, err => {
            // this.isnull = true
            // this.stufiles.splice(0, this.stufiles.length)
            this.$mytoast.toast("加载失败！", 2000)
          })
        break;
      case 3:
        this.title = "户口迁入"
        this.show3 = true
        get_qianyi_details(this.id)
          .then(res => {
            for (const [k, v] of Object.entries(res.hukouqianyi)) {
              this.$set(this.qianyi, k, (v === null ? "未知" : v))
            }
            if (this.qianyi.hkqyZhengming != "未知") {
              let photos = this.qianyi.hkqyZhengming.split(",")
              photos.length--;
              this.imgs = photos.map(p => {
                return `${this.$store.state.vqypurl}${p}`
              });
            }
          }, err => {
            // this.isnull = true
            // this.stufiles.splice(0, this.stufiles.length)
            this.$mytoast.toast("加载失败！", 2000)
          })
        break;
      case 4:
        this.title = "户口迁出"
        this.show3 = true
        get_qianyi_details(this.id)
          .then(res => {
            for (const [k, v] of Object.entries(res.hukouqianyi)) {
              this.$set(this.qianyi, k, (v === null ? "未知" : v))
            }
            if (this.qianyi.hkqyZhengming != "未知") {
              let photos = this.qianyi.hkqyZhengming.split(",")
              photos.length--;
              this.imgs = photos.map(p => {
                return `${this.$store.state.vqypurl}${p}`
              });
            }
          }, err => {
            // this.isnull = true
            // this.stufiles.splice(0, this.stufiles.length)
            this.$mytoast.toast("加载失败！", 2000)
          })
        break;
      default:
        break;
    }
  },
  mounted () {
    this.$loading.hide();
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
