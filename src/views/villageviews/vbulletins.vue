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
    <!-- <bulletinBar @click.stop="hidenbulletin"
                 v-show="showBulletin"
                 :showBulletin="showBulletin">
      <p slot="ggtitle">{{vbTitle}}</p>
      <p slot="ggdetails">{{vbContent}}</p>
      <p slot="ggtime">{{vbLanchtime}}</p>
    </bulletinBar> -->
    <van-popup v-model="showBulletin"
               position="bottom"
               :style="{ height: 'auto' }">
      <div class="bulletin-box">
        <p class="bulletin-title">{{vbTitle}}</p>
        <p class="bulletin-content">{{vbContent}}</p>
        <img v-for="img in images"
             :key="img"
             v-lazy="img" />
        <p class="bulletin-time">{{vbLanchtime}}</p>
      </div>

    </van-popup>
    <pageselect :nowPage="nowPage"
                :allPage="allPage"
                @changenowpage="changenowpage"></pageselect>
  </div>
</template>
<script>
import { panfuan, formatDate } from "assets/js/all"
import Headergoback from "components/commen/Header/Headergoback"
import ulandlis from "components/commen/ulnavigations/ulandlis"
import bulletinBar from "components/content/bulletinBar/bulletinBar"
import nullpng from "components/content/nullpng"
import pageselect from "components/commen/pageSelect/pageselect"
import {
  get_village_bulletins
} from "network/request"

export default {
  name: "vaffairs",
  data () {
    return {
      showBulletin: false,
      vBulletins: [],
      isnull: false,
      nowPage: 1,
      allPage: 1,
      vbTitle: "",
      vbContent: "",
      vbLanchtime: "",
      images: [],
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
    get_village_bulletins(this.$store.state.vid, 10, this.nowPage)
      .then((res) => {
        console.log(res);
        if (res.count === 0) {
          this.isnull = true
        } else {
          this.allPage = res.pageCount
          this.vBulletins = res.data.map((bulletin) => {
            let theimg = [];
            if (bulletin.relatedDocuments != null && bulletin.relatedDocuments.length >= 1) {
              bulletin.relatedDocuments.forEach(file => {
                theimg.push(file.url);
              });
            }
            return {
              createdAt: bulletin.createdAt,
              id: bulletin.id,
              introduction: bulletin.introduction,
              title: bulletin.title,
              img: theimg,
            }
          })
        }
      }, err => {
        this.isnull = true
        this.vBulletins.splice(0, this.vBulletins.length)
        this.$toast.fail("加载失败！")
      })
  },
  methods: {
    hidenbulletin () {
      this.showBulletin = false
    },
    showbulletinbyindex (index) {
      this.showBulletin = true;
      this.Bulletin = this.vBulletins[index];
      this.vbTitle = this.vBulletins[index].title;
      this.vbContent = this.vBulletins[index].introduction;
      this.images = this.vBulletins[index].img;
      console.log(this.vBulletins[index]);

      let time = formatDate(new Date(this.vBulletins[index].createdAt), 'yyyy-MM-dd')
      this.vbLanchtime = time
    },
    changenowpage (page) {
      this.nowPage = Number(page)
      get_village_bulletins(this.$store.state.vid, 10, this.nowPage)
        .then((res) => {
          if (res.count === 0) {
            this.isnull = true
          } else {
            this.allPage = res.pageCount
            this.vBulletins = res.data.map((bulletin) => {
              let theimg = [];
              if (bulletin.relatedDocuments != null && bulletin.relatedDocuments.length >= 1) {
                bulletin.relatedDocuments.forEach(file => {
                  theimg.push(file.url);
                });
              }
              return {
                createdAt: bulletin.createdAt,
                id: bulletin.id,
                introduction: bulletin.introduction,
                title: bulletin.title,
                img: theimg,
              }
            })
          }
        }, err => {
          this.isnull = true
          this.vBulletins.splice(0, this.vBulletins.length)
          this.$toast.fail("加载失败！")
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
.bulletin-box {
  padding: 10px;
  line-height: 2rem;
}
.bulletin-box img {
  width: 100%;
  height: auto;
}
.bulletin-title {
  font-size: 1.1rem;
}
.bulletin-content {
  letter-spacing: 2px;
  text-indent: 2em;
  color: #555555;
}
.bulletin-time {
  text-align: right;
  color: #888888;
}
</style>