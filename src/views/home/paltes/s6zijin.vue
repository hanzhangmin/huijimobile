<template>
  <div>
    <nullpng v-show="isnull" />
    <!-- <router-link v-for="(l,index) in lists"
                 :key="index"
                 tag="div"
                 :to="'/zijinbody/'+l.id"> -->
    <div v-for="(l,index) in lists"
         :key="index"
         @click.stop="gozijinbody(l.id)">
      <ulandlis>
        <span slot="liicon"
              class="iconfont icon-nav_dangqundangan"></span>
        <span slot="liintro">{{l.name}}</span>
        <a slot="lidetails"
           class="iconfont icon-you"></a>
      </ulandlis>
      <!-- </router-link> -->
    </div>

  </div>
</template>
<script>
import {
  get_groups
} from 'network/request'
import ulandlis from "components/commen/ulnavigations/ulandlis"
import nullpng from "components/content/nullpng"
export default {
  name: "s6",
  components: {
    ulandlis,
    nullpng,
  },
  data () {
    return {
      nowPage: 1,
      allPage: 1,
      isnull: false,
      lists: [],
    }
  },
  created () {
    get_groups(this.$store.state.vid)
      .then(res => {
        console.log(res);
        if (res.count === 0) {
          this.isnull = true
        } else {
          this.lists = res.map(hd => {
            return {
              id: hd.id,
              name: hd.name
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
    gozijinbody (zid) {
      this.$router.push({
        path: `/zijinbody/${zid}`,
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
a {
  appearance: none;
  color: #bbbbbb;
}
a:visited,
a:hover {
  color: #cf2e28c4;
}
</style>