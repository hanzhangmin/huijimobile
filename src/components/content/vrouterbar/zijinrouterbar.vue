<template>
  <rbbar>
    <div slot="rbbar">
      <routerbutton :path="'/zijinbody/'+zid+'/zijinxj'"
                    :activecolor="activecolor"
                    :activebkcolor="activebkcolor">
        <span slot="rbsign">现金收支</span>
      </routerbutton>
      <routerbutton :path="'/zijinbody/'+zid+'/zijinyh'"
                    :activecolor="activecolor"
                    :activebkcolor="activebkcolor">
        <span slot="rbsign">银行收支</span>
      </routerbutton>
      <!-- <routerbutton path="/zijinbody/zijinlicai"
                    :activecolor="activecolor"
                    :activebkcolor="activebkcolor">
        <span slot="rbsign">理财情况</span>
      </routerbutton> -->
    </div>
  </rbbar>
</template>
<script>
import rbbar from "../../commen/routerbutton/rbbar"
import routerbutton from "../../commen/routerbutton/routerbutton"
export default {
  name: "zijinrouterbar",
  components: {
    rbbar,
    routerbutton
  },
  computed: {
    zid () {
      return this.$route.params.zid
    }
  },
  data () {
    return {
      activecolor: "#cf2d28",
      activebkcolor: "#cf2e2836"
    }
  },
  created () {
    console.log(this.$route.params.zid);
  },
}
</script>
<style scoped>
</style>