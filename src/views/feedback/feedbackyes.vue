<template>
  <div>
    <selectSearch :stitle="stitle"
                  :options="years"
                  :selected="nowYear"
                  @selectchange="selectchange"></selectSearch>
    <nullpng v-show="isnull" />
    <ulandlis v-for="(feedback,index) in feedbacks"
              :key="index">
      <!-- <van-button slot="liicon"
                  type="danger"
                  size="small"
                  @click.stop="deletethis(feedback.id)">删除</van-button> -->
      <!-- <button>删除</button> -->
      <span slot="liintro">
        <router-link :to="{path: '/fddetailsyes',query:{id:feedback.id,type:feedback.type}}"
                     tag="div">{{feedback.name}} </router-link>
      </span>
      <router-link slot="lidetails"
                   :to="{path: '/fddetailsyes',query:{id:feedback.id,type:feedback.type}}"
                   tag="div">
        <van-button type="info"
                    size="small">详情</van-button>
      </router-link>

      <!-- <a slot="lidetails"
         class="iconfont icon-you"
         style="font-size:1.4rem"></a> -->
    </ulandlis>
    <pageselect :nowPage="nowPage"
                :allPage="allPage"
                @changenowpage="changenowpage" />
  </div>
</template>
<script>
import { get_feedbacks, delete_feedback } from "network/request"
import ulandlis from "components/commen/ulnavigations/ulandlis3"
import pageselect from "components/commen/pageSelect/pageselect"
import nullpng from "components/content/nullpng"
import selectSearch from "components/commen/inputsearch/selectsearch"
export default {
  name: "feedbackyes",
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
      uid: "",
      pageSize: 10
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
      // if (confirm("确认删除该意见建议吗？") == true) {
      //   post_delete_fk_byID(fkid).then(res => {
      //     console.log(res);
      //     getfklist(this);
      //     this.$mytoast.toast(res.status)
      //   })
      // }
      this.$dialog.confirm({
        title: '编辑资料',
        message: '确认修改吗？',
      })
        .then(() => {
          return delete_feedback(Number(fkid))
        })
        .then(res => {
          console.log(res);
          getfklist(this);
        })
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

    // get_feedbacks(this.uid, false, this.pageSize, this.nowPage).then(res => {
    //   console.log(res);
    // })
  },
}
function getfklist (vm) {
  get_feedbacks(vm.uid, true, vm.nowYear, vm.pageSize, vm.nowPage)
    .then(res => {
      console.log(res);
      if (res.count === 0) {
        vm.isnull = true
        vm.feedbacks.splice(0, vm.feedbacks.length)
      } else {
        vm.isnull = false
        vm.allPage = res.pageCount
        vm.feedbacks = res.data.map(fd => {
          return {
            id: fd.id,
            name: fd.title,
            // type: fd.backtype.bType
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