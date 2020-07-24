<template>
  <div>
    <nullpng v-show="isnull" />
    <router-link v-for="(l,index) in zctypes"
                 :key="index"
                 tag="div"
                 :to="{path:'/zichanlist',query:{type:l.id}}">
      <ulandlis>
        <span slot="liicon"
              class="iconfont icon-nav_dangqundangan"></span>
        <span slot="liintro">{{l.name}}</span>
        <a slot="lidetails"
           class="iconfont icon-you"></a>
      </ulandlis>
    </router-link>
  </div>
</template>
<script>
import {
  get_assets_types
} from 'network/request'
import ulandlis from "components/commen/ulnavigations/ulandlis"
import nullpng from "components/content/nullpng"
export default {
  name: "s5",
  components: {
    ulandlis,
    nullpng,
  },
  data () {
    return {
      nowPage: 1,
      allPage: 1,
      isnull: false,
      zctypes: [],
    }
  },
  created () {
    get_assets_types(this.$store.state.vid)
      .then(res => {
        console.log(res);
        if (res.count === 0 || res.status === "null") {
          this.isnull = true
          this.zctypes.splice(0, this.zctypes.length)
        } else {
          this.isnull = false
          this.zctypes = res.map(hd => {
            return {
              id: hd.id,
              name: hd.name
            }
          })
        }
      })
  },
}
</script>

<style scoped>
.iconfont {
  /* color: #cf2d28; */
  font-size: 1.6rem;
}
</style>