<template>
  <div>
    <router-link v-for="(block,index) in blocks"
                 :key="index"
                 tag="div"
                 :to="block.route">
      <ulandlis>
        <span slot="liicon"
              class="iconfont icon-nav_dangqundangan"></span>
        <span slot="liintro">{{block.name}}</span>
        <a slot="lidetails"
           class="iconfont icon-you"></a>
      </ulandlis>
    </router-link>
  </div>
</template>
<script>
import ulandlis from "components/commen/ulnavigations/ulandlis"
export default {
  name: "sanzi",
  data () {
    return {
      blocks: [
        {
          route: "/cwzy",
          name: "资源"
        },
        {
          route: "/cwzc",
          name: "资产"
        },
        {
          route: "/cwzj",
          name: "资金"
        }
      ]
    }
  },
  components: {
    ulandlis
  }
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