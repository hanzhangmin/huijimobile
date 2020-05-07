<template>
  <div>
    <inputsearch @searchbyname="searchbyname"
                 :inputtype="inputtype"></inputsearch>
    <nullpng v-show="isnull"></nullpng>
    <router-link v-for="(project,index) in projects"
                 :key="index"
                 tag="div"
                 :to="{path:'/xjintro',query:{id:project.id}}">
      <ulandlis>
        <span slot="liicon"
              class="iconfont icon-nav_dangqundangan"></span>
        <span slot="liintro">{{project.name}}</span>
        <a slot="lidetails"
           class="iconfont icon-you"></a>
      </ulandlis>
    </router-link>
    <pageselect :nowPage="nowPage"
                :allPage="allPage"
                @changenowpage="changenowpage"
                @searchbyname="searchbyname"></pageselect>
  </div>
</template>
<script>
import {
  get_project_byid,
  get_project_byid_andkey
} from "network/request"
import ulandlis from "components/commen/ulnavigations/ulandlis"
import nullpng from "components/content/nullpng"
import pageselect from "components/commen/pageSelect/pageselect"
import inputsearch from "components/commen/inputsearch/inputsearch"
export default {
  name: "s7",
  data () {
    return {
      nowPage: 1,
      allPage: 1,
      projects: [],
      inputtype: "text",
      isnull: false,
      keyword: ""
    }
  },
  components: {
    ulandlis,
    nullpng,
    pageselect,
    inputsearch
  },
  created () {
    get_project_byid(this.$store.state.vid, this.nowPage)
      .then(res => {
        if (res.count === 0) {
          this.isnull = true
        } else {
          this.projects = res.OperationManagements.map(p => {
            return {
              id: p.operationManagement_Id,
              name: p.om_Name
            }
          })
        }
      })
  },
  methods: {
    changenowpage (page) {
      this.nowPage = Number(page)
      getlist(this.keyword, this.$store.state.vid, this.nowPage)
        .then(res => {
          if (res.count === 0) {
            this.isnull = true
            this.allPage = 1
            this.projects.splice(0, this.projects.length)
          } else {
            this.isnull = false
            this.projects = res.OperationManagements.map(p => {
              return {
                id: p.operationManagement_Id,
                name: p.om_Name
              }
            })
          }
        })
    },
    searchbyname (keyword) {
      this.nowPage = 1;
      this.keyword = keyword;
      getlist(this.keyword, this.$store.state.vid, this.nowPage)
        .then(res => {
          if (res.count === 0) {
            this.isnull = true
            this.allPage = 1
            this.projects.splice(0, this.projects.length)
          } else {
            this.projects = res.OperationManagements.map(p => {
              return {
                id: p.operationManagement_Id,
                name: p.om_Name
              }
            })
          }
        })
    }
  },
}

function getlist (keyword, vid, page) {
  if (keyword === "") {
    return get_project_byid(vid, page)
  } else {
    return get_project_byid_andkey(keyword, vid, page)
  }
}
</script>
<style scoped>
.iconfont {
  color: #cf2d28;
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