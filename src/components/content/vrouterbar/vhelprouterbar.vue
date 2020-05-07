<template>
  <rbbar>
    <div slot="rbbar">
      <routerbutton path="/vhelp/vhelpxiang"
                    :activecolor="activecolor"
                    :activebkcolor="activebkcolor">
        <span slot="rbsign">补助项</span>
      </routerbutton>
      <routerbutton path="/vhelp/vhelphu"
                    :activecolor="activecolor"
                    :activebkcolor="activebkcolor">
        <span slot="rbsign">补助户</span>
      </routerbutton>
      <routerbutton path="/vhelp/vhelpobj"
                    :activecolor="activecolor"
                    :activebkcolor="activebkcolor">
        <span slot="rbsign">补助对象</span>
      </routerbutton>
    </div>
  </rbbar>
</template>
<script>
import rbbar from "../../commen/routerbutton/rbbar"
import routerbutton from "../../commen/routerbutton/routerbutton"
export default {
  name: "vhrouterbar",
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