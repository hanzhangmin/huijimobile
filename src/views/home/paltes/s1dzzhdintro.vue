<template>
  <div class="body">
    <div class="header">
      <Headergoback>
        <span slot="Headertitle">党组织活动</span>
      </Headergoback>
    </div>
    <div class="container">
      <h2>{{details.name}}</h2>
      <div class="toright">
        <span>时间：{{details.time}}</span>
      </div>
      <p>{{details.content}}</p>
      <div v-for="(p,index) of imgs"
           :key="index">
        <van-image :src="p">
          <template v-slot:loading>
            <van-loading type="spinner"
                         size="20" />
          </template>
        </van-image>
      </div>
      <div class="toright">
        <span>地点：{{details.location}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import { panfuan } from "assets/js/all"
import {
  get_org_action
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
    get_org_action(this.id)
      .then(res => {
        console.log(res)
        for (const [k, v] of Object.entries(res)) {
          this.$set(this.details, k, panfuan(v))
        }
        this.imgs = res.relatedDocuments.map(p => {
          return p.url
        });
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