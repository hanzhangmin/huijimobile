<template>
  <div class="vcard">
    <div class="vcardheader">
      <div class="vname">
        <slot name="vname"></slot>
      </div>
      <div class="vsign iconfont icon-kangjuxiangcun"
           style="font-size:2.4rem;color:#cf2d28"></div>
    </div>
    <div class="vcardcontainer">
      <slot name="vintro"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "vcard"
}
</script>
<style scoped>
.vcard {
  border: none;
  background-color: white;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
}
.vcardheader {
  height: 2.4rem;
  line-height: 2.4rem;
  display: flex;
  border-bottom: 1px solid #cccccc;
}
.vname {
  color: #666666;
  flex: 1;
}
.vsign {
  width: 2.4rem;
  text-align: center;
}
.vcardcontainer {
  padding-top: 5px;
  font-size: 14px;
  letter-spacing: 2px;
  color: #666666;
}
</style>