<template>
  <div @click.stop="hidenxiangbar">
    <!-- <selectSearch :stitle="stitle"
                  :options="years"
                  :selected="nowYear"
                  @selectchange="selectchange"></selectSearch> -->
    <div class="dyselect">
      <div class="selecttitle">类别：</div>
      <div class="selectbox">
        <select v-model="type">
          <option value="5">正式党员</option>
          <option value="4">预备党员</option>
          <option value="3">发展对象</option>
          <option value="2">积极分子</option>
        </select>
      </div>
    </div>

    <nullpng v-show="isnull" />
    <div v-for="(jijifenzi,index) in jijifenzis"
         :key="index"
         @click.stop="showxiangbar(index)">
      <ulandlis>
        <span slot="liicon"
              class="iconfont icon-nav_dangqundangan"
              style="color:#cf2d28"></span>
        <span slot="liintro">{{jijifenzi.name}}</span>
        <a slot="lidetails"
           class="iconfont icon-icon_huabanfuben"
           style="font-size:1.4rem"
           @click.stop="showxiangbar(index)"></a>
      </ulandlis>
    </div>

    <dycard v-show="isshowxiangbar">
      <div slot="intro">
        <div class="imagebox">
          照片：
          <!-- <div slot="img"
               class="img iconfont icon-ganbujiaoliu"
               v-if="manager.mphoto==null"
               :style="{'background-image': 'url('+manager.mphoto+')'}">
          </div> -->
          <span v-if="jijifenzi.image===null"
                class="iconfont icon-ganbujiaoliu"></span>
          <van-image v-else
                     width="200"
                     height="100"
                     lazy-load
                     :src="jijifenzi.image" />
        </div>
        <p>姓名：{{jijifenzi.name}}</p>
        <p>性别：{{jijifenzi.sex}}</p>
        <p>籍贯：{{jijifenzi.address}}</p>
        <p>联系方式：{{jijifenzi.phone}}</p>
        <p>职位：{{jijifenzi.duties}}</p>
        <p>工作单位：{{jijifenzi.lnauguralAddress}}</p>
        <p>成为积极分子时间：{{jijifenzi.time1}}</p>
        <p>成为发展对象时间：{{jijifenzi.time2}}</p>
        <p>成为预备党员时间：{{jijifenzi.time3}}</p>
        <p>转正时间：{{jijifenzi.time4}}</p>
      </div>
    </dycard>
    <pageselect :nowPage="nowPage"
                :allPage="allPage"
                @changenowpage="changenowpage" />

  </div>
</template>
<script>
import { panfuan } from "assets/js/all"
import { get_party_members } from "network/request"
import ulandlis from "components/commen/ulnavigations/ulandlis"
import pageselect from "components/commen/pageSelect/pageselect"
import nullpng from "components/content/nullpng"
import selectSearch from "components/commen/inputsearch/selectsearch"
import dycard from 'components/content/vmanagercard/dycard'
export default {
  name: "s2",
  // computed: {
  //   years () {
  //     let kks = [];
  //     kks.push({ id: 0, name: "近年来" })
  //     for (let i = (new Date).getFullYear(); i > 2013; i--) {
  //       kks.push({ id: i, name: i + "年" })
  //     }
  //     kks.push({ id: 2013, name: "2013年及以前" })
  //     return kks
  //   },
  // },
  data () {
    return {
      nowPage: 1,
      allPage: 1,
      isnull: false,
      jijifenzis: [],
      jijifenzi: {
        name: '',
        sex: '',
        address: '',
        entity: '',
        time1: '',
        time2: '',
        time3: '',
        time4: '',
        duties: "",
        phone: "",
        lnauguralAddress: "",
      },
      type: 5,
      isshowxiangbar: false
    }
  },
  components: {
    ulandlis,
    pageselect,
    nullpng,
    selectSearch,
    dycard
  },
  methods: {
    getpartymembers () {
      get_party_members(this.$store.state.vid, this.type, 12, this.nowPage)
        .then(res => {
          if (res.count === 0 || res.status === "null") {
            this.isnull = true
            this.allPage = 1
            this.jijifenzis.splice(0, this.jijifenzis.length)
          } else {
            this.isnull = false
            this.allPage = res.pageCount
            this.jijifenzis = res.data.map(jj => {
              let theimg = null;
              try {
                if (jj.image.length != 0) {
                  theimg = jj.image[0].url
                }
              } catch (error) {

              }
              return {
                name: panfuan(jj.name),
                sex: jj.sex === 0 ? "男" : "女",
                address: panfuan(jj.address),
                entity: panfuan(jj.zzfzEntity),
                time1: panfuan(jj.periodOfActivists),
                time2: panfuan(jj.periodOfDevelopmentObject),
                time3: panfuan(jj.periodOfProbationaryMember),
                time4: panfuan(jj.periodOfPartyMember),
                duties: panfuan(jj.duties),
                phone: panfuan(jj.phone),
                image: theimg,
                lnauguralAddress: panfuan(jj.lnauguralAddress),
              }
            })
          }
        })

    },
    changenowpage (page) {
      this.nowPage = Number(page);
      this.getpartymembers()
    },
    showxiangbar (index) {
      this.jijifenzi = this.jijifenzis[index]
      this.isshowxiangbar = true
    },
    hidenxiangbar () {
      this.isshowxiangbar = false
    }
  },
  created () {
    //  this.type, 0
    this.getpartymembers()
  },
  watch: {
    type (val) {
      this.nowPage = 1;
      this.allPage = 1;
      this.getpartymembers()
    }
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
.dyselect {
  margin: 10px;
  background-color: #ffffff;
  overflow: hidden;
  display: flex;
  height: 2rem;
  line-height: 2rem;
}
.dyselect .selecttitle {
  display: inline-block;
  padding-left: 10px;
  letter-spacing: 2px;
}
.dyselect .selectbox {
  flex: auto;
}
select {
  width: 100%;
  height: 2rem;
  border: none;
  font-size: 1rem;
  padding-left: 1rem;
  letter-spacing: 2px;
  outline: none;
  background-color: #ffffff;
}
.dyimg {
  width: 200px;
  height: auto;
}
.imagebox {
  margin: 20px 0px;
}
.icon-ganbujiaoliu {
  padding: 20px;
  background-color: #efefef;
  color: #555555;
  font-size: 40px;
}
</style>