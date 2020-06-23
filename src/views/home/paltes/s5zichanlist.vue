<template>
  <div class="body">
    <div class="header">
      <Headergoback>
        <span slot="Headertitle">资产</span>
      </Headergoback>
    </div>
    <div class="container">
      <nullpng v-show="isnull" />
      <router-link v-for="(l,index) in lists"
                   :key="index"
                   tag="div"
                   :to="{path:'/zichanintro',query:{id:l.id,zid:zid}}">
        <ulandlis>
          <span slot="liicon"
                class="iconfont icon-nav_dangqundangan"></span>
          <span slot="liintro">{{l.type}}</span>
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
  get_zichanlist_intro_byid
} from 'network/request'
import Headergoback from "components/commen/Header/Headergoback"
import ulandlis from "components/commen/ulnavigations/ulandlis"
import nullpng from "components/content/nullpng"
import pageselect from "components/commen/pageSelect/pageselect"
export default {
  name: "zichanlist",
  components: {
    ulandlis,
    nullpng,
    Headergoback,
    pageselect
  },
  data () {
    return {
      isnull: false,
      lists: [],
      rid: 1,
      nowPage: 1,
      allPage: 1,
      zid: 1
    }
  },
  created () {
    this.zid = this.$route.query.zid;
    this.rid = this.$route.query.rid;
    get_zichanlist_intro_byid(this.rid, this.nowPage)
      .then(res => {
        if (res.count === 0 || res.status === "null") {
          this.isnull = true
        } else {
          this.allPage = res.total
          this.lists = res.data.map(hd => {
            return {
              id: hd.zichanmingzi.zcmzId,
              type: hd.zichanmingzi.zcmzName
            }
          })
        }
      }, err => {
        this.isnull = true
        this.lists.splice(0, this.lists.length)
        this.$mytoast.toast("加载失败！", 2000)
      })
  },
  methods: {
    changenowpage (page) {
      this.nowPage = Number(page)
      get_zichanlist_intro_byid(this.rid, this.nowPage)
        .then(res => {
          if (res.count === 0 || res.status === "null") {
            this.isnull = true
            this.lists.splice(0, this.lists.length)
          } else {
            this.isnull = false
            this.allPage = res.total
            this.lists = res.data.map(hd => {
              return {
                id: hd.zichanmingzi.zcmzId,
                type: hd.zichanmingzi.zcmzName
              }
            })
          }
        }, err => {
          this.isnull = true
          this.lists.splice(0, this.lists.length)
          this.$mytoast.toast("加载失败！", 2000)
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
  background-color: #efefef;
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