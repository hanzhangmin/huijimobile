<template>
  <div class="body">
    <div class="header">
      <Headergoback>
        <span slot="Headertitle">党组织活动</span>
      </Headergoback>
    </div>
    <div class="container">
      <h2>{{details.dyzzhdName}}</h2>
      <div class="toright">
        <span>时间：{{details.dyzzhdTime}}</span>
      </div>
      <p>{{details.dyzzhdContent}}</p>
      <img v-for="(p,index) of imgs"
           :key="index"
           :src="p">
      <div class="toright">
        <span>地点：{{details.dyzzhdPlace}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import { panfuan } from "assets/js/all"
import {
  get_dzuzhihd_detail_by_id
} from 'network/request'
import Headergoback from "components/commen/Header/Headergoback"
export default {
  name: "zzhdintro",
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
    get_dzuzhihd_detail_by_id(this.id)
      .then(res => {
        console.log(res)
        for (const [k, v] of Object.entries(res.huodong)) {
          this.$set(this.details, k, panfuan(v))
        }
        if (this.details.dyzzhdZhenshilujing != "--") {
          let photos = this.details.dyzzhdZhenshilujing.split(",")
          if (photos[photos.length - 1].indexOf(",") !== -1) {
            photos.length--;
          } else {
          }
          this.imgs = photos.map(p => {
            return `${this.$store.state.zzhdpurl}${p}`
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
  margin-top: 5px;
  margin-bottom: 2.5rem;
  padding: 0 10px;
}
.toright {
  text-align: right;
  color: #888888;
}
p {
  text-indent: 2rem;
  padding: 5px;
  line-height: 2rem;
  color: #888888;
}
img {
  position: relative;
  width: 100%;
  height: auto;
}
</style>