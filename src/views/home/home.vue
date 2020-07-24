<template>
  <div class="bomebox"
       @click="hidenmr">
    <div class="menublock">
      <div class="shead">
        <swiper :options="swiperOption1"
                ref="mySwiper1">
          <!--  items: ["首页", "党员发展", "党组织活动", "资源", "资产", "资金", "项目建设", "学习园地"], -->
          <swiper-slide v-for="(item,index) in items"
                        :key="index">
            {{item.name}}
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
             :key="item.name"
             @click="toitem(index)">{{item.name}}</div>
      </div>
    </maskright>
    <div class="scontainer">
      <swiper :options="swiperOption2"
              ref="mySwiper2">
        <!-- 首页 -->
        <swiper-slide v-for="(item,index) in items"
                      :key="index+'sslide'">
          <keep-alive>
            <component :is="item.component"></component>
          </keep-alive>
        </swiper-slide>
      </swiper>
    </div>

  </div>
</template>
<script>
import maskright from "components/content/maskright/maskright"
import vdetail from "views/home/paltes/vdetail"
import s8 from "views/home/paltes/s8studyplace"
import dangwu from "views/home/paltes/dangwu"
import cunwu from "views/home/paltes/cunwu"
import sanzi from "views/home/paltes/sanzi"
let mySwiper1, mySwiper2
export default {
  name: "home",
  data () {
    return {
      // items: ["首页", "党务", "村务", "财务", "学习园地"],
      items: [
        {
          name: "首页",
          component: vdetail,
          show: true
        },
        {
          name: "党务",
          component: dangwu,
          show: false
        },
        {
          name: "村务",
          component: cunwu,
          show: false
        },
        {
          name: "财务",
          component: sanzi,
          show: false
        },
        {
          name: "学习园地",
          component: s8,
          show: false
        },
      ],
      // activeIndex: 0,
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
            // mySwiper1.slides[this.clickedIndex].classList.add("swiper-slide-active")\
            // this.$set(this.items[i], "show", true)
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
            // this.$set(this.items[i], "show", true)
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
    s8,
    dangwu,
    cunwu,
    sanzi
  }
}
</script>
<style>
</style>
<style scoped>
.scontainer .swiper-slide {
  margin-top: 6vh;
  height: calc(88vh - 50px);
  overflow-y: scroll;
}
.menublock {
  position: fixed;
  z-index: 1000;
  display: flex;
  background-color: rgb(254, 240, 239);
}
.menublock .menu {
  text-align: center;
  width: 10vw;
  height: 6vh;
  line-height: 6vh;
  text-align: center;
  display: inline-block;
}
.menublock .shead {
  position: relative;
  width: 90vw;
  box-sizing: border-box;
  padding-right: 1;
  display: inline-block;
  overflow: hidden;
}
.shead {
  height: 6vh;
  line-height: 6vh;
}
.shead .swiper-slide >>> {
  position: relative;
  width: auto !important;
  padding: 0 10px;
  font-size: 2.4vh;
  letter-spacing: 3px;
  color: #aaaaaa;
  text-align: center;
  transition: color 0.3s ease-in;
}
.scontainer {
  margin-top: 6vh;
}
.scontainer .swiper-container >>> {
  position: relative;
  height: 100%;
}
.shead .swiper-slide-active {
  color: #cf2d28;
  /* font-size: 120%; */
  /* text-shadow: 2px 0px 2px 6px #cf2d28; */
}

.maskitem {
  background-color: #f6f6f6;
  /* color: #cf2d28; */
  text-align: center;
  margin: 10px;
  padding: 14px 20px;
  letter-spacing: 4px;
}
/* .shead .swiper-slide {
  width: auto !important;
} */
</style>
