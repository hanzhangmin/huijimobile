<template>
  <div>
    <selectSearch :stitle="stitle"
                  :options="years"
                  :selected="nowYear"
                  @selectchange="selectchange"></selectSearch>
    <nullpng v-show="isnull" />
    <router-link v-for="(feedback,index) in feedbacks"
                 :key="index"
                 :to="{path: '/fddetailsno',query:{id:feedback.id,type:feedback.type}}"
                 tag="div">
      <ulandlis>
        <span slot="liicon"
              class="iconfont icon-fankuixinxi"
              style="color:#cf2d28"></span>
        <span slot="liintro">{{feedback.name}}</span>
        <a slot="lidetails"
           class="iconfont icon-you"
           style="font-size:1.4rem"></a>
      </ulandlis>
    </router-link>
    <pageselect :nowPage="nowPage"
                :allPage="allPage"
                @changenowpage="changenowpage" />

  </div>
</template>
<script>
import { get_wclfd_list_byid } from "network/request"
import ulandlis from "components/commen/ulnavigations/ulandlis"
import pageselect from "components/commen/pageSelect/pageselect"
import nullpng from "components/content/nullpng"
import selectSearch from "components/commen/inputsearch/selectsearch"
export default {
  name: "feedbackno",
  computed: {
    years () {
      let kks = [];
      for (let i = (new Date).getFullYear(); i > 2018; i--) {
        kks.push({ id: i, name: i })
      }
      return kks
    },
  },
  data () {
    return {
      nowPage: 1,
      allPage: 1,
      isnull: false,
      feedbacks: [],
      stitle: "年份：",
      nowYear: 2020,
      uid: 1
    }
  },
  components: {
    ulandlis,
    pageselect,
    nullpng,
    selectSearch,
  },
  methods: {
    changenowpage (page) {
      this.nowPage = Number(page)
      get_wclfd_list_byid(this.uid, this.nowYear, this.nowPage)
        .then(res => {
          if (res.count === 0) {
            this.isnull = true
            this.feedbacks.splice(0, this.feedbacks.length)
          } else {
            this.isnull = false
            this.feedbacks = res.record.map(fd => {
              return {
                id: fd.feedbackId,
                name: fd.fTitle,
                type: fd.backtype.bType
              }
            })
          }
        })
    },
    selectchange (val) {
      this.nowYear = Number(val)
      get_wclfd_list_byid(this.uid, this.nowYear, this.nowPage)
        .then(res => {
          if (res.count === 0) {
            this.isnull = true
            this.feedbacks.splice(0, this.feedbacks.length)
          } else {
            this.isnull = false
            this.feedbacks = res.record.map(fd => {
              return {
                id: fd.feedbackId,
                name: fd.fTitle,
                type: fd.backtype.bType
              }
            })
          }
        })
    }
  },
  created () {
    // vid, page, type, year
    this.uid = this.$store.state.userid;
    this.nowYear = (new Date()).getFullYear()
    get_wclfd_list_byid(this.uid, this.nowYear, this.nowPage)
      .then(res => {
        console.log(res);

        if (res.count === 0) {
          this.isnull = true
        } else {
          this.feedbacks = res.record.map(fd => {
            return {
              id: fd.feedbackId,
              name: fd.fTitle,
              type: fd.backtype.bType
            }
          })
        }
      })

  },
}
</script>

<style scoped>
a {
  appearance: none;
  color: #bbbbbb;
}
a:visited,
a:hover {
  color: #cf2e28c4;
}
</style>