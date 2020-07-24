<template>
  <div>
    <router-link tag="div"
                 to="/cwzy">
      <ulandlis>

        <img slot="liicon"
             src="~assets/imgs/icon_zcgl (4).png">
        <span slot="liintro">资源</span>
        <a slot="lidetails"
           class="iconfont icon-you"></a>
      </ulandlis>
    </router-link>
    <router-link tag="div"
                 to="/cwzc">
      <ulandlis>

        <img slot="liicon"
             src="~assets/imgs/icon_zcgl9.png">
        <span slot="liintro">资产</span>
        <a slot="lidetails"
           class="iconfont icon-you"></a>
      </ulandlis>
    </router-link>
    <router-link tag="div"
                 to="/cwzj">
      <ulandlis>
        <img slot="liicon"
             src="~assets/imgs/icon_zcgl (2).png">
        <span slot="liintro">资金</span>
        <a slot="lidetails"
           class="iconfont icon-you"></a>
      </ulandlis>
    </router-link>
  </div>
</template>
<script>
import ulandlis from "components/commen/ulnavigations/ulandlis2"
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