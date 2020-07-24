<template>
  <div class="body">
    <div class="header">
      <Headergoback>
        <span slot="Headertitle">资源</span>
      </Headergoback>
    </div>
    <div class="container">
      <selectSearch :stitle="stitle"
                    :options="resourcestypes"
                    :selected="nowtypeid"
                    @selectchange="selectchange"></selectSearch>
      <nullpng v-show="isnull" />

      <van-collapse v-model="activeName"
                    accordion>

        <van-collapse-item v-for="(item,index) in lists"
                           :key="'ziyuan'+index"
                           :title="item.name"
                           :name="index+1">
          <p>坐标：{{item.position}}</p>
          <p>占地面积：{{item.footprint}}</p>
          <p>简介：{{item.explanation}}</p>
          <div v-for="(img,index1) in item.img"
               :key="'tupian'+index1">

            <van-image :src="img.url">
              <template v-slot:loading>
                <van-loading type="spinner"
                             size="20" />
              </template>
            </van-image>
          </div>
        </van-collapse-item>
      </van-collapse>
    </div>
    <pageselect :nowPage="nowPage"
                :allPage="allPage"
                @changenowpage="changenowpage" />
  </div>
</template>
<script>
import { panfuan } from "assets/js/all"
import {
  get_resource_types,
  get_resources
} from 'network/request'
import Headergoback from "components/commen/Header/Headergoback"
import ulandlis from "components/commen/ulnavigations/ulandlis"
import pageselect from "components/commen/pageSelect/pageselect"
import nullpng from "components/content/nullpng"
import selectSearch from "components/commen/inputsearch/selectsearch"
export default {
  name: "ziyuanlist",
  components: {
    ulandlis,
    pageselect,
    nullpng,
    Headergoback,
    selectSearch
  },
  data () {
    return {
      nowPage: 1,
      allPage: 1,
      isnull: false,
      lists: [],
      resourcestypes: [],
      zid: 1,
      rid: 1,
      stitle: "类别：",
      nowtypeid: 0,
      activeName: '1',
    }
  },
  created () {
    get_resource_types(this.$store.state.vid)
      .then(res => {
        console.log(res);
        this.resourcestypes = res.map(type => {
          return {
            name: type.name,
            id: type.id
          }
        })
        if (res.length === 0) {
          this.isnull = true
        } else {
          this.nowtypeid = this.resourcestypes[0].id
        }

      })
  },
  methods: {
    changenowpage (page) {
      this.nowPage = Number(page)
      get_resources(this.zid, this.nowtypeid, 12, this.nowPage)
        .then(res => {
          console.log(res);
          if (res.count === 0) {
            this.isnull = true
            this.lists.splice(0, this.lists.length)
          } else {
            this.isnull = false
            this.allPage = res.pageCount
            this.lists = res.data.map(hd => {
              return {
                id: hd.id,
                name: hd.name,
                position: panfuan(hd.position),
                img: hd.image,
                explanation: panfuan(hd.explanation),
                footprint: panfuan(hd.footprint)
              }
            })
          }
        })
    },
    selectchange (val) {
      console.log(val);
      this.nowtypeid = Number(val);
      this.zid = this.$route.query.zid;
      get_resources(this.zid, this.nowtypeid, 12, this.nowPage)
        .then(res => {
          console.log(res);
          if (res.count === 0) {
            this.isnull = true
            this.lists.splice(0, this.lists.length)
          } else {
            this.isnull = false
            this.allPage = res.pageCount
            this.lists = res.data.map(hd => {
              return {
                id: hd.id,
                name: hd.name,
                position: panfuan(hd.position),
                img: hd.image,
                explanation: panfuan(hd.explanation),
                footprint: panfuan(hd.footprint)
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
  background-color: #f6f6f6;
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