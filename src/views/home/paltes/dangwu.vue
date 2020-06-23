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
  name: "dangwu",
  data () {
    return {
      blocks: [
        {
          route: "/dwdyfz",
          name: "党员发展"
        },
        {
          route: "/dwdzzhd",
          name: "党组织活动"
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