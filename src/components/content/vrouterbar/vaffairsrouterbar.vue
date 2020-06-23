<template>
  <rbbar>
    <div slot="rbbar">
      <!-- <routerbutton path="/vaffairs/vahuiyi"
                    :activecolor="activecolor"
                    :activebkcolor="activebkcolor">
        <span slot="rbsign">行政村会议</span>
      </routerbutton>
      <routerbutton path="/vaffairs/vaactivity"
                    :activecolor="activecolor"
                    :activebkcolor="activebkcolor">
        <span slot="rbsign">村组织活动</span>
      </routerbutton> -->
      <routerbutton path="/vaffairs/vainput"
                    :activecolor="activecolor"
                    :activebkcolor="activebkcolor">
        <span slot="rbsign">户口迁入</span>
      </routerbutton>
      <routerbutton path="/vaffairs/vaoutput"
                    :activecolor="activecolor"
                    :activebkcolor="activebkcolor">
        <span slot="rbsign">户口迁出</span>
      </routerbutton>
    </div>
  </rbbar>
</template>
<script>
import rbbar from "../../commen/routerbutton/rbbar"
import routerbutton from "../../commen/routerbutton/routerbutton"
export default {
  name: "vafrouterbar",
  components: {
    rbbar,
    routerbutton
  },
  data () {
    return {
      activecolor: "#cf2d28",
      activebkcolor: "#cf2e2836"
    }
  },
}
</script>
<style scoped>
</style>