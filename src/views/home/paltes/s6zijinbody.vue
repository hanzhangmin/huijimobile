<template>
  <div class="body">
    <div class="header">
      <Headergoback>
        <span slot="Headertitle">财务/资金</span>
      </Headergoback>
    </div>
    <div class="container">

      <!-- <inputsearch @focus="showpop"
                   @searchbyname="selectchange"
                   :inputtype="inputtype"></inputsearch> -->
      <!-- <keep-alive exclude="zijinxj,zijinyh">
        <router-view></router-view>
      </keep-alive> -->
      <selectSearch :stitle="stitle"
                    :options="years"
                    :selected="nowYear"
                    @selectchange="selectchange"></selectSearch>
      <!-- <van-field readonly
                 clickable
                 name="datetimePicker"
                 :value="nowYear"
                 label="时间选择"
                 placeholder="点击选择时间"
                 @click="showPicker = true" /> -->
      <div class="buttons">
        <button :class="isactive1"
                @click="change(1)">现金收支</button>
        <button :class="isactive2"
                @click="change(0)">银行收支</button>
      </div>
      <nullpng v-show="isnull" />
      <!-- <router-link v-for="(l,index) in lists"
                   :key="index"
                   tag="div"
                   :to="'/zijinintro/'+l.id+'/'+l.type">
        <ulandlis>
          <span slot="liicon"
                class="iconfont icon-nav_dangqundangan"></span>
          <span slot="liintro">{{l.type}}</span>
          <a slot="lidetails"
             class="iconfont icon-you"></a>
        </ulandlis>
      </router-link> -->
      <table cellpadding="0"
             border="0"
             cellspacing="5px">
        <div v-for="(item,index) in lists"
             :key="index">
          <tr>
            <td v-if="item.input>item.output"
                style="background-color:darkgreen">
              <span>{{item.cause}}</span><br>
              <span>￥{{item.input}}元</span><br>
              <!-- <span>￥{{item.output}}元</span><br> -->
            </td>
            <td v-else
                style="background-color:#CF2D28">
              <span>{{item.cause}}</span><br>
              <!-- <span>￥{{item.input}}元</span><br> -->
              <span>￥{{item.output}}元</span><br>
            </td>
            <td>
              <span> {{item.name}}</span>
              <br>
              <span> {{item.remarks}}</span>
              <br>
              <span class="time">{{item.time}}</span>
            </td>
          </tr>
        </div>
      </table>
    </div>
    <van-popup v-model="showPicker"
               position="bottom">
      <van-datetime-picker v-model="currentDate"
                           type="year-month"
                           title="选择年月"
                           :min-date="minDate"
                           :max-date="maxDate"
                           :formatter="formatter"
                           @confirm="onConfirm"
                           @cancel="showPicker = false" />
    </van-popup>
  </div>
</template>
<script>
import {
  get_funds
} from 'network/request'
import Headergoback from "components/commen/Header/Headergoback"
import zijinrouterbar from "components/content/vrouterbar/zijinrouterbar"
import ulandlis from "components/commen/ulnavigations/ulandlis"
import nullpng from "components/content/nullpng"
import selectSearch from "components/commen/inputsearch/selectsearch"
import inputsearch from "components/commen/inputsearch/inputsearch"
export default {
  name: "zijinbody",
  components: {
    Headergoback,
    zijinrouterbar,
    ulandlis,
    nullpng,
    selectSearch,
    inputsearch
  },
  data () {
    return {
      isnull: false,
      lists: [],
      stitle: "年份：",
      nowYear: "",
      type: 1,
      isactive1: "active",
      isactive2: "",
      pageSize: 10000,
      // value: '',
      showPicker: false,
      minDate: new Date(2012, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(),
      // minDate: new Date(2020, 0, 1),
      // maxDate: new Date(2025, 10, 1),
      // currentDate: new Date(),
      // inputtype: "text",
      // showpop: true
    }
  },
  computed: {
    years () {
      let kks = [];
      for (let i = (new Date).getFullYear(); i > 2011; i--) {
        kks.push({ id: i, name: i })
      }
      return kks
    },
    zid () {
      return this.$route.params.zid
    }
  },
  created () {
    // this.nowYear = (new Date()).getFullYear() + "-" + ((new Date()).getMonth())
    this.nowYear = (new Date()).getFullYear()
    // this.getdata()
  },
  methods: {
    onConfirm (time) {
      this.nowYear = (new Date(time)).getFullYear() + "-" + ((new Date(time)).getMonth() + 1)
      this.nowYear = (new Date(time)).getFullYear()
      // this.nowYear = time;
      this.showPicker = false;
    },
    formatter (type, val) {
      if (type === 'year') {
        return `${val}年`;
      } else if (type === 'month') {
        return `${val}月`;
      }
      return val;
    },
    change (val) {
      if (Number(val) === 1) {
        this.type = 1
        this.isactive1 = "active"
        this.isactive2 = ""
      } else {
        this.type = 0
        this.isactive1 = ""
        this.isactive2 = "active"
      }
    },
    getdata () {
      get_funds(this.zid, this.type, this.nowYear, this.pageSize, 1)
        .then(res => {
          console.log(res);
          if (res.count === 0) {
            this.isnull = true
            this.lists.splice(0, this.lists.length)
          } else {
            this.isnull = false
            this.allPage = res.total
            this.lists = res.data.map(hd => {
              return {
                cause: hd.cause,
                name: hd.name,
                input: parseFloat(hd.input),
                output: parseFloat(hd.output),
                remarks: hd.remarks,
                time: hd.time,
              }
            })
          }
        }, err => {
          this.isnull = true
          this.lists.splice(0, this.lists.length)
          this.$toast.fail("加载失败！")
        })
    },
    selectchange (val) {
      this.nowYear = val
      this.getdata()
    }
  },
  watch: {
    type (val) {
      this.type = Number(val)
      this.getdata()
    },
    nowYear (val) {
      this.nowYear = val
      this.getdata()
    }
  },
}
</script>
<style scoped>
.body {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f6f6f6;
}
.container {
  margin: 6vh 0px;
  overflow-y: scroll;
}
.buttons {
  width: 100%;
  text-align: center;
  margin-top: 4px;
}
button {
  border: none;
  background-color: #efefef;
  padding: 5px 1rem;
  margin: 0px 2rem;
  letter-spacing: 4px;
  border-radius: 5px;
  font-size: 0.8rem;
  transition: all 0.3s linear;
}
.active {
  background: #cf2d28;
  color: #ffffff;
}
.jieyu {
  text-align: right;
  color: darkgreen;
  padding: 0px 10px;
}
table {
  vertical-align: middle;
  width: 100%;
  padding: 0px 10px;
}
table td {
  padding: 4px;
  display: table-cell;
  vertical-align: middle;
}
table td:first-child {
  min-width: 40vw;
  /* text-align: center; */
  color: white;
  border-radius: 5px;
}
table div {
  background: white;
  border-radius: 5px;
  margin: 5px 0px;
}
.time {
  color: #888;
}
</style>