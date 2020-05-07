<template>
  <div class="body">
    <div class="header">
      <Headergoback>
        <span slot="Headertitle">组织活动</span>
      </Headergoback>
    </div>
    <div class="container">
      <nullpng v-show="isnull" />
      <router-link v-for="(hd,index) in zuzhihds"
                   :key="index"
                   tag="div"
                   :to="{path:'/zzhdintro',query:{id:hd.id}}">
        <ulandlis>
          <span slot="liicon"
                class="iconfont icon-nav_dangqundangan"></span>
          <span slot="liintro">{{hd.title}}</span>
          <a slot="lidetails"
             class="iconfont icon-you"></a>
        </ulandlis>
      </router-link>
      <pageselect :nowPage="nowPage"
                  :allPage="allPage"
                  @changenowpage="changenowpage" />
    </div>
  </div>
</template>
<script>
import {
  get_dzuzhihd_list_by_vid
} from 'network/request'
import Headergoback from "components/commen/Header/Headergoback"
import ulandlis from "components/commen/ulnavigations/ulandlis"
import pageselect from "components/commen/pageSelect/pageselect"
import nullpng from "components/content/nullpng"
export default {
  name: "zzactivity",
  computed: {
    id () {
      return this.$route.query.id
    }
  },
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
      zuzhihds: [],
      isnull: false
    }
  },
  created () {
    get_dzuzhihd_list_by_vid(this.$store.state.vid, this.nowPage, this.id)
      .then(res => {
        if (res.count === 0) {
          this.isnull = true
        } else {
          this.allPage = res.total
          this.zuzhihds = res.huodongleixingList.map(hd => {
            return {
              id: hd.dyzzhdId,
              title: hd.dyzzhdName
            }
          })
        }

      })
  },
  methods: {
    changenowpage (page) {
      this.nowPage = Number(page)
      get_dzuzhihd_list_by_vid(this.$store.state.vid, page, this.id)
        .then(res => {
          if (res.count === 0) {
            this.isnull = true
            this.zuzhihds.splice(0, this.zuzhihds.length)
          } else {
            this.isnull = false
            this.allPage = res.total
            this.zuzhihds = res.huodongleixingList.map(hd => {
              return {
                id: hd.dyzzhdId,
                title: hd.dyzzhdName
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
  background-color: #efefef;
}
.iconfont {
  color: #cf2d28;
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