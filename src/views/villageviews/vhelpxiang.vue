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
        <p>补助金额：{{subsidy.amount}}人民币</p>
        <p>补助物品：{{subsidy.items}}</p>
        <p>补助标椎：{{subsidy.standards}}</p>
        <p>申请时间：{{subsidy.applicationTime}}</p>
        <p>领取时间：{{subsidy.pickUpTime}}</p>
        <p>实施政策：{{subsidy.implementationPolicy}}</p>
        <p>相关国家政策：{{subsidy.nationalPolicy}}</p>

      </div>
    </helpxiangcard>
  </div>
</template>
<script>
import { panfuan } from "assets/js/all"
import {
  get_subsidy_types,
  get_subsidys
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
    get_subsidy_types(this.$store.state.vid)
      .then(res => {
        console.log(res);
        this.subsidytypes = res.map(type => {
          return {
            name: type.name,
            id: type.id
          }
        })
        this.nowtypeid = this.subsidytypes[0].id
        // return get_subsidys(this.$store.state.vid, this.nowtypeid, 1000, 1)
      }, err => {
        this.isnull = true
        this.subsidys.splice(0, this.subsidys.length)
        this.$toast.fail("加载失败！")
      })
    // .then(res => {
    //   console.log(res);
    //   if (res.count != 0) {
    //     this.subsidys = res.record.map(subsidy => {
    //       return {
    //         name: panfuan(subsidy.name),
    //         amount: panfuan(subsidy.amount),
    //         items: panfuan(subsidy.items),
    //         standards: panfuan(subsidy.standards),
    //         applicationTime: panfuan(subsidy.applicationTime),
    //         pickUpTime: panfuan(subsidy.pickUpTime),
    //         nationalPolicy: panfuan(subsidy.nationalPolicy),
    //         implementationPolicy: panfuan(subsidy.implementationPolicy),
    //       }
    //     })
    //   } else {
    //     this.isnull = true
    //     this.subsidys.splice(0, this.subsidys.length)
    //     this.$toast.fail("加载失败！")
    //   }
    // })
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
      get_subsidys(this.$store.state.vid, this.nowtypeid, 1000, 1)
        .then(res => {
          console.log(res);
          if (res.count != 0) {
            this.isnull = false
            this.subsidys = res.data.map(subsidy => {
              return {
                name: panfuan(subsidy.name),
                amount: panfuan(subsidy.amount),
                items: panfuan(subsidy.items),
                standards: panfuan(subsidy.standards),
                applicationTime: panfuan(subsidy.applicationTime),
                pickUpTime: panfuan(subsidy.pickUpTime),
                nationalPolicy: panfuan(subsidy.nationalPolicy),
                implementationPolicy: panfuan(subsidy.implementationPolicy),
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