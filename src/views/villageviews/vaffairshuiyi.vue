<template>
  <div class="container">
    <nullpng v-show="isnull" />
    <router-link tag="div"
                 v-for="(meeting,index) in meetings"
                 :key="index"
                 :to="{path:'/vadetails',query:{type:1,id:meeting.id}}">
      <Card5>
        <!-- <div class="img"
             slot="img"
             v-if="meeting.img!=null"
             :style="{'background-image': 'url('+meeting.img+')'}"></div> -->
        <div class="img"
             slot="img"
             v-if="meeting.img!=null">
          <van-image width="100"
                     height="100"
                     lazy-load
                     :src="meeting.img" />
        </div>
        <div slot="img"
             v-else>
          <img src="~assets/imgs/zhanwei.png"
               alt="图片未上传"
               srcset="">
        </div>
        <b slot="name">{{meeting.name}}</b>
        <!-- <p slot="intro">{{meeting.intro}}</p> -->
        <p slot="intro">
          <span>{{meeting.time}}</span>
          <span>{{meeting.place}}</span>
        </p>
      </Card5>
    </router-link>
    <pageselect :nowPage="nowPage"
                :allPage="allPage"
                @changenowpage="changenowpage" />
  </div>
</template>
<script>
// :href="'/huiyi/'+meeting.id"
import {
  get_village_meetings
} from "network/request"
import ulandlis from "components/commen/ulnavigations/ulandlis"
import pageselect from "components/commen/pageSelect/pageselect"
import nullpng from "components/content/nullpng"
import Card5 from "components/commen/Cards/Card5"
export default {
  name: "vahuiyi",
  data () {
    return {
      isnull: false,
      nowPage: 1,
      allPage: 1,
      meetings: [],
    }
  },
  components: {
    ulandlis,
    pageselect,
    nullpng,
    Card5
  },
  created () {
    get_village_meetings(this.$store.state.vid, 8, this.nowPage, "id,title,content,time,relatedDocuments,location")
      .then(res => {
        if (res.count === 0) {
          this.isnull = true
        } else {
          this.allPage = res.pageCount;
          this.meetings = res.data.map(metting => {
            let theimg = null;
            if (metting.relatedDocuments != null && metting.relatedDocuments.length >= 1) {
              theimg = metting.relatedDocuments[0].url
            }
            return {
              id: metting.id,
              name: metting.title,
              img: theimg,
              time: metting.time,
              place: metting.location,
              content: metting.content
            }

          })
        }
      }, err => {
        this.isnull = true
        this.meetings.splice(0, this.meetings.length)
        this.$toast.fali("加载失败！")
      })
  },
  methods: {
    changenowpage (page) {
      this.nowPage = Number(page)
      get_village_meetings(this.$store.state.vid, 8, this.nowPage, "id,title,content,time,relatedDocuments,location")
        .then(res => {
          if (res.count === 0) {
            this.isnull = true
            this.meetings.splice(0, this.meetings.length)
          } else {
            this.isnull = false
            this.meetings = res.data.map(metting => {
              let theimg = null;
              if (metting.relatedDocuments != null && metting.relatedDocuments.length >= 1) {
                theimg = metting.relatedDocuments[0].url
              }
              return {
                id: metting.id,
                name: metting.title,
                img: theimg,
                time: metting.time,
                place: metting.location,
                content: metting.content
              }


            })
          }
        }, err => {
          this.isnull = true
          this.meetings.splice(0, this.meetings.length)
          this.$toast.fali("加载失败！")
        })
    },
  },
}
</script>
<style scoped>
.container {
  padding: 0px 10px;
}
.iconfont {
  color: #bbbbbb;
  font-size: 1.6rem;
}
</style>