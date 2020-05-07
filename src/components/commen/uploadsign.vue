<template>
  <div class="mask">
    <div class="maskbody">
      <slot name="icon"></slot>
      <slot name="message"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "uploadsign",
  props: {
    isshow: Boolean
  },
}
</script>
<style scoped>
.mask {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  background-color: white;
  box-shadow: 0px 0px 5px 2px #cfcfcf;
  padding: 10px;
  border-radius: 1rem;
  letter-spacing: 2px;
  color: #555555;
  text-align: center;
  animation: myfirst 3s 1;
  /*Safari 和 Chrome:*/
  -webkit-animation: myfirst 3s 1;
}
.maskbody {
  display: flex;
}
@keyframes myfirst {
  0% {
    display: block;
    opacity: 1;
  }
  75% {
    opacity: 0.8;
  }
  100% {
    opacity: 0;
  }
}
@-moz-keyframes myfirst /* Firefox */ {
  0% {
    display: block;
    opacity: 1;
  }
  75% {
    opacity: 0.8;
  }
  100% {
    opacity: 0;
  }
}

@-webkit-keyframes myfirst /* Safari 和 Chrome */ {
  0% {
    display: block;
    opacity: 1;
  }
  75% {
    opacity: 0.8;
  }
  100% {
    opacity: 0;
  }
}

@-o-keyframes myfirst /* Opera */ {
  0% {
    display: block;
    opacity: 1;
  }
  75% {
    opacity: 0.8;
  }
  100% {
    opacity: 0;
  }
}
</style>