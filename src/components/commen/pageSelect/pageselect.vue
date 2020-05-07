<template>
  <div class="pageselect">
    <button @click.stop="godown">上一页</button>
    <select v-model="mynowPage"
            @change="gothepage($event)">
      <option v-for="index of allPage"
              :key="index"
              :value="index">{{index}}/{{allPage}}</option>
    </select>
    <button @click.stop="goup">下一页</button>
  </div>
</template>
<script>
export default {
  name: "pageselect",
  props: {
    nowPage: {
      type: Number,
      default: 1
    },
    allPage: {
      type: Number,
      default: 1
    },
  },
  data () {
    return {
      mynowPage: this.allPage
    }
  },
  methods: {
    godown () {
      // alert("down")
      if (this.mynowPage > 1) {
        this.mynowPage--
      } else {
        alert("已是首页！")
      }
    },
    goup () {
      // alert("up")
      if (this.mynowPage < this.allPage) {
        this.mynowPage++;
      } else {
        alert("已是尾页！")
      }
    },
    gothepage (e) {
      // console.log(e.srcElement.value);
      this.$emit("changenowpage", e.srcElement.value)
      // console.log(page);
    }
  },
  watch: {
    nowPage (val) {
      this.mynowPage = Number(val)
    },
    mynowPage (val) {
      this.$emit("changenowpage", val)
    }
  },
}
</script>
<style scoped>
.pageselect {
  position: relative;
  left: 0;
  right: 0;
  bottom: 0;
  height: 2.4rem;
  line-height: 2.4rem;
  text-align: center;
  z-index: 1;
  margin: 0px 10px;
  border-radius: 10px;
}
.pageselect button,
.pageselect select {
  border: none;
  background-color: rgb(253, 215, 222);
  color: #cf2d28;
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
}
/* .noactive {
  background-color: #efefef !important;
  color: #555555 !important;
} */
</style>
