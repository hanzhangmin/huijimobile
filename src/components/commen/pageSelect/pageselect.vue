<template>
  <div class="pageselect">
    <van-button v-if="nowPage==1"
                disabled
                type="primary"
                size="small"
                color="#cf2d28"
                @click.stop="godown">上一页</van-button>
    <van-button v-else
                type="primary"
                size="small"
                color="#cf2d28"
                @click.stop="godown">上一页</van-button>
    <!-- <button class="pagebutton"
            @click.stop="godown">上一页</button> -->
    <select v-model="mynowPage"
            @change="gothepage($event)">
      <option v-for="index of allPage"
              :key="index"
              :value="index">{{index}}/{{allPage}}</option>
    </select>
    <van-button v-if="nowPage==allPage"
                disabled
                type="primary"
                size="small"
                color="#cf2d28"
                @click.stop="goup">下一页</van-button>
    <van-button v-else
                type="primary"
                size="small"
                color="#cf2d28"
                @click.stop="goup">下一页</van-button>
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
  margin: 10px 10px;
  border-radius: 10px;
}

.pageselect select {
  border: none;
  /* background-color: #cf2d28; */
  color: #cf2d28;
  min-width: 3rem;
  border-radius: 5px;
  padding: 5px;
  margin: 10px;
  border: 1px solid #cf2d28;
}
/* .noactive {
  background-color: #efefef !important;
  color: #555555 !important;
} */
</style>
