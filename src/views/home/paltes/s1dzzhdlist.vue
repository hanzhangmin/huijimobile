<template>
  <div class="body">
    <div class="container">
      <div class="dyselect">
        <div class="selecttitle">类别：</div>
        <div class="selectbox">
          <select v-model="type">
            <option v-for="(type ,index) in types"
                    :key="'type'+index"
                    :value="type.id">{{type.name}}</option>
          </select>
        </div>
      </div>
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
               class="img"
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
  get_org_actions,
  get_action_types
} from 'network/request'
import pageselect from "components/commen/pageSelect/pageselect"
import nullpng from "components/content/nullpng"
import Card5 from "components/commen/Cards/Card5"
export default {
  name: "zzactivity",
  components: {
    pageselect,
    nullpng,
    Card5
  },
  data () {
    return {
      nowPage: 1,
      allPage: 1,
      zuzhihds: [],
      isnull: false,
      type: 0,
      types: []
    }
  },
  created () {
    get_action_types(this.$store.state.vid, "id,name")
      .then(res => {
        console.log(res);
        try {
          this.type = res[0].id
          this.types = res.map(type => {
            return {
              id: type.id,
              name: type.name
            }
          })
          return get_org_actions(this.$store.state.vid, this.type, 8, this.nowPage)
        } catch (error) {
          this.isnull = true
        }
      })
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
    getorgactions () {
      get_org_actions(this.$store.state.vid, this.type, 8, this.nowPage)
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

    },
    changenowpage (val) {
      this.nowPage = Number(val)
      this.getorgactions()
    }
  },
  watch: {
    type (val) {
      this.nowPage = 1;
      this.allPage = 1;
      this.getorgactions()
    }
  },
}
</script>
<style scoped>
.body {
  width: 94vw;
  min-height: 94vh;
  display: flex;
  flex-direction: column;
}
.container {
  flex: auto;
  background-color: #efefef;
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

.dyselect {
  margin: 10px;
  background-color: #ffffff;
  overflow: hidden;
  display: flex;
  height: 2rem;
  line-height: 2rem;
}
.dyselect .selecttitle {
  display: inline-block;
  padding-left: 10px;
  letter-spacing: 2px;
}
.dyselect .selectbox {
  flex: auto;
}
select {
  width: 100%;
  height: 2rem;
  border: none;
  font-size: 1rem;
  padding-left: 1rem;
  letter-spacing: 2px;
  outline: none;
  background-color: #ffffff;
}
</style>