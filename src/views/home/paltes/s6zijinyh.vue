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
                 :to="{path:'/zijinintro',query:{id:l.id,name:l.type}}">
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
  name: "zijinyh",
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
      type: "银行收支"
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
  },
  created () {
    this.nowYear = (new Date()).getFullYear()
    this.zid = sessionStorage.getItem("zid");
    console.log(this.zid);
    get_zijinlist_byid(this.$store.state.vid, this.zid, this.type, this.nowYear)
      .then(res => {
        if (res.count === 0) {
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
      })
  },
  methods: {
    selectchange (val) {
      this.nowYear = Number(val)
      get_zijinlist_byid(this.$store.state.vid, this.zid, this.type, this.nowYear)
        .then(res => {
          if (res.count === 0) {
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
  color: #bbbbbb;
}
a:visited,
a:hover {
  color: #cf2e28c4;
}
</style>