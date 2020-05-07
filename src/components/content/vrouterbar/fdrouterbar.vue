<template>
  <rbbar>
    <div slot="rbbar">
      <routerbutton path="/feedcenter/fdyes"
                    :activecolor="activecolor"
                    :activebkcolor="activebkcolor">
        <span slot="rbsign">已处理</span>
      </routerbutton>
      <routerbutton path="/feedcenter/fdno"
                    :activecolor="activecolor"
                    :activebkcolor="activebkcolor">
        <span slot="rbsign">未处理</span>
      </routerbutton>
    </div>
  </rbbar>
</template>
<script>
import rbbar from "../../commen/routerbutton/rbbar"
import routerbutton from "../../commen/routerbutton/routerbutton"
export default {
  name: "fdrouterbar",
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
  created () {
    // console.log(this.zid);
  },
}
</script>
<style scoped>
</style>