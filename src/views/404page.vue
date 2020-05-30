<template>
  <div>
    <p>
      404 NOT FIND
    </p>
    <p> <button @click.stop="goback">返回</button></p>
  </div>
</template>
<script>
export default {
  name: "page404",
  methods: {
    goback () {
      this.$router.back()
    }
  },
}
</script>
<style  scoped>
body {
  background-color: #efefef;
}
div {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #cf2d28;
  font-size: 1.6rem;
}
button {
  border: none;
  background-color: #cf2d28;
  padding: 5px 1rem;
  border-radius: 5px;
  color: #ffffff;
  box-shadow: 4px 4px 4px 1px #faaca9;
}
p {
  text-align: center;
}
</style>