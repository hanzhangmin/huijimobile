<template>
  <div class="vdetail"
       @click.stop="hidenbulletin">
    <!-- 村内轮播图 -->
    <div class="imgbody">
      <swiper :options="imgsconfig"
              ref="imgswiper">
        <swiper-slide v-for="img in imgs"
                      :key="img">
          <div class="img"
               :style="{ 'background-image':' url('+img+')'}"></div>
          <!-- <img :src="img" /> -->
        </swiper-slide>
        <!-- <div class="swiper-pagination"
             slot="pagination"></div> -->
      </swiper>
    </div>
    <!-- 村公告轮播图 -->
    <div class="vBulletin">
      <div class="title"
           @click.stop="govbulletins">
        <span class="iconfont icon-gonggao4"></span>
      </div>
      <div class="swipervb">
        <swiper :options="nocconfig"
                ref="nocswiper">
          <swiper-slide v-for="(item ,index) in vBulletins"
                        :key="index">
            <div class="alink">{{item.vbTitle}}</div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <!-- 公告栏 -->
    <bulletinBar @click.stop="hidenbulletin"
                 v-show="showBulletin"
                 :showBulletin="showBulletin">
      <p slot="ggtitle">{{vbTitle}}</p>
      <p slot="ggdetails">{{vbContent}}</p>
      <p slot="ggtime">{{vbLanchtime}}</p>
    </bulletinBar>
    <!-- 图标链接 -->
    <!-- <iconbar></iconbar> -->
    <!-- 村简介 -->
    <vcard>
      <span slot="vname"> <strong> {{$store.state.vname}}简介</strong></span>
      <p slot="vintro"
         class="vinfo">
        {{vsSurvey}}
      </p>
    </vcard>
  </div>
</template>
<script>
import { panfuan } from "assets/js/all"
import {
  request,
  get_vimgs,
  get_bulletins,
  get_vintro
} from "network/request"

import bulletinBar from "components/content/bulletinBar/bulletinBar"
import iconbar from "components/content/iconbar/iconbar"
import vcard from "components/content/vcard/vcard"
export default {
  name: "vdetail",
  components: {
    bulletinBar,
    iconbar,
    vcard
  },
  data () {
    return {
      imgsconfig: {
        slidesPerView: 1,
        loop: true,
        observer: true,
        observeParents: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true,
        //   bulletActiveClass: "my-bullet-active",
        // },
      },
      nocconfig: {
        slidesPerView: 1,
        observer: true,
        loop: true,
        observeParents: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        on: {
          click: (event) => {
            const swiper = this.$refs.nocswiper.$swiper;
            let index = swiper.clickedSlide.dataset.swiperSlideIndex;
            this.vbTitle = this.vBulletins[index].vbTitle
            this.vbContent = this.vBulletins[index].vbContent
            this.vbLanchtime = this.vBulletins[index].vbLanchtime
            setTimeout(() => {
              this.showBulletin = true
            }, 100)
          }
        }
      },
      imgs: [],
      vBulletins: [],
      vbTitle: "",
      vbContent: "",
      vbLanchtime: "",
      showBulletin: false,
      vsSurvey: ""
    }
  },
  created () {
    let vid = this.$store.state.vid;
    // 获取村图片
    get_vimgs(vid).then(res => {
      console.log(res);
      this.imgs = res.img.map((aimg) => {
        return this.$store.state.imgurl + aimg.replace(/[\\]\\/g, '/')
      })
    }, err => {
      // this.isnull = true
      // this.stufiles.splice(0, this.stufiles.length)
      this.$mytoast.toast("图片加载失败！", 2000)
    })
    // 获取村公告
    get_bulletins(vid).then(res => {
      this.vBulletins = res.data.map((bulletin) => {
        return bulletin
      })
    }, err => {
      // this.isnull = true
      // this.stufiles.splice(0, this.stufiles.length)
      this.$mytoast.toast("公告加载失败！", 2000)
    })
    // 获取村简介
    get_vintro(vid).then(res => {
      console.log(res);
      if (res.villagesurvey.vsSurvey === null || res.villagesurvey.vsSurvey === "" || res.villagesurvey.vsSurvey === "暂未录入") {
        this.vsSurvey = panfuan(res.villagesurvey.vsBeiyong3)
      } else {
        this.vsSurvey = res.villagesurvey.vsSurvey
      }
    }, err => {
      // this.isnull = true
      // this.stufiles.splice(0, this.stufiles.length)
      this.$mytoast.toast("村简介加载失败！", 2000)
    })
  },
  methods: {
    hidenbulletin () {
      if (this.showBulletin) {
        this.showBulletin = false
      }
    },
    govbulletins () {
      this.$router.push("/vbulletins")
    }
  },
}



</script>
<style scoped>
.vdetail {
  position: relative;
  height: 100%;
}
.img {
  height: 36vh;
  line-height: 36vh;
  background-size: cover;
  background-position: center;
}
.imgbody {
  height: 36vh;
  overflow: hidden;
}

.imgbody:after {
  content: "图片处理中，请稍候......";
  height: 36vh;
  display: block;
  line-height: 36vh;
  text-align: center;
  position: relative;
  color: #cf2d28;
  font-size: 1.6rem;
  background-color: #cf2e282d;
}
.vBulletin {
  background-color: #ffffff;
  margin-top: 10px;
  height: 3rem;
  line-height: 3rem;
  border-bottom: 1px solid #eeeeee;
  display: flex;
}
.title {
  width: 3rem;
  text-align: center;
  height: 2rem;
  line-height: 2rem;
  /* background-color: rgba(207, 43, 40, 0.1); */
  /* border-radius: 3rem; */
  /* display: inline-block; */
  /* border-right: 1px solid rgba(207, 43, 40, 1); */
  margin: 0.5rem 0px 0px 0rem;
}
.swipervb {
  /* flex: auto; */
  width: 80vw;
}
.iconfont {
  color: #cf2d28;
  font-size: 1.6rem;
}

.alink {
  padding: 0 10px;
  color: #cf2d28;
  letter-spacing: 5px;
  white-space: nowrap;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
}
.my-bullet-active {
  background: #cf2d28;
  color: #cf2d28;
}
.swiper-pagination-bullet-active >>> {
  background: #cf2d28 !important;
}
</style>