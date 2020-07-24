<template>
  <div class="body">
    <div class="gridbox">
      <router-link tag="div"
                   to="/vmanagers">
        <div class="item">
          <span class="iconfont icon-ganbujiaoliu"></span><br>
          干部信息
        </div>
      </router-link>
      <router-link tag="div"
                   to="/vhelp">
        <div class="item">
          <span class="iconfont icon-love"></span><br>
          补助信息
        </div>
      </router-link>
      <!-- <div class="item">项目建设信息</div> -->
      <router-link tag="div"
                   to="/vaffairs">
        <div class="item">
          <span class="iconfont icon-renyuanxinxi"></span><br>
          户口迁入(出)
        </div>
      </router-link>
      <!-- <div class="item">行政村活动</div>
      <div class="item">行政村会议</div> -->

    </div>
    <BaseCard>
      <span slot="left"
            class="cardtitle">项目建设信息</span>
      <router-link tag="span"
                   slot="right"
                   to="/cwxj">
        <!-- <span slot="right"> -->
        更多
        <!-- </span> -->

      </router-link>
      <div slot="baseCard_body">
        <div class="null"
             v-if="total1===0"><span class="iconfont icon-empty"></span></div>
        <div v-else>
          <router-link v-for="(item ,index) in projects1"
                       :key="'itemhd'+index"
                       tag="div"
                       :to="{path:'/xjintro',query:{id:item.id}}">
            <Card5>
              <span v-if="item.img==null"
                    slot="img"
                    class=" iconfont icon-image"></span>

              <!-- <div slot="img"
                   class="img"
                   v-else
                   :style="{'background-image': 'url('+item.img+')'}">
              </div> -->
              <div class="img"
                   slot="img"
                   v-if="item.img!=null">
                <van-image width="100"
                           height="100"
                           lazy-load
                           :src="item.img" />
              </div>
              <b slot="name">{{item.name}}</b>
              <p slot="intro">
                <span v-if="item.projected===true">已立项</span>
                <span v-else>暂未立项</span>

              </p>
              <div slot="button">
                <!-- <button class="del">-</button> -->
                <span class="iconfont icon-you"></span>
              </div>
            </Card5>
          </router-link>
        </div>
      </div>
    </BaseCard>
    <BaseCard>
      <span slot="left"
            class="cardtitle">村活动</span>
      <router-link tag="span"
                   slot="right"
                   to="/cwhd">
        更多
      </router-link>
      <div slot="baseCard_body">
        <div class="null"
             v-if="total2===0"><span class="iconfont icon-empty"></span></div>
        <div v-else>
          <router-link v-for="(item ,index) in activities"
                       :key="'itemhd'+index"
                       tag="div"
                       :to="{path:'/vadetails',query:{type:2,id:item.id}}">
            <Card5>
              <span v-if="item.img==null"
                    slot="img"
                    class=" iconfont icon-image"></span>

              <!-- <div slot="img"
                   class="img"
                   v-else
                   :style="{'background-image': 'url('+item.img+')'}">
              </div> -->
              <div class="img"
                   slot="img"
                   v-if="item.img!=null">
                <van-image width="100"
                           height="100"
                           lazy-load
                           :src="item.img" />
              </div>
              <b slot="name">{{item.name}}</b>
              <p slot="intro">
                <span>{{item.time}}</span>
                <span>{{item.place}}</span>
              </p>
              <div slot="button">
                <!-- <button class="del">-</button> -->
                <span class="iconfont icon-you"></span>
              </div>
            </Card5>
          </router-link>
        </div>
      </div>
    </BaseCard>
    <BaseCard>
      <span slot="left"
            class="cardtitle">村会议</span>
      <router-link tag="span"
                   slot="right"
                   to="/cwhy">
        更多
      </router-link>
      <div slot="baseCard_body">
        <div class="null"
             v-if="total3===0"><span class="iconfont icon-empty"></span></div>
        <div v-else>
          <router-link v-for="(item ,index) in meetings"
                       :key="'huiyi'+index"
                       tag="div"
                       :to="{path:'/vadetails',query:{type:1,id:item.id}}">
            <Card5>
              <!-- :style="{'background-image': 'url('+item.img+')'}" -->
              <div class="img"
                   slot="img"
                   v-if="item.img!=null">
                <van-image width="100"
                           height="100"
                           lazy-load
                           :src="item.img" />
              </div>
              <div slot="img"
                   v-else>
                <span class="iconfont icon-image"></span>
              </div>
              <b slot="name">{{item.name}}</b>
              <p slot="intro">
                <span>{{item.time}}</span>
                <span>{{item.place}}</span>
              </p>
            </Card5>
          </router-link>
        </div>
      </div>
    </BaseCard>
  </div>
</template>
<script>
// import ulandlis from "components/commen/ulnavigations/ulandlis"
import BaseCard from "components/commen/Cards/BaseCard"
import Card5 from "components/commen/Cards/Card5"
import {
  get_project_constractions,
  get_village_actions,
  get_village_meetings
} from "network/request"
export default {
  name: "cunwu",
  data () {
    return {
      nowPage1: 1,
      allPage1: 1,
      projects1: [],
      total1: 1,
      meetings: [],
      total2: 0,
      total3: 1,
      activities: []
    }
  },
  components: {
    // ulandlis
    BaseCard,
    Card5
  },
  created () {
    get_project_constractions(this.$store.state.vid, 6, 1)
      .then(res => {
        // console.log(res);
        this.total1 = res.count
        // try {
        this.projects1 = res.data.map(project => {
          let theimg = null
          if (project.relatedDocuments != null && project.relatedDocuments.length >= 1) {
            theimg = project.relatedDocuments[0].url
          }
          return {
            id: project.id,
            name: project.name,
            img: theimg,
            implementer: project.implementer,
            number: project.number,
            projected: project.projected
          }
        })


      }, err => {
        this.$toast.fail("加载失败！")
      })
    get_village_actions(this.$store.state.vid, 6, 1)
      .then(res => {
        // console.log(res);
        this.total2 = res.count
        try {
          this.activities = res.data.map(metting => {
            let theimg = null;

            if (metting.relatedDocuments != null && metting.relatedDocuments.length >= 1) {
              theimg = metting.relatedDocuments[0].url
            }
            return {
              id: metting.id,
              name: metting.name,
              img: theimg,
              time: metting.time,
              place: metting.location,
              content: metting.content
            }

          })
        } catch (error) {
          this.total3 = 0
        }
      }, err => {
        this.$toast.fail("加载失败！")
      })
    get_village_meetings(this.$store.state.vid, 6, 1, "id,title,content,time,relatedDocuments,location")
      .then(res => {
        this.total3 = res.count
        this.meetings = res.data.map(metting => {
          let theimg = null;
          // try {
          if (metting.relatedDocuments != null && metting.relatedDocuments.length >= 1) {
            theimg = metting.relatedDocuments[0].url
          }
          return {
            id: metting.id,
            name: metting.title,
            img: theimg,
            time: metting.time,
            place: metting.location,
            content: metting.content
          }
          // } catch (error) {
          // }
        })
      }, err => {
        // this.total3 = 0
        this.$toast.fail("加载失败！")
      })
  },
}
</script>
<style scoped>
.iconfont {
  /* color: #cf2d28; */
  font-size: 1.6rem;
}

.icon-image {
  display: inline-block;

  height: 3rem;
  line-height: 3rem;
  color: #888888;
  font-size: 20px;
}
a {
  appearance: none;
  color: #bbbbbb;
}
a:visited,
a:hover {
  color: #cf2e28c4;
}
.gridbox {
  display: grid;
  margin: 10px 0px;
  grid-template-columns: repeat(3, 33.3%);
  /* color: #ffffff; */
  font-size: 14px;
}
.item {
  padding: 20px 10px;
  border-radius: 10px;
  margin: 10px;
  text-align: center;
  background-color: #ffffff;
  color: #666666;
  border: 1px solid #efefef;
  box-shadow: 0px 0px 4px #efefef;
}
.item .iconfont {
  display: inline-block;
  width: 44px;
  height: 44px;
  line-height: 44px;
  margin-bottom: 5px;
  border: 1px solid #dddddd;
  border-radius: 22px;
}
.icon-ganbujiaoliu {
  color: rgb(88, 160, 255);
}
.icon-love {
  color: #cf2d28;
}
.icon-renyuanxinxi {
  color: #fc8435;
}
.null {
  text-align: center;
}
.null .iconfont {
  font-size: 60px;
  color: #ccc;
}
</style>