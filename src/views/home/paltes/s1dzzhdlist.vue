<template>
  <div class="body">
    <div class="header">
      <Headergoback>
        <span slot="Headertitle">组织活动</span>
      </Headergoback>
    </div>
    <div class="container">
      <nullpng v-show="isnull" />
      <router-link v-for="(hd,index) in zuzhihds"
                   :key="index"
                   tag="div"
                   :to="{path:'/zzhdintro',query:{id:hd.id}}">
        <Card5>
          <!-- <div class="img"
               slot="img"
               v-if="hd.img!=null"
               :style="{'background-image': 'url('+hd.img+')'}"></div> -->
          <div class="img"
               slot="img"
               v-if="hd.img!=null">
            <van-image width="100"
                       height="100"
                       lazy-load
                       :src="hd.img" />
          </div>
          <div slot="img"
               v-else>
            <!-- <span class="iconfont icon-image">
              <span class="littlesapn">无图片</span>
            </span> -->
            <img src="~assets/imgs/zhanwei.png"
                 alt="图片未上传"
                 srcset="">
          </div>
          <b slot="name">{{hd.name}}</b>
          <p slot="intro">
            <span>{{hd.time}}</span>
            <span>{{hd.place}}</span>
          </p>
        </Card5>
      </router-link>
      <pageselect :nowPage="nowPage"
                  :allPage="allPage"
                  @changenowpage="changenowpage" />
    </div>
  </div>
</template>
<script>
import {
  get_org_actions
} from 'network/request'
import Headergoback from "components/commen/Header/Headergoback"
import pageselect from "components/commen/pageSelect/pageselect"
import nullpng from "components/content/nullpng"
import Card5 from "components/commen/Cards/Card5"
export default {
  name: "zzactivity",
  computed: {
    id () {
      return this.$route.query.id
    }
  },
  components: {
    pageselect,
    nullpng,
    Headergoback,
    Card5
  },
  data () {
    return {
      nowPage: 1,
      allPage: 1,
      zuzhihds: [],
      isnull: false
    }
  },
  created () {
    get_org_actions(this.$store.state.vid, this.id, 8, this.nowPage)
      .then(res => {
        console.log(res);
        if (res.count === 0) {
          this.isnull = true
        } else {
          this.allPage = res.pageCount
          this.zuzhihds = res.data.map(p => {
            let theimg = null;
            if (p.relatedDocuments != null && p.relatedDocuments.length >= 1) {
              theimg = p.relatedDocuments[0].url
            }
            return {
              id: p.id,
              name: p.name,
              img: theimg,
              time: p.time,
              place: p.location
            }
          })
        }
      }, err => {
        this.isnull = true
        this.zuzhihds.splice(0, this.zuzhihds.length)
        this.$mytoast.toast("加载失败", 2000)
      }
      )
  },
  methods: {
    changenowpage (page) {
      this.nowPage = Number(page)
      get_org_actions(this.$store.state.vid, this.id, 8, this.nowPage)
        .then(res => {
          console.log(res);
          if (res.count === 0) {
            this.isnull = true
            this.zuzhihds.splice(0, this.zuzhihds.length)
          } else {
            this.isnull = false
            this.allPage = res.pageCount
            this.zuzhihds = res.data.map(p => {
              let theimg = null
              if (p.relatedDocuments != null && p.relatedDocuments.length >= 1) {
                theimg = p.relatedDocuments[0].url
              }
              return {
                id: p.id,
                name: p.name,
                img: theimg,
                time: p.time,
                place: p.location
              }

            })
          }
        }, err => {
          this.isnull = true
          this.zuzhihds.splice(0, this.zuzhihds.length)
          this.$mytoast.toast("加载失败", 2000)
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
  /* border-bottom: 1px solid #cfcfcf; */
  z-index: 100;
}
.container {
  flex: auto;
  /* background-color: #efefef; */
  padding: 0px 10px;
}
.iconfont {
  /* color: #cf2d28; */
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