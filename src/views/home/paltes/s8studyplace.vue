<template>
  <div>
    <!-- <router-link v-for="(block,index) in blocks"
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
    </router-link> -->
    <router-link tag="div"
                 :to="{path:'/stylist',query:{type:1}}">
      <Card5>
        <div slot="img"
             class="img img1">
        </div>
        <b slot="name">党规党纪</b>
        <div slot="button">
          <span class="iconfont icon-you"></span>
        </div>
      </Card5>
    </router-link>
    <router-link tag="div"
                 :to="{path:'/stylist',query:{type:4}}">
      <Card5>
        <div slot="img"
             class="img img2">
        </div>
        <b slot="name">法律法规</b>
        <div slot="button">
          <span class="iconfont icon-you"></span>
        </div>
      </Card5>
    </router-link>
    <router-link tag="div"
                 :to="{path:'/stylist',query:{type:2}}">
      <Card5>
        <div slot="img"
             class="img img3">
        </div>
        <b slot="name">政策</b>
        <div slot="button">
          <span class="iconfont icon-you"></span>
        </div>
      </Card5>
    </router-link>
    <router-link tag="div"
                 :to="{path:'/stylist',query:{type:3}}">
      <Card5>
        <div slot="img"
             class="img img4">
        </div>
        <b slot="name">其他</b>
        <div slot="button">
          <span class="iconfont icon-you"></span>
        </div>
      </Card5>
    </router-link>
  </div>
</template>
<script>
// import dgdj from '~asstes/imgs/dangguidangji.png'
import ulandlis from "components/commen/ulnavigations/ulandlis2"
import Card5 from "components/commen/Cards/Card6"
export default {
  name: "s8",
  data () {
    return {
      blocks: [
        {
          type: 1,
          name: "党规党纪",

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
    ulandlis,
    Card5
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
.img1 {
  background-image: url("~assets/imgs/dangguidangji.png");
}
.img2 {
  background-image: url("~assets/imgs/falvfagui.png");
}
.img3 {
  background-image: url("~assets/imgs/zhengce.png");
}
.img4 {
  background-image: url("~assets/imgs/qita.png");
}
</style>