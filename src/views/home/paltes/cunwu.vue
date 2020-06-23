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
  name: "cunwu",
  data () {
    return {
      blocks: [
        {
          route: "/vmanagers",
          name: "干部信息"
        },
        {
          route: "/vhelp",
          name: "补助信息"
        },
        {
          route: "/cwxj",
          name: "项目建设信息"
        },
        {
          route: "/vaffairs",
          name: "户口迁入/迁出"
        },
        {
          route: "/cwhd",
          name: "行政村活动"
        },
        {
          route: "/cwhy",
          name: "行政村会议"
        },
        // {
        //   route: "/vbulletins",
        //   name: "村公告"
        // }
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