<template>
  <div @click.stop="hidenxiangbar">
    <!-- <selectSearch :stitle="stitle"
                  :options="years"
                  :selected="nowYear"
                  @selectchange="selectchange"></selectSearch> -->
    <div class="dyselect">
      <select v-model="type">
        <option value="4">正式党员</option>
        <option value="3">预备党员</option>
        <option value="2">发展对象</option>
        <option value="1">积极分子</option>
      </select>
    </div>

    <nullpng v-show="isnull" />
    <div v-for="(jijifenzi,index) in jijifenzis"
         :key="index"
         @click.stop="showxiangbar(index)">
      <ulandlis>
        <span slot="liicon"
              class="iconfont icon-nav_dangqundangan"
              style="color:#cf2d28"></span>
        <span slot="liintro">{{jijifenzi.name}}</span>
        <a slot="lidetails"
           class="iconfont icon-icon_huabanfuben"
           style="font-size:1.4rem"
           @click.stop="showxiangbar(index)"></a>
      </ulandlis>
    </div>
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
</template>
<script>
import { post_dylist_bytype } from "network/request"
import ulandlis from "components/commen/ulnavigations/ulandlis"
import pageselect from "components/commen/pageSelect/pageselect"
import nullpng from "components/content/nullpng"
import selectSearch from "components/commen/inputsearch/selectsearch"
import dycard from 'components/content/vmanagercard/dycard'
export default {
  name: "s2",
  computed: {
    years () {
      let kks = [];
      kks.push({ id: 0, name: "近年来" })
      for (let i = (new Date).getFullYear(); i > 2013; i--) {
        kks.push({ id: i, name: i + "年" })
      }
      kks.push({ id: 2013, name: "2013年及以前" })
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
      type: 4,
      isshowxiangbar: false
    }
  },
  components: {
    ulandlis,
    pageselect,
    nullpng,
    selectSearch,
    dycard
  },
  methods: {
    changenowpage (page) {
      this.nowPage = Number(page)
      post_dylist_bytype(this.$store.state.vid, this.nowPage, this.type, 0)
        .then(res => {
          if (res.count === 0 || res.status === "null") {
            this.isnull = true
            this.allPage = 1
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
    showxiangbar (index) {
      this.jijifenzi = this.jijifenzis[index]
      this.isshowxiangbar = true
    },
    hidenxiangbar () {
      this.isshowxiangbar = false
    }
  },
  created () {
    post_dylist_bytype(this.$store.state.vid, this.nowPage, this.type, 0)
      .then(res => {
        console.log(res);
        if (res.count === 0 || res.status === "null") {
          this.isnull = true
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
  watch: {
    type (val) {
      this.nowPage = 1
      post_dylist_bytype(this.$store.state.vid, this.nowPage, this.type, 0)
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

    }
  },
}
</script>

<style scoped>
a {
  appearance: none;
  color: #bbbbbb;
}
a:visited,
a:hover {
  color: #cf2e28c4;
}
.dyselect {
  margin: 10px;
  background-color: #efefef;
  overflow: hidden;
}
select {
  width: 100%;
  height: 2rem;
  border: none;
  font-size: 1rem;
  padding-left: 1rem;
  letter-spacing: 2px;
  outline: none;
}
</style>