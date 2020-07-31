<template>
  <div class="container">
    <nullpng v-show="isnull" />
    <router-link v-for="(activity,index) in activities"
                 :key="index"
                 tag="div"
                 :to="{path:'/vadetails',query:{type:2,id:activity.id}}">

      <Card5>
        <div class="img"
             slot="img"
             v-if="activity.img!=null">
          <van-image width="100"
                     height="100"
                     lazy-load
                     :src="activity.img" />
        </div>
        <div v-else
             slot="img"
             class="img"
             style="background-image:url('~assets/imgs/zhanwei.png')">
          <div>
            <img src="~assets/imgs/zhanwei.png"
                 alt=""
                 width="200px"
                 height="100px"
                 srcset="">
          </div>

        </div>
        <b slot="name">{{activity.name}}</b>
        <p slot="intro">
          <span>{{activity.time}}</span>
          <span>{{activity.place}}</span>
        </p>
      </Card5>
    </router-link>
    <pageselect :nowPage="nowPage"
                :allPage="allPage"
                @changenowpage="changenowpage" />
  </div>
</template>
<script>
import { panfuan } from "assets/js/all"
import {
  get_village_actions
} from "network/request"
import ulandlis from "components/commen/ulnavigations/ulandlis"
import pageselect from "components/commen/pageSelect/pageselect"
import nullpng from "components/content/nullpng"
import Card5 from "components/commen/Cards/Card5"
export default {
  name: "vaactivity",
  data () {
    return {
      isnull: false,
      nowPage: 1,
      allPage: 1,
      activities: [],
    }
  },
  components: {
    ulandlis,
    pageselect,
    nullpng,
    Card5
  },
  created () {
    get_village_actions(this.$store.state.vid, 8, this.nowPage)
      .then(res => {
        console.log(res);
        if (res.count === 0) {
          this.isnull = true
          this.activities.splice(0, this.activities.length)
        } else {
          this.allPage = res.pageCount
          this.activities = res.data.map(metting => {
            let theimg = null;
            if (metting.relatedDocuments != null && metting.relatedDocuments.length >= 1) {
              theimg = metting.relatedDocuments[0].url
            }
            return {
              id: metting.id,
              name: metting.name,
              img: theimg,
              time: metting.time,
              place: metting.location,
              content: metting.content
            }

          })
        }
      }, err => {
        this.isnull = true
        this.activities.splice(0, this.activities.length)
        this.$toast.fail("加载失败！")
      })
  },
  methods: {
    changenowpage (page) {
      this.nowPage = Number(page)
      get_village_actions(this.$store.state.vid, this.nowPage)
        .then(res => {
          if (res.count === 0) {
            this.isnull = true
            this.activities.splice(0, this.activities.length)
          } else {
            this.allPage = res.pageCount
            this.activities = res.data.map(metting => {
              let theimg = null;
              if (metting.relatedDocuments != null && metting.relatedDocuments.length >= 1) {
                theimg = metting.relatedDocuments[0].url
              }
              return {
                id: metting.id,
                name: metting.name,
                img: theimg,
                time: metting.time,
                place: metting.location,
                content: metting.content
              }

            })
          }
        }, err => {
          this.isnull = true
          this.activities.splice(0, this.activities.length)
          this.$toast.fail("加载失败！")
        })
    },
  },
  mounted () {
    // this.$loading.hide()
  },
}
</script>
<style scoped>
.container {
  padding: 0px 10px;
}
.iconfont {
  color: #bbbbbb;
  font-size: 1.4rem;
}

a {
  color: #bbbbbb;
}
a:visited,
a:hover {
  color: #cf2e28c4;
}
</style>