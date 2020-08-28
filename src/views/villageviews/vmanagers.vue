<template>
  <div class="body"
       @click="hidenprofile">
    <div class="header">
      <Headergoback>
        <span slot="Headertitle">村干部</span>
      </Headergoback>
    </div>
    <div class="container">
      <nullpng v-show="isnull"></nullpng>
      <div v-for="(manager,index) in managers"
           :key="index"
           @click.stop="showprofile(index)">
        <Card5>
          <div slot="img"
               class="img iconfont icon-ganbujiaoliu"
               v-if="manager.mphoto==null">
          </div>
          <div slot="img"
               class="img"
               v-else
               :style="{'background-image': 'url('+manager.mphoto+')'}">
            <!-- <span class="iconfont icon-image"></span> -->
          </div>
          <b slot="name">{{manager.name}}({{manager.zhiwei}})</b>
          <p slot="intro">{{manager.zhize}}</p>
          <div slot="button">
            <!-- <button class="del">-</button> -->
            <span class="iconfont icon-you"></span>
          </div>
        </Card5>
      </div>
    </div>
    <vmanagercard v-show="showmanager">
      <span v-if="managers[activeIndex].mphoto===null"
            slot="photo">
        <span class="iconfont icon-ganbujiaoliu"></span>
      </span>
      <img class="mphoto"
           slot="photo"
           v-lazy="managers[activeIndex].mphoto">
      <div slot="intro">
        <p>姓名：{{managers[activeIndex].name}}</p>
        <p>性别：{{managers[activeIndex].sex}}</p>
        <p>联系方式:<br>{{managers[activeIndex].phone}}</p>
        <p>职位：<br>{{managers[activeIndex].zhiwei}}</p>
        <p>入职时间：<br>{{managers[activeIndex].getjobtime}}</p>
        <p>工资：{{managers[activeIndex].xinshui}}元</p>
        <p>职责：<br>{{managers[activeIndex].zhize}}</p>
      </div>
    </vmanagercard>
  </div>
</template>
<script>
import { panfuan } from "assets/js/all"
import Card5 from "components/commen/Cards/Card7"
import Headergoback from "components/commen/Header/Headergoback"
import ulandlis from "components/commen/ulnavigations/ulandlis"
import vmanagercard from "components/content/vmanagercard/vmanagercard"
import nullpng from "components/content/nullpng"
import {
  request,
  get_vmanagers_list,
  get_village_cadres
} from "network/request"

export default {
  name: "vaffairs",
  data () {
    return {
      managers: [],
      activeIndex: 0,
      showmanager: false,
      isnull: false
    }
  },
  components: {
    Headergoback,
    ulandlis,
    vmanagercard,
    nullpng,
    Card5
  },
  created () {
    let vid = this.$store.state.vid;
    get_village_cadres(vid).then(res => {
      console.log(res);
      this.managers = res.map(manager => {
        let mphoto;
        if (manager.image instanceof Array) {
          if (manager.image.length === 0) {
            mphoto = null
          } else {
            mphoto = manager.image[0].url
          }
        } else {
          if (manager.image.url === undefined) {
            mphoto = null
          } else {
            mphoto = manager.image.url
          }
        }
        return {
          id: manager.id,
          sex: Number(manager.sex) === 0 ? "男" : "女",
          xinshui: manager.wages,
          zhize: manager.responsibilities,
          name: manager.name,
          phone: manager.phone,
          mphoto: mphoto,
          zhiwei: manager.duties,
          getjobtime: manager.periodOfService
          // attime:
        }
      })
    })
  },
  methods: {
    showprofile (index) {
      // this.manager = this.managers[index]
      this.activeIndex = index
      this.showmanager = true
    },
    hidenprofile () {
      this.showmanager = false
    }
  },

}
</script>
<style scoped>
.body {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.header {
  height: 6vh;
  border-bottom: 1px solid #cfcfcf;
  z-index: 100;
}
.container {
  /* flex: auto;
   background-color: #efefef;  */
  /* margin: 0px 22px; */
}
.iconfont {
  color: #bbbbbb;
  font-size: 1.6rem;
}

a {
  color: #bbbbbb;
}
a:visited,
a:hover {
  color: #cf2e28c4;
}
.mmphoto {
  width: 100%;
  height: auto;
}
</style>