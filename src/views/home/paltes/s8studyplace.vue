<template>
  <div>
    <router-link v-for="(block,index) in blocks"
                 :key="index"
                 tag="div"
                 :to="{path:'/stylist',query:{type:block.type}}">
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
  name: "s8",
  data () {
    return {
      blocks: [
        {
          type: 1,
          name: "党规党纪"
        },
        {
          type: 2,
          name: "法律法规"
        },
        {
          type: 3,
          name: "政策"
        },
        {
          type: 4,
          name: "其他"
        },
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