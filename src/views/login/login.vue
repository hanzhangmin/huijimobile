<template>
  <div class="loginbody">
    <!-- :style="{'background-image':'url('+back1+')','background-size':'cover'}" -->
    <div class="loginform">
      <h2 class="title">
        郑州市惠济区村(居)务监督平台
      </h2>
      <div class="input_item">
        <div :style="tored"
             class="
             input_title
             iconfont
             icon-contact"></div>
        <div class="input_body">
          <input type="text"
                 v-model="value"
                 @focus="inputfocus"
                 placeholder="请输入账号"></div>
        <div :class="toshow"
             @click="clear"
             class="input_clear iconfont icon-del"></div>
      </div>
      <div class="input_item">
        <div :style="tored1"
             class="
             input_title
             iconfont
             icon-icon_password"></div>
        <div class="input_body">
          <input type="password"
                 v-model="value1"
                 @focus="inputfocus1"
                 placeholder="请输入密码"></div>
        <div :class="toshow1"
             @click="clear1"
             class="input_clear iconfont icon-del"></div>
      </div>

      <div class="input_item ">
        <div class="input_body submit active"
             style="text-align: center;">
          <button @click="gowelcome">提&emsp;&emsp;交</button>
        </div>
      </div>
    </div>
    <div class="footer">
      <p>主办单位：惠济区纪委监委</p>
    </div>

    <uploadsign v-show="isshow"
                :isshow="isshow">
      <span :class="icon"
            slot="icon"></span>
      <span slot="message">{{sign}}</span>
    </uploadsign>
  </div>

</template>
<script>
import uploadsign from "components/commen/uploadsign"
import {
  request, post_login
} from "network/request"

import {
  setCookie,
  getCookie,
  clearAllCookie
} from "assets/js/cookie"

import back1 from "assets/imgs/back1.jpg"

export default {
  name: "public",
  components: {
    uploadsign
  },
  data () {
    return {
      focus: false,
      focus1: false,
      value: "",
      value1: "",
      back1: back1,
      isshow: false,
      icon: "iconfont icon-xiaolianchenggong happy",
      sign: "成功!",
    }
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
    },
    tored1 () {
      return this.focus1 ? {
        'background': '#cf2d28',
        'color': 'white!important',
        'transition': 'background, color 0.5s',
        '-webkit-transition': 'background, color 0.5s'
      } : ""
    },
    toshow1 () {
      return this.focus1 ? "toshow" : ""
    }
  },
  methods: {
    gowelcome () {
      post_login(this.value, this.value1)
        .then((reaponse) => {
          // console.log(reaponse);
          setCookie(this.value, this.value1);
          if (reaponse.state === true) {
            this.icon = "iconfont icon-xiaolianchenggong happy"
            this.sign = "成功!"
            this.$store.state.vid = reaponse.data.userVillageid;
            this.$store.state.vname = reaponse.vName;
            this.$store.state.sex = reaponse.data.userSex;
            this.$store.state.name = reaponse.data.userName;
            this.$store.state.userid = reaponse.data.userId;
            this.$store.state.account = reaponse.data.userAccountid
            this.$router.push("/welcome")
          } else {
            this.icon = "iconfont icon-chucuo sed"
            this.sign = reaponse.data
          }
          this.isshow = true
          setTimeout(() => {
            this.isshow = false
          }, 2900)
        }, err => {
          console.log(err);
        })
    },
    inputfocus () {
      this.focus = true,
        this.focus1 = false
    },
    clear () {
      this.value = "";
    },
    inputfocus1 () {
      this.focus1 = true
      this.focus = false
    },
    clear1 () {
      this.value1 = "";
    }
  },
  created () {
    let mydata = getCookie();
    if (mydata != false) {
      this.value = mydata.huijitel
      this.value1 = mydata.huijipas
    }
  },
}

</script>
<style scoped>
.loginbody {
  width: 100vw;
  height: 100vh;
  background-image: url("~assets/imgs/back1.jpg");
  background-size: cover;
}
.loginform {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 90%;
  transform: translate(-50%, -50%);
  padding: 3rem 0;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 10px;
}
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
.title {
  position: relative;
  color: #cf2d28;
  text-align: center;
}

button {
  height: 2rem;
  border: none;
  outline: none;
  width: 100%;
  background: linear-gradient(45deg, #cf2d28, #19058a);
  color: #eeeeee;
}

.footer {
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  text-align: center;
}
.happy {
  color: darkgreen;
}
.sed {
  color: #cf2d28;
}
</style>