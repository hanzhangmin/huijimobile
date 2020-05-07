<template>
  <div class="sbody"
       @click="hidenmr">
    <div class="menublock">
      <div class="shead">
        <swiper :options="swiperOption1"
                ref="mySwiper1">
          <swiper-slide v-for="item in items"
                        :key="item">{{item}}</swiper-slide>
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
        <!-- slides -->
        <swiper-slide>
          <s1 />
        </swiper-slide>
        <swiper-slide>
          <s2 />
        </swiper-slide>
        <swiper-slide>
          <vdetail />
        </swiper-slide>
        <swiper-slide>
          <s4 />
        </swiper-slide>
        <swiper-slide>
          <s5 />
        </swiper-slide>
        <swiper-slide>
          <s6 />
        </swiper-slide>
        <swiper-slide>
          <s7 />
        </swiper-slide>
        <swiper-slide>
          <s8 />
        </swiper-slide>
        <!-- Optional controls -->
        <!-- 如果需要分页器 -->
        <!-- <div class="swiper-pagination"
           slot="pagination"></div> -->
        <!-- 如果需要导航按钮 -->
        <!-- <div class="swiper-button-prev"
           slot="button-prev"></div>
      <div class="swiper-button-next"
           slot="button-next"></div> -->
        <!-- 如果需要滚动条 -->
        <!-- <div class="swiper-scrollbar"
           slot="scrollbar"></div> -->
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
let mySwiper1, mySwiper2
export default {
  name: "home",
  data () {
    return {
      items: ["党组织活动", "党员发展", "村情村貌", "资源", "资产", "资金", "项目建设", "学习园地"],
      showmr: false,
      swiperOption1: {
        slidesPerView: "auto",
        centeredSlides: true,
        initialSlide: 2,
        // centeredSlidesBounds: true,
        speed: 300,
        observer: true,
        observeParents: true,
        slideToClickedSlide: true,
        on: {
          click: function () {
            mySwiper2.slideTo(this.activeIndex, 300, false)
          },
          slideChange: function () {
            // console.log(this.activeIndex);
            try {
              mySwiper2.slideTo(this.activeIndex, 300, false)
            } catch (error) {
            }
          },
        }
      },
      swiperOption2: {
        speed: 300,
        initialSlide: 2,
        observer: true,
        observeParents: true,
        slideToClickedSlide: true,
        on: {
          slideChange: function () {
            // console.log(this.activeIndex);
            try {
              mySwiper1.slideTo(this.activeIndex, 300, false)
            } catch (error) {
            }
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
      mySwiper1.slideTo(index, 300, false)
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
    s8
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
}
.scontainer {
  flex: auto;
}
.menublock {
  display: flex;
}
.menublock .menu {
  text-align: center;
  padding: 0 10px;
  height: 2.4rem;
  line-height: 2.4rem;
  text-align: center;
  color: #cf2d28;
}
.shead .swiper-slide >>> {
  position: relative;
  width: auto;
  padding: 0 10px;
  color: #aaaaaa;
}
.scontainer .swiper-container >>> {
  position: relative;
  height: 100%;
}
.shead .swiper-slide-active {
  color: #cf2d28;
  font-size: 130%;
  text-shadow: 2px 0px 2px 6px #cf2d28;
}
.shead {
  height: 2.4rem;
  line-height: 2.4rem;
  background-color: white;
}

.maskitem {
  background-color: rgb(252, 232, 236);
  color: #cf2d28;
  border-radius: 5px;
  margin: 5px 0;
  text-align: center;
  padding: 5px 10px;
  letter-spacing: 4px;
}
</style>
