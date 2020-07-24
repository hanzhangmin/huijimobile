<template>
  <div @click.stop="hidenobjbar">
    <inputsearch @searchbyname="searchbyname"
                 :inputtype="inputtype"></inputsearch>
    <nullpng v-show="isnull"></nullpng>
    <div v-for="(subsidyobj,index) in subsidyObjs"
         :key="index"
         style="margin-top:5px"
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
        <p>补助原因：{{subsidyObj.cause}}</p>
        <p>补助金额：{{subsidyObj.count}}</p>
        <p>补助物品：{{subsidyObj.items}}</p>
        <p>补助申请时间：{{subsidyObj.applicationTime}}</p>
        <p>补助类型：{{subsidyObj.type}}</p>
        <p>备注：{{subsidyObj.remarks}}</p>
      </div>
    </helpobjcard>
    <pageselect :nowPage="nowPage"
                :allPage="allPage"
                @changenowpage="changenowpage"
                @searchbyname="searchbyname"></pageselect>
  </div>
</template>
<script>
import { panfuan } from "assets/js/all"
import {
  get_subsidy_infos
} from "network/request"

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
    // vid, personal, pageSize, page, keyword, fields
    get_subsidy_infos(this.$store.state.vid, false, 8, this.nowPage, this.keyword)
      .then(res => {
        console.log(res);
        handle(this, res)
      }, err => {
        this.isnull = true
        this.subsidyObjs.splice(0, this.subsidyObjs.length)
        this.$toast.fail("加载失败！")
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
      get_subsidy_infos(this.$store.state.vid, false, 8, this.nowPage, this.keyword)
        .then(res => {
          console.log(res);
          handle(this, res)
        }, err => {
          this.isnull = true
          this.subsidyObjs.splice(0, this.subsidyObjs.length)
          this.$toast.fail("加载失败！")
        })
    },
    searchbyname (keyword) {
      this.nowPage = 1;
      this.keyword = keyword;
      get_subsidy_infos(this.$store.state.vid, false, 8, this.nowPage, this.keyword)
        .then(res => {
          console.log(res);
          handle(this, res)
        }, err => {
          this.isnull = true
          this.subsidyObjs.splice(0, this.subsidyObjs.length)
          this.$toast.fail("加载失败！")
        })
    }
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
      vm.allPage = res.pageCount;
      vm.subsidyObjs = res.data.map(sf => {
        return {
          name: panfuan(sf.name),
          cause: panfuan(sf.cause),
          remarks: panfuan(sf.remarks),
          applicationTime: panfuan(sf.applicationTime),
          type: panfuan(sf.subsidy.name),
          count: panfuan(sf.subsidy.amount),
          items: panfuan(sf.subsidy.items),
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