<template>
  <div @click.stop="hidenobjbar">
    <inputsearch @searchbyname="searchbyname"
                 :inputtype="inputtype"></inputsearch>
    <nullpng v-show="isnull"></nullpng>
    <div v-for="(subsidyobj,index) in subsidyObjs"
         :key="index"
         @click.stop="showobjbar(index)">
      <ulandlis>
        <span slot="liicon"
              class="iconfont icon-love"></span>
        <span slot="liintro">{{subsidyobj.name}}</span>
        <a slot="lidetails"
           class="iconfont icon-icon_huabanfuben"
           @click.stop="showobjbar(index)"></a>
      </ulandlis>
    </div>
    <helpobjcard v-show="isshowobjbar">
      <div slot="intro">
        <p>姓名：{{subsidyObj.name}}</p>
        <p>家庭情况：{{subsidyObj.family}}</p>
        <p>补助类型：{{subsidyObj.sname}}</p>
        <p>补助详情：{{subsidyObj.detail}}</p>
      </div>
    </helpobjcard>
    <pageselect :nowPage="nowPage"
                :allPage="allPage"
                @changenowpage="changenowpage"
                @searchbyname="searchbyname"></pageselect>
  </div>
</template>
<script>
import {
  request,
  get_buzhuhu_by_vid,
  get_buzhuhu_by_vidAndName
} from "network/request"

function getlist (vid, keyword, page) {
  if (keyword == "" || keyword == null) {
    return get_buzhuhu_by_vid(vid, page)
  } else {
    return get_buzhuhu_by_vidAndName(vid, keyword, page)
  }
}

import ulandlis from "components/commen/ulnavigations/ulandlis"
import helpobjcard from "components/content/vhelpcard/helpobjcard"
import nullpng from "components/content/nullpng"
import pageselect from "components/commen/pageSelect/pageselect"
import inputsearch from "components/commen/inputsearch/inputsearch"
export default {
  name: "vhelphu",
  data () {
    return {
      nowPage: 1,
      allPage: 1,
      subsidyObjs: [],
      subsidyObj: {
        name: "",
        sex: "",
        sname: "",
        reason: "",
      },
      inputtype: "text",
      isnull: false,
      isshowobjbar: false,
      keyword: ""
    }
  },
  components: {
    ulandlis,
    helpobjcard,
    nullpng,
    pageselect,
    inputsearch
  },
  created () {
    getlist(this.$store.state.vid, this.keyword, this.nowPage)
      .then(res => {
        console.log(res);
        handle(this, res)
      }, err => {
        this.isnull = true
        this.subsidyObjs.splice(0, this.subsidyObjs.length)
        this.$mytoast.toast("加载失败！", 2000)
      })
  },
  methods: {
    showobjbar (index) {
      this.subsidyObj = this.subsidyObjs[index]
      this.isshowobjbar = true
    },
    hidenobjbar () {
      this.isshowobjbar = false
    },
    changenowpage (page) {
      this.nowPage = Number(page)
      getlist(this.$store.state.vid, this.keyword, this.nowPage)
        .then(res => {
          handle(this, res)
        }, err => {
          this.isnull = true
          this.subsidyObjs.splice(0, this.subsidyObjs.length)
          this.$mytoast.toast("加载失败！", 2000)
        })
    },
    searchbyname (keyword) {
      this.nowPage = 1;
      this.keyword = keyword;
      getlist(this.$store.state.vid, keyword, this.nowPage)
        .then(res => {
          handle(this, res)
        }, err => {
          this.isnull = true
          this.subsidyObjs.splice(0, this.subsidyObjs.length)
          this.$mytoast.toast("加载失败！", 2000)
        })
    }
  },
  mounted () {
    this.$loading.hide()
  },
}
function handle (vm, res) {
  if (res.response) {
    vm.isnull = true
  } else {
    if (res.count === 0) {
      vm.isnull = true
      vm.allPage = 1
      vm.subsidyObjs.splice(0, vm.subsidyObjs.length)
    } else {
      vm.isnull = false
      vm.allPage = res.total;
      vm.subsidyObjs = res.record.map(sf => {
        return {
          name: sf.shName,
          family: sf.shFamilyinformation === null ? "未知" : sf.shFamilyinformation,
          sname: sf.subsidyname === null ? "未知" : sf.subsidyname.sName,
          detail: sf.shBeiyong3 === null ? "未知" : sf.shBeiyong3,
        }
      })
    }
  }
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