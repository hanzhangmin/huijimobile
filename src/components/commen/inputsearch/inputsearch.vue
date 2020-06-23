<template>
  <div class="inputsearch">
    <div class="isinput">
      <input type="text"
             v-model="keyword"
             placeholder="请输入查询关键字"></div>
    <div class="issearch"
         @click="search">
      <span class="iconfont icon-sousuo"></span>
    </div>
  </div>
</template>
<script>
export default {
  name: "inputsearch",
  data () {
    return {
      keyword: ""
    }
  },
  methods: {
    search () {
      this.$emit("searchbyname", this.keyword)
    }
  },
}
</script>
<style scoped>
.inputsearch {
  display: flex;
  margin: 5px 10px 5px 10px;
  background-color: white;
  padding: 5px 5px 5px 10px;
}
.isinput {
  flex: auto;
}
.isinput input {
  border: none;
  width: 100%;
  letter-spacing: 2px;
  outline: none;
}
.issearch {
  width: 3rem;
  text-align: center;
  color: #cf2d28;
  border-left: 2px solid #efefef;
}
</style>