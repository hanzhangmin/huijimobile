<template>
  <div class="searchbody">
    <div class="stitle"> <span>{{stitle}}</span></div>
    <div class="sbody">
      <select v-model="myvalue">
        <!-- <option v-for="(option ,index) in options"
                :key="index"
                :value="option.id">{{option.name}}</option> -->
      </select>
    </div>
  </div>
</template>
<script>
export default {
  name: "selectyear",
  props: {
    stitle: String,
  },
  data () {
    return {
      theyear: 0,
      years: []
    }
  },
  created () {
    this.theyear = (new Date).getFullYear()
    for (let i = this.theyear; i > 2011; i--) {
      this.years.push({ id: i, name: i })
    }
  },
  watch: {
    myvalue (val) {
      this.$emit("selectchange", val)
    },
    selected (val) {
      this.myvalue = Number(val)
    }
  },
}
</script>
<style scoped>
.searchbody {
  text-align: center;
  margin: 5px 10px;
  display: flex;
  background-color: white;
  line-height: 100%;
}
.searchbody select {
  border: none;
  background-color: rgba(0, 0, 0, 0);
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  padding: 5px 5px 6px 5px;
  width: 100%;
  outline: none;
}
.stitle {
  width: 5rem;
  letter-spacing: 2px;
  padding: 5px;
  border-right: 2px solid #cccccc;
}
.sbody {
  flex: auto;
  background-color: white;
  margin-right: 2rem;
}
</style>