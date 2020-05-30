<template>
  <div class="body">
    <div class="header">
      <Headergoback>
        <span slot="Headertitle">学习园地</span>
      </Headergoback>
    </div>
    <div class="container">
      <nullpng v-show="isnull" />
      <router-link v-for="(file,index) in stufiles"
                   :key="index"
                   tag="div"
                   :to="{path:'/pdfloadernew',query:{name:file.path}}">
        <!-- <a v-for="(file,index) in stufiles"
         :key="index"
         :href="file.path"> -->
        <ulandlis>
          <span slot="liicon"
                class="iconfont icon-nav_dangqundangan"></span>
          <span slot="liintro">{{file.title}}</span>
          <a slot="lidetails"
             class="iconfont icon-you"></a>
        </ulandlis>
        <!-- </a> -->
      </router-link>
      <pageselect :nowPage="nowPage"
                  :allPage="allPage"
                  @changenowpage="changenowpage" />
    </div>
  </div>
</template>
<script>
import {
  get_Lawlist_bytype
} from 'network/request'
import Headergoback from "components/commen/Header/Headergoback"
import ulandlis from "components/commen/ulnavigations/ulandlis"
import pageselect from "components/commen/pageSelect/pageselect"
import nullpng from "components/content/nullpng"
export default {
  name: "stylist",
  computed: {
    type () {
      return this.$route.query.type
    }
  },
  components: {
    ulandlis,
    pageselect,
    nullpng,
    Headergoback
  },
  data () {
    return {
      nowPage: 1,
      allPage: 1,
      stufiles: [],
      isnull: false,
    }
  },
  created () {
    get_Lawlist_bytype(this.nowPage, this.type)
      .then(res => {
        if (res.count === 0) {
          this.isnull = true;
          this.allPage = 1;
          this.stufiles.splice(0, this.stufiles.length)
        } else {
          this.allPage = res.total
          this.stufiles = res.lawPage.map(file => {
            return {
              title: file.lTitle,
              // path: `${this.$store.state.styfilesdddj}${file.lContent}`
              path: file.lContent
            }
          })
          // console.log(this.stufiles);
        }
      })


  },
  methods: {
    changenowpage (page) {
      this.nowPage = Number(page)
      get_Lawlist_bytype(this.nowPage, this.type)
        .then(res => {
          if (res.count === 0) {
            this.isnull = true;
            this.allPage = 1;
            this.stufiles.splice(0, this.stufiles.length)
          } else {
            this.isnull = false
            this.allPage = res.total
            this.stufiles = res.lawPage.map(file => {
              return {
                title: file.lTitle,
                path: file.lContent
              }
            })
          }
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
  color: #cf2d28;
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