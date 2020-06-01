<template>
  <div class="body"
       @click="hidenbulletin">
    <div class="header">
      <Headergoback>
        <span slot="Headertitle">村公告</span>
      </Headergoback>
    </div>
    <div class="container">
      <nullpng v-show="isnull"></nullpng>
      <div v-for="(bulletin,index) in vBulletins"
           :key="index"
           @click.stop="showbulletinbyindex(index)">
        <ulandlis>
          <span slot="liicon"
                class="iconfont icon-gonggao1"></span>
          <span slot="liintro">{{bulletin.title}}</span>
          <a slot="lidetails"
             class="iconfont icon-icon_huabanfuben"
             @click.stop="showbulletinbyindex(index)"></a>
        </ulandlis>
      </div>
    </div>
    <bulletinBar @click.stop="hidenbulletin"
                 v-show="showBulletin"
                 :showBulletin="showBulletin">
      <p slot="ggtitle">{{Bulletin.title}}</p>
      <p slot="ggdetails">{{Bulletin.content}}</p>
      <p slot="ggtime">{{Bulletin.time}}</p>
    </bulletinBar>
    <pageselect :nowPage="nowPage"
                :allPage="allPage"
                @changenowpage="changenowpage"></pageselect>
  </div>
</template>
<script>
import Headergoback from "components/commen/Header/Headergoback"
import ulandlis from "components/commen/ulnavigations/ulandlis"
import bulletinBar from "components/content/bulletinBar/bulletinBar"
import nullpng from "components/content/nullpng"
import pageselect from "components/commen/pageSelect/pageselect"
import {
  request,
  get_vbulletins_list
} from "network/request"

export default {
  name: "vaffairs",
  data () {
    return {
      showBulletin: false,
      vBulletins: [],
      Bulletin: {
        title: "",
        content: "",
        time: ""
      },
      isnull: false,
      nowPage: 1,
      allPage: 1
    }
  },
  components: {
    Headergoback,
    bulletinBar,
    ulandlis,
    nullpng,
    pageselect
  },
  created () {
    get_vbulletins_list(this.$store.state.vid, this.nowPage, 8)
      .then((res) => {
        console.log(res);
        if (res.count === 0) {
          this.isnull = true
        } else {
          this.allPage = res.total
          this.vBulletins = res.record.map((bulletin) => {
            return {
              title: bulletin.vbTitle,
              content: bulletin.vbContent,
              time: bulletin.vbLanchtime
            }
          })
        }
      }, err => {
        this.isnull = true
        this.vBulletins.splice(0, this.vBulletins.length)
        this.$mytoast.toast("加载失败！", 2000)
      })
  },
  methods: {
    hidenbulletin () {
      this.showBulletin = false
    },
    showbulletinbyindex (index) {
      this.Bulletin = this.vBulletins[index]
      setTimeout(() => {
        this.showBulletin = true
      }, 100)
    },
    changenowpage (page) {
      this.nowPage = Number(page)
      get_vbulletins_list(this.$store.state.vid, this.nowPage, 8)
        .then((res) => {
          console.log(res);
          if (res.count === 0) {
            this.isnull = true
            this.vBulletins.splice(0, this.vBulletins.length)
          } else {
            this.allPage = res.total
            this.vBulletins = res.record.map((bulletin) => {
              return {
                title: bulletin.vbTitle,
                content: bulletin.vbContent,
                time: bulletin.vbLanchtime
              }
            })
          }
        }, err => {
          this.isnull = true
          this.vBulletins.splice(0, this.vBulletins.length)
          this.$mytoast.toast("加载失败！", 2000)
        })
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
</style>