<template>
  <div>
    <nullpng v-show="isnull" />
    <router-link v-for="(hd,index) in zuzhihds"
                 :key="index"
                 tag="div"
                 :to="{path:'/zzactivity',query:{id:hd.id}}">
      <ulandlis>
        <span slot="liicon"
              class="iconfont icon-nav_dangqundangan"></span>
        <span slot="liintro">{{hd.type}}</span>
        <a slot="lidetails"
           class="iconfont icon-you"></a>
      </ulandlis>
    </router-link>
    <pageselect :nowPage="nowPage"
                :allPage="allPage"
                @changenowpage="changenowpage" />
  </div>
</template>
<script>
import {
  get_dzuzhihd_by_vid
} from 'network/request'
import ulandlis from "components/commen/ulnavigations/ulandlis"
import pageselect from "components/commen/pageSelect/pageselect"
import nullpng from "components/content/nullpng"
export default {
  name: "s1",
  components: {
    ulandlis,
    pageselect,
    nullpng,
  },
  data () {
    return {
      nowPage: 1,
      allPage: 1,
      isnull: false,
      zuzhihds: [],
    }
  },
  created () {
    get_dzuzhihd_by_vid(this.$store.state.vid, this.nowPage)
      .then(res => {
        if (res.count === 0) {
          this.isnull = true
        } else {
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
        this.$mytoast.toast("加载失败", 2000)
      })
  },
  methods: {
    changenowpage (page) {
      this.nowPage = Number(page)
      get_dzuzhihd_by_vid(this.$store.state.vid, page)
        .then(res => {
          if (res.count === 0) {
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
          this.zuzhihds.splice(0, this.zuzhihds.length)
          this.isnull = true
          this.$mytoast.toast("加载失败", 2000)
        })
    }
  },
}
</script>

<style scoped>
.iconfont {
  color: #cf2d28;
  font-size: 1.6rem;
}
a {
  appearance: none;
  color: #bbbbbb;
}
a:visited,
a:hover {
  color: #cf2e28c4;
}
</style>