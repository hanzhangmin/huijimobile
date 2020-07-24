<template>
  <div>
    <router-link tag="div"
                 to="/dwdyfz">
      <ulandlis>
        <span slot="liicon"
              class="iconfont icon-nav_dangqundangan"></span>
        <span slot="liintro">党员发展</span>
        <a slot="lidetails"
           class="iconfont icon-you"></a>
      </ulandlis>
    </router-link>
    <router-link tag="div"
                 to="/dwdzzhd">
      <ulandlis>
        <span slot="liicon"
              class="iconfont icon-huodong "></span>
        <span slot="liintro">党组织活动</span>
        <a slot="lidetails"
           class="iconfont icon-you"></a>
      </ulandlis>
    </router-link>
  </div>
</template>
<script>
import ulandlis from "components/commen/ulnavigations/ulandlis2"
import Card1 from "components/commen/Cards/Card1"
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
    ulandlis,
    Card1
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
.card {
  margin: 10px;
  padding: 10px;
  border-radius: 20px;
  /* box-shadow: 0px 0px 8px 4px #cccccc; */
  background-color: #ffffff;
}
.icon-nav_dangqundangan {
  color: #ff4314;
  text-shadow: #e06500 1px 1px, #fc813a -1px -1px, #fc813a -2px -2px 6px;
  /* #fc813a -2px -2px, #fc813a -1px -2px, #fc813a -1px -3px, #fc813a -2px -4px,
    #e6a490 -2px -5px, #e76a30 -3px -6px, #fc813a -4px -7px,
    rgba(0, 0, 5, 0.4) 3px 4px 5px, rgba(0, 0, 5, 0.2) -3px -4px 5px; */
}
.icon-huodong {
  color: #14bcff;
  text-shadow: #8fdcfa 1px 1px, #bee9fa -1px -1px, #d4f3ff -2px -2px 6px;
  /* #ffe723 -2px -2px, #ffe723 -1px -2px, #ffe723 -1px -3px, #ffe723 -2px -4px,
    #ffe723 -2px -5px, #ffe723 -3px -6px, #f9de00 -4px -7px,
    rgba(0, 0, 5, 0.4) 3px 4px 5px, rgba(0, 0, 5, 0.2) -3px -4px 5px; */
}
/* text-shadow: #e0c700 1px 1px, #ffee60 -1px -1px, #ffbe14 -2px -2px 6px; */
/* #ffe723 -2px -2px, #ffe723 -1px -2px, #ffe723 -1px -3px, #ffe723 -2px -4px,
    #ffe723 -2px -5px, #ffe723 -3px -6px, #f9de00 -4px -7px,
    rgba(0, 0, 5, 0.4) 3px 4px 5px, rgba(0, 0, 5, 0.2) -3px -4px 5px; */
</style>