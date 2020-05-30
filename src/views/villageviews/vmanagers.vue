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
        <ulandlis>
          <span slot="liicon"
                class="iconfont icon-ganbujiaoliu"></span>
          <span slot="liintro">{{manager.vcName}}</span>
          <a slot="lidetails"
             class="iconfont icon-untitled18"
             @click.stop="showprofile(index)"></a>
        </ulandlis>
      </div>
    </div>
    <vmanagercard v-show="showmanager">
      <span v-if="manager.vcNewimagename===null"
            slot="photo"
            style="color:#cf2d28">
        暂无相片
      </span>
      <img v-else
           class="mphoto"
           slot="photo"
           :src="manager.vcNewimagename">
      <div slot="intro">
        <p>姓名：{{manager.vcName}}</p>
        <p>性别：{{manager.vcSex}}</p>
        <p>联系方式:<br>{{manager.vcPhone}}</p>
        <p>职位：<br>{{manager.job}}</p>
        <p>入职时间：<br>{{manager.getjobtime}}</p>
        <p>工资：{{manager.salary}}</p>
        <p>职责：<br>{{manager.vcZhize}}</p>
      </div>
    </vmanagercard>
  </div>
</template>
<script>
import Headergoback from "components/commen/Header/Headergoback"
import ulandlis from "components/commen/ulnavigations/ulandlis"
import vmanagercard from "components/content/vmanagercard/vmanagercard"
import nullpng from "components/content/nullpng"
import {
  request,
  get_vmanagers_list
} from "network/request"

export default {
  name: "vaffairs",
  data () {
    return {
      managers: [],
      manager: {
        vcName: "",
        vcSex: "",
        vcPhone: "",
        vcNewimagename: "",
        job: "",
        getjobtime: "",
        salary: "",
        vcZhize: "",
      },
      showmanager: false,
      isnull: false
    }
  },
  components: {
    Headergoback,
    ulandlis,
    vmanagercard,
    nullpng
  },
  created () {
    this.$loading.show()
    get_vmanagers_list(this.$store.state.vid)
      .then(res => {
        console.log(res);
        if (res.record === 0) {
          this.isnull = true
        } else {
          this.managers = res.record.map(manager => {
            return {
              vcName: manager.vcName,
              vcSex: manager.vcSex,
              vcPhone: manager.vcPhone,
              vcNewimagename: manager.vcNewimagename === null ? null : this.$store.state.vmanagerurl + manager.vcNewimagename,
              job: manager.job.jName,
              getjobtime: manager.vcBeiyong1 == null ? "未知" : manager.vcBeiyong1,
              salary: manager.vcGongzi == null ? "未知" : manager.vcGongzi + "元",
              vcZhize: manager.vcZhize == null ? "未知" : manager.vcZhize
            }
          })
        }
      })
  },
  methods: {
    showprofile (index) {
      this.manager = this.managers[index]
      this.showmanager = true
    },
    hidenprofile () {
      this.showmanager = false
    }
  },
  mounted () {
    this.$loading.hide()
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
  flex: auto;
  background-color: #efefef;
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
.mphoto {
  width: 100%;
  height: auto;
}
/* .mphoto::after {
  content: "图片处理中";
  height: 100%;
  display: block;
  text-align: center;
  position: relative;
  color: #cf2d28;
  background-color: #cf2e282d;
} */
</style>