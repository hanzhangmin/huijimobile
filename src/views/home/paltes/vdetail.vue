<template>
  <div class="vdetail"
       @click.stop="hidenbulletin">
    <gujia v-if="showgujia"></gujia>
    <div class="imgbody"
         v-if="!showgujia">
      <van-swipe :autoplay="3000"
                 indicator-color="white">
        <van-swipe-item v-for="(image, index) in imgs"
                        :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div>
      <ulandlis1 v-if="!showgujia">
        <span slot="liicon"
              class="iconfont icon-gonggao4"></span>
        <div class="swipervb"
             slot="liintro">
          <swiper :options="nocconfig"
                  ref="nocswiper">
            <swiper-slide v-for="(item ,index) in vBulletins"
                          :key="index">
              <div class="alink">{{item.title}}</div>
            </swiper-slide>
          </swiper>
        </div>

        <span slot="lidetails"
              @click.stop="govbulletins">更多</span>
      </ulandlis1>
    </div>
    <bulletinBar @click.stop="hidenbulletin"
                 v-show="showBulletin"
                 :showBulletin="showBulletin"
                 v-if="!showgujia">
      <p slot="ggtitle">{{vbTitle}}</p>
      <p slot="ggdetails">{{vbContent}}</p>
      <p slot="ggtime">{{vbLanchtime}}</p>
    </bulletinBar>
    <vcard v-if="!showgujia">
      <span slot="vname"
            class="cardtitle"> <strong> {{$store.state.vname}}简介</strong></span>
      <p slot="vintro"
         class="vinfo">
        {{vsSurvey}}
      </p>
      <p class="updatatime"></p>
    </vcard>
  </div>
</template>
<script>
import { panfuan, formatDate } from "assets/js/all"
import {
  get_village_intro,
  get_village_bulletins,
  get_village_bulletin
} from "network/request"
import ulandlis1 from "components/commen/ulnavigations/ulandlis1"
import bulletinBar from "components/content/bulletinBar/bulletinBar"
import iconbar from "components/content/iconbar/iconbar"
import vcard from "components/content/vcard/vcard"
import gujia from 'components/commen/gujia'
export default {
  name: "vdetail",
  components: {
    bulletinBar,
    iconbar,
    vcard,
    gujia,
    ulandlis1
  },
  data () {
    return {
      imgsconfig: {
        slidesPerView: 1,
        loop: true,
        observer: true,
        observeParents: true,
        autoheight: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
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
            this.vbTitle = this.vBulletins[index].title
            this.vbContent = this.vBulletins[index].introduction
            let time = formatDate(new Date(this.vBulletins[index].createdAt), 'yyyy-MM-dd')
            this.vbLanchtime = time
            setTimeout(() => {
              this.showBulletin = true
            }, 100)
          }
        }
      },
      imgs: [],
      vBulletins: [],
      showBulletin: false,
      vbTitle: "",
      vbContent: "",
      vbLanchtime: "",
      vsSurvey: "",
      showgujia: true
    }
  },
  created () {
    let vid = this.$store.state.vid;
    // 获取村基本信息
    get_village_intro(vid).then(res => {
      console.log(res);
      try {
        this.imgs = res.image.map((aimg) => {
          return aimg.url
        })
      } catch (error) {

      }

      this.vsSurvey = res.introduction

      this.showgujia = false
    })
    // 获取村公告
    get_village_bulletins(vid, 3, 1, "id,title,createdAt,introduction").then(res => {
      this.vBulletins = res.data.map((bulletin) => {
        return bulletin
      })
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
.ulandlis {
  padding: 0px 10px;
}
.vdetail {
  position: relative;
  height: 100%;
}
img {
  width: 100%;
  height: 30vh;
  /* line-height: 36vh; */
  background-size: cover;
  background-position: center;
}
.imgbody {
  height: 30vh;
  overflow: hidden;
  text-align: center;
}

.imgbody:after {
  content: "图片处理中，请稍候......";
  height: 30vh;
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
.swipervb {
  width: 70vw;
}
/* .swipervb .swiper-slide {
  height: 3rem !important;
} */
.iconfont {
  color: #cf2d28;
  font-size: 1.6rem;
}

.alink {
  padding: 0 10px;
  letter-spacing: 5px;
  white-space: nowrap;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #cf2d28;
}
.my-bullet-active {
  background: #cf2d28;
  color: #cf2d28;
}
.swiper-pagination-bullet-active >>> {
  background: #cf2d28 !important;
}
</style>