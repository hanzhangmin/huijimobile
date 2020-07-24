<template>
  <div>
    <nullpng v-show="isnull" />
    <router-link v-for="(ziyuan,index) in ziyuans"
                 :key="index"
                 tag="div"
                 :to="{path:'/ziyuanlist',query:{zid:ziyuan.id}}">
      <ulandlis>
        <span slot="liicon"
              class="iconfont icon-nav_dangqundangan"></span>
        <span slot="liintro">{{ziyuan.name}}</span>
        <a slot="lidetails"
           class="iconfont icon-you"></a>
      </ulandlis>
    </router-link>
  </div>
</template>
<script>
import {
  get_groups
} from 'network/request'
import ulandlis from "components/commen/ulnavigations/ulandlis"
import nullpng from "components/content/nullpng"
export default {
  name: "s4",
  components: {
    ulandlis,
    nullpng,
  },
  data () {
    return {
      isnull: false,
      ziyuans: [],
    }
  },
  created () {
    get_groups(this.$store.state.vid)
      .then(res => {
        console.log(res);
        // if (res.data2.length === 0) {
        //   this.isnull = true
        // } else {
        //   for (let i = 0, len = res.data2.length; i < len; i++) {
        //     this.ziyuans.push(...(res.data2[i].type))
        //   }
        // }
        this.ziyuans = res.map(group => {
          return {
            id: group.id,
            name: group.name
          }
        })
      }, err => {
        this.isnull = true
        this.$toast.fail("加载失败！")
      })
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