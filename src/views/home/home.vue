<template>
  <div class="sbody"
       @click="hidenmr">
    <div class="menublock">
      <div class="shead">
        <swiper :options="swiperOption1"
                ref="mySwiper1">
          <!--  items: ["首页", "党员发展", "党组织活动", "资源", "资产", "资金", "项目建设", "学习园地"], -->
          <swiper-slide v-for="(item,index) in items"
                        :key="index">
            {{item}}
          </swiper-slide>
        </swiper>
      </div>
      <div class="menu"
           @click.stop="mshowmr">
        <span class="iconfont icon-caidan1"></span>
      </div>
    </div>
    <maskright :isshowmr="showmr"
               v-show="showmr">
      <div slot="maskbody">
        <div v-for="(item,index) in items"
             class="maskitem"
             :key="item"
             @click="toitem(index)">{{item}}</div>
      </div>
    </maskright>
    <div class="scontainer">
      <swiper :options="swiperOption2"
              ref="mySwiper2">
        <!-- 首页 -->
        <swiper-slide>
          <vdetail />
        </swiper-slide>
        <!-- 党务 -->
        <swiper-slide>
          <dangwu />
        </swiper-slide>
        <!-- 村务 -->
        <swiper-slide>
          <cunwu />
        </swiper-slide>
        <!-- caiwu -->
        <swiper-slide>
          <sanzi />
        </swiper-slide>
        <!-- <swiper-slide>
          <s5 />
        </swiper-slide>
        <swiper-slide>
          <s6 />
        </swiper-slide> -->
        <!-- 项目建设 -->
        <!-- <swiper-slide>
          <s7 />
        </swiper-slide> -->
        <!-- 学习园地 -->
        <swiper-slide>
          <s8 />
        </swiper-slide>
      </swiper>
    </div>

  </div>
</template>
<script>
import maskright from "components/content/maskright/maskright"
import vdetail from "views/home/paltes/vdetail"
import s1 from "views/home/paltes/s1dzuzhihuodong"
import s2 from "views/home/paltes/s2dyfazhan"
import s4 from "views/home/paltes/s4ziyuan"
import s5 from "views/home/paltes/s5zichan"
import s6 from "views/home/paltes/s6zijin"
import s7 from "views/home/paltes/s7xiangjian"
import s8 from "views/home/paltes/s8studyplace"
import dangwu from "views/home/paltes/dangwu"
import cunwu from "views/home/paltes/cunwu"
import sanzi from "views/home/paltes/sanzi"
let mySwiper1, mySwiper2
export default {
  name: "home",
  data () {
    return {
      items: ["首页", "党务", "村务", "财务", "学习园地"],
      showmr: false,
      swiperOption1: {
        slidesPerView: "auto",
        speed: 300,
        observer: true,
        observeParents: true,
        slideToClickedSlide: true,
        on: {
          click: function () {
            // console.log(this.clickedIndex);
            for (let index = 0; index < mySwiper1.slides.length; index++) {
              // mySwiper1.slides[index].classList.remove("swiper-slide-active")
              mySwiper1.slides[index].style.color = "#aaaaaa"
            }
            // mySwiper1.slides[this.clickedIndex].classList.add("swiper-slide-active")
            mySwiper1.slides[this.clickedIndex].style.color = "#cf2d28"
            mySwiper2.slideTo(this.clickedIndex, 300, false)
          },
        }
      },
      swiperOption2: {
        speed: 300,
        observer: true,
        observeParents: true,
        slideToClickedSlide: true,
        // autoHeight: true,
        on: {
          slideChange: function () {
            mySwiper1.slideTo(this.activeIndex, 300, false)
            // console.log(this.activeIndex);
            for (let index = 0; index < mySwiper1.slides.length; index++) {
              // mySwiper1.slides[index].classList.remove("swiper-slide-active")
              mySwiper1.slides[index].style.color = "#aaaaaa"
            }
            //mySwiper1.slides[this.activeIndex].classList.add("swiper-slide-active")
            mySwiper1.slides[this.activeIndex].style.color = "#cf2d28"
          },
        }
      }
    }
  },
  computed: {
  },
  mounted () {
    mySwiper1 = this.$refs.mySwiper1.$swiper
    mySwiper2 = this.$refs.mySwiper2.$swiper
  },
  methods: {
    mshowmr () {
      if (this.showmr) {
        this.showmr = false
      } else {
        this.showmr = true
      }
    },
    hidenmr () {
      this.showmr = false
    },
    toitem (index) {
      mySwiper2.slideTo(index, 300, false)
    }
  },
  components: {
    maskright,
    vdetail,
    s1,
    s2,
    s4,
    s5,
    s6,
    s7,
    s8,
    dangwu,
    cunwu,
    sanzi
  }
}
</script>
<style scoped>
.sbody {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: #efefef;
  /* background-color: #ffffff; */
}

/* .hswiper {
  width: auto;
} */
.scontainer {
  flex: auto;
}
.menublock {
  display: flex;
  background-color: white;
}
.menublock .menu {
  text-align: center;
  width: 9vw;
  height: 2.4rem;
  line-height: 2.4rem;
  text-align: center;
  color: #cf2d28;
  display: inline-block;
}
.menublock .shead {
  position: relative;
  width: 90vw;
  display: inline-block;
  overflow: hidden;
}
.shead .swiper-slide >>> {
  position: relative;
  width: auto !important;
  padding: 0 10px;
  font-size: 1.2rem;
  letter-spacing: 3px;
  color: #aaaaaa;
  text-align: center;
  transition: color 0.3s ease-in;
}
.scontainer .swiper-slide {
  height: auto;
}
/* .slideactive {
  color: #cf2d28;
} */
/* .shead .swiper-container {
  width: 30rem;
} */
.scontainer .swiper-container >>> {
  position: relative;
  height: 100%;
}
.shead .swiper-slide-active {
  color: #cf2d28;
  /* font-size: 120%; */
  /* text-shadow: 2px 0px 2px 6px #cf2d28; */
}
.shead {
  height: 2.4rem;
  line-height: 2.4rem;
  background-color: rgba(207, 43, 40, 0.1);
}

.maskitem {
  background-color: rgb(252, 232, 236);
  color: #cf2d28;
  text-align: center;
  margin: 5px;
  padding: 5px 10px;
  letter-spacing: 4px;
}
/* .shead .swiper-slide {
  width: auto !important;
} */
</style>
