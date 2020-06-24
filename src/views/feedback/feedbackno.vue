<template>
  <div>
    <selectSearch :stitle="stitle"
                  :options="years"
                  :selected="nowYear"
                  @selectchange="selectchange"></selectSearch>
    <nullpng v-show="isnull" />
    <ulandlis v-for="(feedback,index) in feedbacks"
              :key="index">
      <span slot="liicon"
            class="iconfont icon-del"
            @click.stop="deletethis(feedback.id)"></span>
      <span slot="liintro">
        <router-link :to="{path: '/fddetailsyes',query:{id:feedback.id,type:feedback.type}}"
                     tag="div">{{feedback.name}} </router-link>
      </span>
      <a slot="lidetails"
         class="iconfont icon-you"
         style="font-size:1.4rem"></a>
    </ulandlis>
    <pageselect :nowPage="nowPage"
                :allPage="allPage"
                @changenowpage="changenowpage" />
  </div>
</template>
<script>
import { get_wclfd_list_byid, post_delete_fk_byID } from "network/request"
import ulandlis from "components/commen/ulnavigations/ulandlis1"
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
      uid: ""
    }
  },
  components: {
    ulandlis,
    pageselect,
    nullpng,
    selectSearch,
  },
  methods: {
    deletethis (fkid) {
      if (confirm("确认删除该意见建议吗？") == true) {
        post_delete_fk_byID(fkid).then(res => {
          console.log(res);
          getfklist(this);
          this.$mytoast.toast(res.status)
        })
      }
    },
    changenowpage (page) {
      this.nowPage = Number(page)
      getfklist(this)
    },
    selectchange (val) {
      this.nowYear = Number(val)
      getfklist(this)
    }
  },
  created () {
    // vid, page, type, year
    this.uid = this.$store.state.userid;
    this.nowYear = (new Date()).getFullYear()
    getfklist(this)
  },
}

function getfklist (vm) {
  get_wclfd_list_byid(vm.uid, vm.nowYear, vm.nowPage)
    .then(res => {
      if (res.count === 0) {
        vm.isnull = true
        vm.feedbacks.splice(0, vm.feedbacks.length)
      } else {
        vm.isnull = false
        vm.feedbacks = res.record.map(fd => {
          return {
            id: fd.feedbackId,
            name: fd.fTitle,
            type: fd.backtype.bType
          }
        })
      }
    })
}
</script>

<style scoped>
.icon-del {
  color: #bbbbbb;
}
</style>