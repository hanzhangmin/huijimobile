<template>
  <div>
    <nullpng v-show="isnull" />
    <router-link v-for="(person,index) in persons"
                 :key="index"
                 tag="div"
                 :to="{path:'/vadetails',query:{type:3,id:person.id}}">
      <ulandlis>
        <span slot="liicon"
              class="iconfont icon-guanli"></span>
        <span slot="liintro">{{person.name}}</span>
        <a slot="lidetails"
           class="iconfont icon-you">
        </a>
      </ulandlis>
    </router-link>
    <pageselect :nowPage="nowPage"
                :allPage="allPage"
                @changenowpage="changenowpage" />
  </div>
</template>
<script>
import {
  get_migraters
} from "network/request"
import ulandlis from "components/commen/ulnavigations/ulandlis"
import pageselect from "components/commen/pageSelect/pageselect"
import nullpng from "components/content/nullpng"
export default {
  name: "vainput",
  data () {
    return {
      isnull: false,
      nowPage: 1,
      allPage: 1,
      persons: [],
      type: 1
    }
  },
  components: {
    ulandlis,
    pageselect,
    nullpng
  },
  created () {
    get_migraters(this.$store.state.vid, this.type, 10, this.nowPage, "id,name")
      .then(res => {

        if (res.count === 0) {
          this.isnull = true
        } else {
          this.allPage = res.pageCount
          this.persons = res.data.map(person => {
            return {
              name: person.name,
              id: person.id
            }
          })
        }
      }, err => {
        this.isnull = true
        this.persons.splice(0, this.persons.length)
        this.$toast.fail("加载失败！")
      })
  },
  methods: {
    changenowpage (page) {
      this.nowPage = Number(page)
      get_migraters(this.$store.state.vid, this.type, 10, this.nowPage, "id,name")
        .then(res => {
          if (res.count === 0) {
            this.isnull = true
            this.persons.splice(0, this.persons.length)
          } else {
            this.isnull = false
            this.allPage = res.pageCount
            this.persons = res.data.map(person => {
              return {
                name: person.name,
                id: person.id
              }
            })
          }
        }, err => {
          this.isnull = true
          this.persons.splice(0, this.persons.length)
          this.$toast.fail("加载失败！")
        })
    },

  },
  mounted () {
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