<template>
  <div class="body">
    <div class="header">
      <Headergoback>
        <span slot="Headertitle">资源</span>
      </Headergoback>
    </div>
    <div class="container">
      <nullpng v-show="isnull" />

      <router-link v-for="(l,index) in lists"
                   :key="index"
                   tag="div"
                   :to="{path:'/ziyuanintro',query:{id:l.id}}">
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
  get_ziyuanlist_byid
} from 'network/request'
import Headergoback from "components/commen/Header/Headergoback"
import ulandlis from "components/commen/ulnavigations/ulandlis"
import pageselect from "components/commen/pageSelect/pageselect"
import nullpng from "components/content/nullpng"
export default {
  name: "ziyuanlist",
  components: {
    ulandlis,
    pageselect,
    nullpng,
    Headergoback
  },
  data () {
    return {
      nowPage: 1,
      allPage: 1,
      isnull: false,
      lists: [],
      zid: 1,
      rid: 1
    }
  },
  created () {
    this.zid = this.$route.query.zid;
    this.rid = this.$route.query.rid
    get_ziyuanlist_byid(this.$store.state.vid, this.zid, this.rid, this.nowPage)
      .then(res => {
        if (res.count === 0 || res.fangchanname.status === "null") {
          this.isnull = true
        } else {
          this.isnull = false
          this.allPage = res.total
          this.zuzhihds = res.huodongleixingList.map(hd => {
            return {
              id: hd.hdlxId,
              type: hd.hdlxName
            }
          })
        }
      }, err => {
        this.isnull = true
        this.$mytoast.toast("加载失败！", 2000)
      })
  },
  methods: {
    changenowpage (page) {
      this.nowPage = Number(page)
      get_ziyuanlist_byid(this.$store.state.vid, page)
        .then(res => {
          if (res.count === 0 || res.fangchanname.status === "null") {
            this.isnull = true
            this.zuzhihds.splice(0, this.zuzhihds.length)
          } else {
            this.isnull = false
            this.allPage = res.total
            this.zuzhihds = res.huodongleixingList.map(hd => {
              return {
                id: hd.hdlxId,
                type: hd.hdlxName
              }
            })
          }
        }, err => {
          this.isnull = true
          this.zuzhihds.splice(0, this.zuzhihds.length)
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