<template>
  <div class="baseCard">
    <div class="baseCard_title">
      <div class="left">
        <slot name="left"></slot>
      </div>
      <div class="right">
        <slot name="right">

        </slot>
        <!-- <span slot="right"
              @click.stop="gomore"> 更多>></span> -->
      </div>
    </div>
    <div class="baseCard_body">
      <slot name="baseCard_body"></slot>
    </div>
    <div class="baseCard_footer">
      <slot name="footer"></slot>
    </div>

  </div>
</template>
<script>
export default {
  name: "baseCard",
  props: {
    youlove: Array
  },
  created () {
  },
  // methods: {
  //   gomore () {
  //     this.$emit("gomore")
  //   },
  // },
}
</script>
<style scoped>
.baseCard {
  padding: 20px;
  /* box-shadow: 0px 0px 4px 4px #cccccc; */
  background-color: #ffffff;
  margin-bottom: 5px;
  font-size: 16px;
  color: #666666;
  border-bottom: 1px solid #dddddd;
  border-top: 1px solid #dddddd;
}
.cardtitle {
  border-left: 4px solid #cf2d28;
  padding-left: 10px;
}
.baseCard .baseCard_footer {
  text-align: center;
}

.baseCard_body {
  /* display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(2, auto);
  grid-row-gap: 10px;
  grid-column-gap: 10px; */
  margin: 10px 0px;
}

.intro {
  line-height: 150%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.baseCard_title {
  display: flex;
  flex-direction: row;
  padding-bottom: 10px;
  color: #555555;
  font-weight: bold;
}

.baseCard_title div {
  flex: 1;
}

.baseCard_title div:last-child {
  text-align: right;
}
</style>