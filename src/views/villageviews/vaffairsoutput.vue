<template>
  <div>
    <nullpng v-show="isnull" />
    <router-link v-for="(person,index) in persons"
                 :key="index"
                 tag="div"
                 :to="{path:'/vadetails',query:{type:4,id:person.id}}">
      <ulandlis v-for="(person,index) in persons"
                :key="index">
        <span slot="liicon"
              class="iconfont icon-guanli"></span>
        <span slot="liintro">{{person.name}}</span>
        <a slot="lidetails"
           class="iconfont icon-icon_huabanfuben"></a>
      </ulandlis>
    </router-link>
    <pageselect :nowPage="nowPage"
                :allPage="allPage"
                @changenowpage="changenowpage" />
  </div>
</template>
<script>
import {
  request,
  get_qianyi_by_vid
} from "network/request"
import ulandlis from "components/commen/ulnavigations/ulandlis"
import pageselect from "components/commen/pageSelect/pageselect"
import nullpng from "components/content/nullpng"
export default {
  name: "vaoutput",
  data () {
    return {
      isnull: false,
      nowPage: 1,
      allPage: 1,
      persons: [],
      type: 2
    }
  },
  components: {
    ulandlis,
    pageselect,
    nullpng
  },
  created () {
    get_qianyi_by_vid(this.$store.state.vid, this.type, this.nowPage)
      .then(res => {
        if (res.count === 0) {
          this.isnull = true
        } else {
          this.allPage = res.total
          this.persons = res.record.map(person => {
            return {
              name: person.hkqyName,
              id: person.hkqyId
            }
          })
        }
      })
  },
  methods: {
    changenowpage (page) {
      this.nowPage = Number(page)
      get_qianyi_by_vid(this.$store.state.vid, this.type, page)
        .then(res => {
          if (res.count === 0) {
            this.isnull = true
            this.persons.splice(0, this.persons.length)
          } else {
            this.isnull = false
            this.allPage = res.total
            this.persons = res.record.map(person => {
              return {
                name: person.hkqyName,
                id: person.hkqyId
              }
            })
          }
        })
    },
  },
  mounted () {
    this.$loading.hide()
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