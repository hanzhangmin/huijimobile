<template>
  <div>
    <selectSearch :stitle="stitle"
                  :options="years"
                  :selected="nowYear"
                  @selectchange="selectchange"></selectSearch>
    <nullpng v-show="isnull" />
    <router-link v-for="(l,index) in lists"
                 :key="index"
                 tag="div"
                 :to="'/zijinintro/'+l.id+'/'+l.type">
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
  get_zijinlist_byid
} from 'network/request'
import ulandlis from "components/commen/ulnavigations/ulandlis"
import nullpng from "components/content/nullpng"
import selectSearch from "components/commen/inputsearch/selectsearch"
export default {
  name: "zijinxj",
  components: {
    ulandlis,
    nullpng,
    selectSearch
  },
  data () {
    return {
      isnull: false,
      lists: [],
      stitle: "年份：",
      nowYear: 2020,
      type: "现金收支"
    }
  },
  computed: {
    years () {
      let kks = [];
      for (let i = (new Date).getFullYear(); i > 2011; i--) {
        kks.push({ id: i, name: i })
      }
      return kks
    },
    zid () {
      // console.log(sessionStorage.getItem("zid"));
      return this.$route.params.zid
    }
  },
  created () {
    console.log(this.$route);
    this.nowYear = (new Date()).getFullYear()
    get_zijinlist_byid(this.$store.state.vid, this.zid, this.type, this.nowYear)
      .then(res => {
        console.log(res);
        if (res.count === 0 || res.status === "null") {
          this.isnull = true
        } else {
          this.allPage = res.total
          this.lists = res.record.map(hd => {
            return {
              id: hd.capitalId,
              type: hd.cType
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
    selectchange (val) {
      this.nowYear = Number(val)
      get_zijinlist_byid(this.$store.state.vid, this.zid, this.type, this.nowYear)
        .then(res => {
          console.log(res);
          if (res.count === 0 || res.status === "null") {
            this.isnull = true
            this.lists.splice(0, this.lists.length)
          } else {
            this.isnull = false
            this.allPage = res.total
            this.lists = res.record.map(hd => {
              return {
                id: hd.capitalId,
                type: hd.cType
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
  watch: {
    zid (val) {
      console.log(val);
      if (val === undefined) {
      } else {
        get_zijinlist_byid(this.$store.state.vid, val, this.type, this.nowYear)
          .then(res => {
            console.log(res);
            if (res.count === 0 || res.status === "null") {
              this.isnull = true
              this.lists.splice(0, this.lists.length)
            } else {
              this.isnull = false
              this.allPage = res.total
              this.lists = res.record.map(hd => {
                return {
                  id: hd.capitalId,
                  type: hd.cType
                }
              })
            }
          }, err => {
            this.isnull = true
            this.lists.splice(0, this.lists.length)
            this.$mytoast.toast("加载失败！", 2000)
          })
      }
    }
  },
}
</script>

<style scoped>
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