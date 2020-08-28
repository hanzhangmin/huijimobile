<template>
  <div style="padding:0px 10px;">
    <nullpng v-show="isnull"></nullpng>
    <router-link v-for="(item,index) in projects"
                 :key="index"
                 tag="div"
                 :to="{path:'/xjintro',query:{id:item.id}}">
      <Card5>
        <div slot="img"
             class="img"
             v-if="item.img==null">
          <img src="~assets/imgs/zhanwei.png"
               alt="图片未上传"
               srcset="">
        </div>
        <div slot="img"
             class="img"
             v-else
             :style="{'background-image': 'url('+item.img+')'}">
          <!-- <span class="iconfont icon-image"></span> -->
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
    <pageselect :nowPage="nowPage"
                :allPage="allPage"
                @changenowpage="changenowpage"></pageselect>
  </div>
</template>
<script>
import {
  get_project_constractions
} from "network/request"
import Card5 from "components/commen/Cards/Card5"
import nullpng from "components/content/nullpng"
import pageselect from "components/commen/pageSelect/pageselect"
export default {
  name: "s7",
  data () {
    return {
      nowPage: 1,
      allPage: 1,
      projects: [],
      isnull: false,
    }
  },
  components: {
    Card5,
    nullpng,
    pageselect,
  },
  created () {
    get_project_constractions(this.$store.state.vid, 8, this.nowPage)
      .then(res => {
        console.log(res);
        if (res.count === 0) {
          this.isnull = true
          this.projects.splice(0, this.activities.length)
        } else {
          this.allPage = res.pageCount
          this.isnull = false
          this.projects = res.data.map(project => {
            let theimg = null;
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
        }
      }, err => {
        this.isnull = true
        this.projects.splice(0, this.projects.length)
        this.$mytoast.toast("加载失败！", 2000)
      })
  },
  methods: {
    changenowpage (page) {
      this.nowPage = Number(page)
      get_project_constractions(this.$store.state.vid, 8, this.nowPage)
        .then(res => {
          console.log(res);
          if (res.count === 0) {
            this.isnull = true
            this.projects.splice(0, this.projects.length)
          } else {
            this.allPage = res.pageCount
            this.projects = res.data.map(project => {
              let theimg = null;
              try {
                if (project.relatedDocuments.length >= 1 && project.relatedDocuments != null) {
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
              } catch (error) {
              }
            })
          }
        }, err => {
          this.isnull = true
          this.projects.splice(0, this.projects.length)
          this.$mytoast.toast("加载失败！", 2000)
        })

    },

  },
}


</script>
<style scoped>
body {
  /* margin: 0px 22px; */
}
</style>