<template>
  <div>
    <nullpng v-show="isnull" />
    <!-- 
      type
       1:huiyi
       2:huodong
       3:qianru
       4:qianchu
     -->
    <router-link tag="div"
                 v-for="(meeting,index) in meetings"
                 :key="index"
                 :to="{path:'/vadetails',query:{type:1,id:meeting.id}}">
      <ulandlis>
        <span slot="liicon"
              class="iconfont icon-guanli"></span>
        <span slot="liintro">{{meeting.title}}</span>
        <a slot="lidetails"
           class="iconfont icon-you"></a>
      </ulandlis>
    </router-link>
    <pageselect :nowPage="nowPage"
                :allPage="allPage"
                @changenowpage="changenowpage" />
  </div>
</template>
<script>
// :href="'/huiyi/'+meeting.id"
import {
  request,
  get_huiyi_by_vid
} from "network/request"
import ulandlis from "components/commen/ulnavigations/ulandlis"
import pageselect from "components/commen/pageSelect/pageselect"
import nullpng from "components/content/nullpng"
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
    nullpng
  },
  created () {
    get_huiyi_by_vid(this.$store.state.vid, this.nowPage).then(res => {
      if (res.count === 0) {
        this.isnull = true
      } else {
        this.allPage = res.total;
        this.meetings = res.record.map(meeting => {
          return {
            id: meeting.villageaffairId,
            title: meeting.vaTitle
          }
        })
      }
    }, err => {
      this.isnull = true
      this.meetings.splice(0, this.meetings.length)
      this.$mytoast.toast("加载失败！", 2000)
    })
  },
  methods: {
    changenowpage (page) {
      this.nowPage = Number(page)
      get_huiyi_by_vid(this.$store.state.vid, page)
        .then(res => {
          if (res.count === 0) {
            this.isnull = true
            this.meetings.splice(0, this.meetings.length)
          } else {
            this.isnull = false
            this.allPage = res.total;
            this.meetings = res.record.map(meeting => {
              return {
                id: meeting.villageaffairId,
                title: meeting.vaTitle
              }
            })
          }
        }, err => {
          this.isnull = true
          this.meetings.splice(0, this.meetings.length)
          this.$mytoast.toast("加载失败！", 2000)
        })
    },
  },
  mounted () {
    this.$loading.hide()
  },
}
</script>
<style scoped>
.iconfont {
  color: #bbbbbb;
  font-size: 1.6rem;
}
a {
  appearance: none;
  color: #bbbbbb;
}
a:visited,
a:hover {
  color: #cf2e28c4;
}
</style>