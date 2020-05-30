<template>
  <div class="body"
       @click="hidenxiangbar">
    <div class="header">
      <Headergoback>
        <span slot="Headertitle">党员发展</span>
      </Headergoback>
    </div>
    <div class="container">
      <selectSearch :stitle="stitle"
                    :options="years"
                    :selected="nowYear"
                    @selectchange="selectchange"></selectSearch>
      <nullpng v-show="isnull" />
      <ulandlis v-for="(jijifenzi,index) in jijifenzis"
                :key="index">
        <span slot="liicon"
              class="iconfont icon-nav_dangqundangan"
              style="color:#cf2d28"></span>
        <span slot="liintro">{{jijifenzi.name}}</span>
        <a slot="lidetails"
           class="iconfont icon-icon_huabanfuben"
           @click.stop="showxiangbar(index)"></a>
      </ulandlis>
      <dycard v-show="isshowxiangbar">
        <div slot="intro">
          <p>姓名：{{jijifenzi.name}}</p>
          <p>性别：{{jijifenzi.sex}}</p>
          <p>籍贯：{{jijifenzi.address}}</p>
          <p>身份：{{jijifenzi.entity}}</p>
          <p>成为积极分子时间：{{jijifenzi.time1}}</p>
          <p>成为发展对象时间：{{jijifenzi.time2}}</p>
          <p>成为预备党员时间：{{jijifenzi.time3}}</p>
          <p>转正时间：{{jijifenzi.time4}}</p>
        </div>
      </dycard>
      <pageselect :nowPage="nowPage"
                  :allPage="allPage"
                  @changenowpage="changenowpage" />
    </div>
  </div>
</template>
<script>
import { post_dylist_bytype } from "network/request"
import Headergoback from "components/commen/Header/Headergoback"
import ulandlis from "components/commen/ulnavigations/ulandlis"
import pageselect from "components/commen/pageSelect/pageselect"
import nullpng from "components/content/nullpng"
import selectSearch from "components/commen/inputsearch/selectsearch"
import helpxiangcard from "components/content/vhelpcard/helpxiangcard"
import dycard from 'components/content/vmanagercard/dycard'
export default {
  name: "dyfzlist1",
  computed: {
    years () {
      let kks = [];
      for (let i = (new Date).getFullYear(); i > 2011; i--) {
        kks.push({ id: i, name: i })
      }
      return kks
    },
  },
  data () {
    return {
      nowPage: 1,
      allPage: 1,
      isnull: false,
      jijifenzis: [],
      jijifenzi: {
        name: '',
        sex: '',
        address: '',
        entity: '',
        time1: '',
        time2: '',
        time3: '',
        time4: ''
      },
      stitle: "年份：",
      nowYear: 2020,
      type: undefined,
      isshowxiangbar: false
    }
  },
  components: {
    Headergoback,
    ulandlis,
    pageselect,
    nullpng,
    selectSearch,
    helpxiangcard,
    dycard
  },
  methods: {
    changenowpage (page) {
      this.nowPage = Number(page)
      post_dylist_bytype(this.$store.state.vid, this.nowPage, this.type, this.nowYear)
        .then(res => {
          console.log(res);
          if (res.count === 0 || res.status === "null") {
            this.isnull = true
            this.jijifenzis.splice(0, this.jijifenzis.length)
          } else {
            this.isnull = false
            this.allPage = res.total
            this.jijifenzis = res.data.map(jj => {
              return {
                name: jj.zzfzName == null ? "未知" : jj.zzfzName,
                sex: jj.zzfzSex == null ? "未知" : jj.zzfzSex,
                address: jj.zzfzAddress == null ? "未知" : jj.zzfzAddress,
                entity: jj.zzfzEntity == null ? "未知" : jj.zzfzEntity,
                time1: jj.jjfzTime == null ? "未知" : jj.jjfzTime,
                time2: jj.fzdxTime == null ? "未知" : jj.fzdxTime,
                time3: jj.ybdyTime == null ? "未知" : jj.ybdyTime,
                time4: jj.zsdyTime == null ? "未知" : jj.zsdyTime
              }
            })
          }
        })
    },
    selectchange (val) {
      this.nowYear = Number(val)
      console.log(this.nowYear);
      post_dylist_bytype(this.$store.state.vid, this.nowPage, this.type, this.nowYear)
        .then(res => {
          console.log(res);
          if (res.count === 0 || res.status === "null") {
            this.isnull = true
            this.jijifenzis.splice(0, this.jijifenzis.length)

          } else {
            this.isnull = false
            this.allPage = res.total
            this.jijifenzis = res.data.map(jj => {
              return {
                name: jj.zzfzName,
                sex: jj.zzfzSex,
                address: jj.zzfzAddress,
                entity: jj.zzfzEntity,
                time1: jj.jjfzTime,
                time2: jj.fzdxTime,
                time3: jj.ybdyTime,
                time4: jj.zsdyTime
              }
            })
          }
        })
    },
    showxiangbar (index) {
      this.jijifenzi = this.jijifenzis[index]
      this.isshowxiangbar = true
    },
    hidenxiangbar () {
      this.isshowxiangbar = false
    }
  },
  created () {
    // vid, page, type, year
    this.nowYear = (new Date()).getFullYear()
    console.log(this.nowYear);
    console.log(this.nowPage);
    console.log(this.type)
    post_dylist_bytype(this.$store.state.vid, this.nowPage, null, this.nowYear)
      .then(res => {
        console.log(res);
        if (res.count === 0 || res.status === "null") {
          this.isnull = true
        } else {
          this.isnull = false
          this.allPage = res.total
          this.jijifenzis = res.data.map(jj => {
            return {
              name: jj.zzfzName,
              sex: jj.zzfzSex,
              address: jj.zzfzAddress,
              entity: jj.zzfzEntity,
              time1: jj.jjfzTime,
              time2: jj.fzdxTime,
              time3: jj.ybdyTime,
              time4: jj.zsdyTime
            }
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
  background-color: #efefef;
}
</style>