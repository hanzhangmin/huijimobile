<template>
  <div>

    <selectSearch :stitle="stitle"
                  :options="zlists"
                  :selected="selectz"
                  @selectchange="selectchange"></selectSearch>
    <nullpng v-show="isnull" />
    <router-link v-for="(l,index) in zctypes"
                 :key="index"
                 tag="div"
                 :to="{path:'/zichanlist',query:{rid:l.id,zid:selectz}}">
      <ulandlis>
        <span slot="liicon"
              class="iconfont icon-nav_dangqundangan"></span>
        <span slot="liintro">{{l.type}}</span>
        <a slot="lidetails"
           class="iconfont icon-you"></a>
      </ulandlis>
    </router-link>
  </div>
</template>
<script>
import {
  get_zu_byid,
  get_zichanlist_byid
} from 'network/request'
import ulandlis from "components/commen/ulnavigations/ulandlis"
import nullpng from "components/content/nullpng"
import selectSearch from "components/commen/inputsearch/selectsearch"
export default {
  name: "s5",
  components: {
    ulandlis,
    nullpng,
    selectSearch
  },
  data () {
    return {
      nowPage: 1,
      allPage: 1,
      isnull: false,
      zlists: [],
      selectz: 0,
      stitle: "组：",
      zctypes: []
    }
  },
  created () {
    get_zu_byid(this.$store.state.vid)
      .then(res => {
        if (res.count === 0) {
          this.isnull = true
        } else {
          this.zlists = res.record.map(hd => {
            return {
              id: Number(hd.zKey),
              name: hd.zName
            }
          })
          this.selectz = this.zlists[0].id
          return get_zichanlist_byid(this.$store.state.vid, this.selectz)
        }
      }).then(res => {
        console.log(res);
        if (res.count === 0 || res.status === "null") {
          this.isnull = true
        } else {
          this.zctypes = res.record.map(hd => {
            return {
              id: hd.assetsId,
              type: hd.aType
            }
          })
        }
      })
  },
  methods: {
    selectchange (val) {
      this.selectz = Number(val)
      get_zichanlist_byid(this.$store.state.vid, this.selectz)
        .then(res => {
          if (res.count === 0 || res.status === "null") {
            this.isnull = true
            this.zctypes.splice(0, this.zctypes.length)
          } else {
            this.isnull = false
            this.zctypes = res.record.map(hd => {
              return {
                id: hd.assetsId,
                type: hd.aType
              }
            })
          }
        }, err => {
          this.isnull = true
          this.zctypes.splice(0, this.zctypes.length)
          this.$mytoast.toast("加载失败！", 2000)
        })
    }
  },
}
</script>

<style scoped>
.iconfont {
  /* color: #cf2d28; */
  font-size: 1.6rem;
}
</style>