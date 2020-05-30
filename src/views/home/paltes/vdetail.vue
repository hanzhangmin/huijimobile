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
      <swiper :options="nocconfig"
              ref="nocswiper">
        <swiper-slide v-for="(item ,index) in vBulletins"
                      :key="index">
          <div class="alink">{{item.vbTitle}}</div>
        </swiper-slide>
      </swiper>
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
    <iconbar></iconbar>
    <!-- 村简介 -->
    <vcard>
      <span slot="vname">{{$store.state.vname}}简介</span>
      <p slot="vintro">
        {{vsSurvey}}
      </p>
    </vcard>
  </div>
</template>
<script>
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
    })
    // 获取村公告
    get_bulletins(vid).then(res => {
      this.vBulletins = res.data.map((bulletin) => {
        return bulletin
      })
    })
    // 获取村简介
    get_vintro(vid).then(res => {
      console.log(res);
      this.vsSurvey = res.villagesurvey.vsSurvey
    })
  },
  methods: {
    hidenbulletin () {
      if (this.showBulletin) {
        this.showBulletin = false
      }
    }
  },
  mounted () {
    this.$loading.hide()
  },
}



</script>
<style scoped>
.vdetail {
  position: relative;
  height: 100%;
}
.img {
  height: 30vh;
  line-height: 30vh;
  background-size: cover;
  background-position: center;
}
.imgbody {
  height: 30vh;
  overflow: hidden;
}

.imgbody:after {
  content: "图片处理中，请稍候......";
  height: 30vh;
  display: block;
  line-height: 30vh;
  text-align: center;
  position: relative;
  color: #cf2d28;
  font-size: 1.6rem;
  background-color: #cf2e282d;
}
.vBulletin {
  height: 2.4rem;
  line-height: 2.4rem;
  border-bottom: 1px solid #eeeeee;
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