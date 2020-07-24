<template>
  <div class="body">
    <div class="header">
      <Headergoback>
        <span slot="Headertitle">资产</span>
      </Headergoback>
    </div>
    <div class="container">
      <selectSearch :stitle="stitle"
                    :options="zichantypes"
                    :selected="nowtypeid"
                    @selectchange="selectchange"></selectSearch>
      <nullpng v-show="isnull" />
      <router-link v-for="(l,index) in lists"
                   :key="index"
                   tag="div"
                   :to="{path:'/zichanintro',query:{id:l.id}}">
        <ulandlis>
          <span slot="liicon"
                class="iconfont icon-nav_dangqundangan"></span>
          <span slot="liintro">{{l.name}}</span>
          <a slot="lidetails"
             class="iconfont icon-you"></a>
        </ulandlis>
      </router-link>
    </div>
    <pageselect :nowPage="nowPage"
                :allPage="allPage"
                @changenowpage="changenowpage" />
  </div>
</template>
<script>
import {
  get_assetss,
  get_assets_types
} from 'network/request'
import Headergoback from "components/commen/Header/Headergoback"
import ulandlis from "components/commen/ulnavigations/ulandlis"
import nullpng from "components/content/nullpng"
import pageselect from "components/commen/pageSelect/pageselect"
import selectSearch from "components/commen/inputsearch/selectsearch"
export default {
  name: "zichanlist",
  components: {
    ulandlis,
    nullpng,
    Headergoback,
    pageselect,
    selectSearch
  },
  data () {
    return {
      isnull: false,
      zichantypes: [
        { id: 1, name: "经营性资产" },
        { id: 2, name: "非经营性资产" }
      ],
      lists: [],
      nowPage: 1,
      allPage: 1,
      stitle: "类型：",
      nowtypeid: 0,
      pageSize: 10
    }
  },
  created () {
    get_assets_types(this.$store.state.vid)
      .then(res => {
        console.log(res);
        if (res.count === 0) {
          this.isnull = true
        } else {
          this.zichantypes = res.map(hd => {
            return {
              id: hd.id,
              name: hd.name
            }
          })
          this.nowtypeid = this.zichantypes[0].id
        }
      }, err => {
        this.isnull = true
        this.lists.splice(0, this.lists.length)
        this.$toast.fali("加载失败")
      })
  },
  methods: {
    changenowpage (page) {
      this.nowPage = Number(page)
      get_assetss(this.$store.state.vid, this.nowtypeid, this.pageSize, this.nowPage)
        .then(res => {
          console.log(res);
          if (res.count === 0) {
            this.isnull = true
            this.lists.splice(0, this.lists.length)
          } else {
            this.isnull = false
            this.allPage = res.pageCount
            this.lists = res.data.map(hd => {
              return {
                id: hd.id,
                name: hd.name
              }
            })
          }
        })
    },
    selectchange (val) {
      this.nowtypeid = Number(val)
      get_assetss(this.$store.state.vid, this.nowtypeid, this.pageSize, this.nowPage)
        .then(res => {
          console.log(res);
          if (res.count === 0) {
            this.isnull = true
            this.lists.splice(0, this.lists.length)
          } else {
            this.isnull = false
            this.allPage = res.pageCount
            this.lists = res.data.map(hd => {
              return {
                id: hd.id,
                name: hd.name
              }
            })
          }
        })
    }
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
  background-color: #f6f6f6;
}
.iconfont {
  /* color: #cf2d28; */
  font-size: 1.6rem;
}
a {
  color: #bbbbbb;
}
a:visited,
a:hover {
  color: #cf2e28c4;
}
</style>