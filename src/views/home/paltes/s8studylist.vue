<template>
  <div class="body">
    <div class="header">
      <Headergoback>
        <span slot="Headertitle">学习园地</span>
      </Headergoback>
    </div>
    <div class="container">
      <nullpng v-show="isnull" />
      <div v-for="(file,index) in stufiles"
           :key="index">
        <div @click="tishi"
             v-if="file.path===null">
          <ulandlis>
            <span slot="liicon"
                  class="iconfont icon-nav_dangqundangan"></span>
            <span slot="liintro">{{file.title}}</span>
            <a slot="lidetails"
               class="iconfont icon-you"></a>
          </ulandlis>
        </div>
        <router-link v-else
                     tag="div"
                     :to="{path:'/pdfloadernew',query:{name:file.path}}">
          <ulandlis>
            <span slot="liicon"
                  class="iconfont icon-nav_dangqundangan"></span>
            <span slot="liintro">{{file.title}}</span>
            <a slot="lidetails"
               class="iconfont icon-you"></a>
          </ulandlis>
          <!-- </a> -->
        </router-link>
      </div>

      <pageselect :nowPage="nowPage"
                  :allPage="allPage"
                  @changenowpage="changenowpage" />
    </div>
  </div>
</template>
<script>
import {
  get_learning_resources
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
    get_learning_resources(this.type, 10, this.nowPage)
      .then(res => {
        console.log(res);
        if (res.count === 0) {
          this.isnull = true;
          this.allPage = 1;
          this.stufiles.splice(0, this.stufiles.length)
        } else {
          this.allPage = res.pageCount
          this.stufiles = res.data.map(file => {
            let filepath = null
            if (file.file.length > 0) {
              filepath = file.file[0].url
            }
            return {
              title: file.title,
              path: filepath
            }
          })
        }
      }, err => {
        this.isnull = true
        this.stufiles.splice(0, this.stufiles.length)
        this.$mytoast.toast("加载失败！", 2000)
      })
  },
  methods: {
    tishi () {
      console.log(1);
      this.$toast.fail("暂无资源");
    },
    changenowpage (page) {
      this.nowPage = Number(page)
      get_learning_resources(this.type, 10, this.nowPage)
        .then(res => {
          if (res.count === 0) {
            this.isnull = true;
            this.allPage = 1;
            this.stufiles.splice(0, this.stufiles.length)
          } else {
            this.allPage = res.pageCount
            this.stufiles = res.data.map(file => {
              let filepath = null
              if (file.file.length > 0) {
                filepath = file.file[0].url
              }
              return {
                title: file.title,
                path: filepath
              }
            })
          }
        }, err => {
          this.isnull = true
          this.stufiles.splice(0, this.stufiles.length)
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
}
.iconfont {
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