<template>
  <div>
    <nullpng v-show="isnull" />
    <router-link v-for="(activity,index) in activities"
                 :key="index"
                 tag="div"
                 :to="{path:'/vadetails',query:{type:2,id:activity.id}}">
      <ulandlis>
        <span slot="liicon"
              class="iconfont icon-guanli"></span>
        <span slot="liintro">{{activity.title}}</span>
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
import {
  get_activity_by_vid
} from "network/request"
import ulandlis from "components/commen/ulnavigations/ulandlis"
import pageselect from "components/commen/pageSelect/pageselect"
import nullpng from "components/content/nullpng"
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
    nullpng
  },
  created () {
    get_activity_by_vid(this.$store.state.vid, this.nowPage)
      .then(res => {
        if (res.count === 0) {
          this.isnull = true
        } else {
          this.allPage = res.total
          this.activities = res.data.map(activity => {
            return {
              id: activity.cdyzzhdId,
              time: activity.cdyzzhdTime,
              title: activity.cdyzzhdName,
              type: activity.cunhuodongleixing === null ? "未知" : activity.cunhuodongleixing.chdlxName
            }
          })
        }
      }, err => {
        this.isnull = true
        // this.stufiles.splice(0, this.stufiles.length)
        this.$mytoast.toast("加载失败！", 2000)
      })
  },
  methods: {
    changenowpage (page) {
      this.nowPage = Number(page)
      get_activity_by_vid(this.$store.state.vid, this.nowPage)
        .then(res => {
          if (res.count === 0) {
            this.isnull = true
            this.activities.splice(0, this.activities.length)
          } else {
            this.isnull = false
            this.allPage = res.total
            this.activities = res.data.map(activity => {
              return {
                id: activity.cdyzzhdId,
                time: activity.cdyzzhdTime,
                title: activity.cdyzzhdName,
                type: activity.cunhuodongleixing === null ? "未知" : activity.cunhuodongleixing.chdlxName
              }
            })
          }
        }, err => {
          this.isnull = true
          this.activities.splice(0, this.activities.length)
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
  color: #bbbbbb;
}
a:visited,
a:hover {
  color: #cf2e28c4;
}
</style>