<template>
  <div class="isnull">
    <img :src="nulpng">
  </div>
</template>
<script>
import nulpng from "assets/imgs/null.png"
export default {
  name: "nullpng",
  props: {
    isnull: Boolean
  },
  data () {
    return {
      nulpng
    }
  },
}
</script>
<style scoped>
.isnull {
  text-align: center;
  margin-top: 4rem;
}
</style>