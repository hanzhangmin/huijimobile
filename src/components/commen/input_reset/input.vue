<template>
  <div class="input_item">
    <div :style="tored"
         class="input_title"
         :class="icon"></div>
    <div class="input_body">
      <input :type="inputtype"
             :value="value"
             @focus="inputfocus"
             @change="inputfocus"
             @blur="inputblur"
             :placeholder="placeholder"></div>
    <div :class="toshow"
         @click="clear"
         class="input_clear iconfont icon-del"></div>
  </div>
</template>
<script>
export default {
  name: "input_reset",
  data () {
    return {
      focus: false,
      value: ""
    }
  },
  props: {
    inputtype: {
      type: String,
      undefined: "text"
    },
    placeholder: {
      type: String,
      undefined: "请输入账号"
    },
    icon: String
  },
  computed: {
    tored () {
      return this.focus ? {
        'background': '#cf2d28',
        'color': 'white!important',
        'transition': 'background, color 0.5s',
        '-webkit-transition': 'background, color 0.5s'
      } : ""
    },
    toshow () {
      return this.focus ? "toshow" : ""
    }
  },
  methods: {
    inputfocus () {
      this.focus = true
    },
    inputblur () {
      this.focus = false;
      console.log(this.value);
    },
    clear () {
      this.value = "";
    }
  },
}
</script>
<style scoped>
.input_item {
  position: relative;
  margin: 2rem 1rem 0 1rem;
  background: rgb(225, 225, 225);
  height: 2rem;
  display: flex;
  border-radius: 1rem;
  overflow: hidden;
}
.input_item div {
  height: 2rem;
  line-height: 2rem;
  overflow: hidden;
}

.input_item .input_title,
.input_item .input_clear {
  width: 3rem;
  text-align: center;
}

.input_item .input_body {
  flex: auto;
}

.input_item .input_title {
  color: #555555;
}

.input_item .input_clear {
  width: 0rem;
  overflow: hidden;
  color: #555555;
}

.toshow {
  animation: myshow 0.3s;
  animation-fill-mode: forwards;
}
@keyframes myshow {
  from {
    width: 0rem;
  }
  to {
    width: 3rem;
  }
}

.input_item input {
  position: relative;
  height: 2rem;
  border: none;
  width: 84%;
  padding-left: 1rem;
  background-color: rgba(0, 0, 0, 0);
}

input:focus {
  outline: none;
}
</style>