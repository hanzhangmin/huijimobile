<template>
  <div class="iconbar">
    <router-link to="/vmanagers"
                 tag="div">
      <iconlink>
        <span slot="linkicon"
              class="iconfont icon-ganbujiaoliu"
              :style="{'font-size':'2rem'}"></span>
        <span slot="linksign">干部信息</span>
      </iconlink>
    </router-link>

    <router-link to="/vhelp"
                 tag="div">
      <iconlink>
        <span slot="linkicon"
              class="iconfont icon-love"
              :style="{'font-size':'2.2rem'}"></span>
        <span slot="linksign">补助信息</span>
      </iconlink>
    </router-link>

    <router-link to="/vaffairs"
                 tag="div">
      <iconlink>
        <span slot="linkicon"
              class="iconfont icon-guanli"
              :style="{'font-size':'2.2rem'}"></span>
        <span slot="linksign">事务信息</span>
      </iconlink>
    </router-link>

    <router-link to="/vbulletins"
                 tag="div">
      <iconlink>
        <span slot="linkicon"
              class="iconfont icon-gonggao4"
              :style="{'font-size':'2rem'}"></span>
        <span slot="linksign">村公告</span>
      </iconlink>
    </router-link>

  </div>
</template>
<script>

import iconlink from "../../commen/iconlink/inconlink"

export default {
  name: "iconbar",
  components: {
    iconlink
  }
}

</script>
<style scoped>
.iconbar {
  position: relative;
  height: auto;
  display: flex;
  justify-content: space-around;
  background-color: white;
  padding: 10px 10px 14px 10px;
  /* border-radius: 10px; */
  /* margin: 0 10px; */
}
</style>