<template>
  <div @click="hidenxiangbar">
    <selectSearch :stitle="stitle"
                  :options="subsidytypes"
                  :selected="nowtypeid"
                  @selectchange="selectchange"></selectSearch>
    <nullpng v-show="isnull"></nullpng>
    <div v-for="(subsidy,index) in subsidys"
         :key="index"
         @click.stop="showxiangbar(index)">
      <ulandlis>
        <span slot="liicon"
              class="iconfont icon-love"></span>
        <span slot="liintro">{{subsidy.name}}</span>
        <a slot="lidetails"
           class="iconfont icon-icon_huabanfuben"></a>
      </ulandlis>
    </div>
    <helpxiangcard v-show="isshowxiangbar">
      <div slot="intro">
        <p>补助项：{{subsidy.name}}</p>
        <p>补助类型：{{subsidy.type}}</p>
        <p>详情：{{subsidy.details}}</p>
      </div>
    </helpxiangcard>
  </div>
</template>
<script>

import {
  request,
  get_subsidy_type,
  get_subsidy_by_typeid
} from "network/request"
import ulandlis from "components/commen/ulnavigations/ulandlis"
import helpxiangcard from "components/content/vhelpcard/helpxiangcard"
import nullpng from "components/content/nullpng"
import selectSearch from "components/commen/inputsearch/selectsearch"
export default {
  name: "vhelpxiang",
  data () {
    return {
      subsidytypes: [],
      nowtypeid: 0,
      subsidys: [],
      subsidy: {
        name: '',
        type: '',
        details: ''
      },
      isshowxiangbar: false,
      isnull: false,
      stitle: "类别："
    }
  },
  components: {
    ulandlis,
    helpxiangcard,
    nullpng,
    selectSearch
  },
  created () {
    get_subsidy_type(this.$store.state.vid)
      .then(res => {
        this.subsidytypes = res.type.map(type => {
          return {
            name: type.stName,
            id: type.subsidytypeId
          }
        })
        this.nowtypeid = this.subsidytypes[0].id
        return get_subsidy_by_typeid(this.nowtypeid)
      }, err => {
        this.isnull = true
        this.subsidys.splice(0, this.subsidys.length)
        this.$mytoast.toast("加载失败！", 2000)
      }).then(res => {
        console.log(res);
        if (res.count != 0) {
          this.subsidys = res.record.map(subsidy => {
            return {
              name: subsidy.sName,
              type: subsidy.subsidytype.stName,
              details: subsidy.subsidyinformation == null ? "--" : subsidy.subsidyinformation == null
            }
          })
        } else {
          this.isnull = true
        }
      }, err => {
        this.isnull = true
        this.subsidys.splice(0, this.subsidys.length)
        this.$mytoast.toast("加载失败！", 2000)
      })
  },
  methods: {
    showxiangbar (index) {
      this.subsidy = this.subsidys[index]
      this.isshowxiangbar = true
    },
    hidenxiangbar () {
      this.isshowxiangbar = false
    },
    selectchange (val) {
      console.log(val);
      this.nowtypeid = Number(val);
      get_subsidy_by_typeid(this.nowtypeid)
        .then(res => {
          if (res.count != 0) {
            this.isnull = false
            this.subsidys = res.record.map(subsidy => {
              return {
                name: subsidy.sName,
                type: subsidy.subsidytype.stName,
                details: subsidy.subsidyinformation == null ? "--" : subsidy.subsidyinformation == null
              }
            })
          } else {
            this.isnull = true
            this.subsidys.splice(0, this.subsidys.length)
          }
        })
    }
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