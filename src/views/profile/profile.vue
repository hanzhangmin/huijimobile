<template>
  <div style="margin-top:6vh;">
    <div class="profile">
      <div class="photo">
        <span class="iconfont icon-wode3"></span>
      </div>
      <div class="name">
        <div>
          姓名：{{name}}
        </div>
        <div>
          账号：{{account}}
        </div>
        <div>
          所在村：{{vName}}
        </div>
      </div>
    </div>
    <div class="itembar">
      <div class="item"
           style="border-bottom:1px solid #cccccc">
        <router-link to="/feedcenter"
                     tag="div">
          <ulandlis>
            <span slot="liicon"
                  class="iconfont icon-jubao1"></span>
            <span slot="liintro">意见建议中心</span>
            <a slot="lidetails"
               class="iconfont icon-you"></a>
          </ulandlis>
        </router-link>
      </div>
      <!-- <div class="item"
           @click.stop="showupdata"> -->
      <div class="item">
        <router-link to="/updataProfile"
                     tag="div">
          <ulandlis>
            <span slot="liicon"
                  class="iconfont icon-mima"></span>
            <span slot="liintro">编辑我的资料</span>
            <a slot="lidetails"
               class="iconfont icon-you"></a>
          </ulandlis>
        </router-link>
      </div>
    </div>
    <div class="tuichu">
      <van-button type="primary"
                  @click.stop="gologin">退出</van-button>
      <!-- <button @click.stop="gologin">退出</button> -->
    </div>

  </div>
</template>
<script>
import ulandlis from "components/commen/ulnavigations/ulandlis1"

export default {
  name: "profile",
  data () {
    return {
      isshow: false,
      old: "",
      new1: "",
      new2: "",
      message: "",
      isshow1: false,
      icon: "iconfont icon-xiaolianchenggong happy",
      sign: "成功!",
    }
  },
  computed: {
    name () {
      return this.$store.state.name
    },
    account () {
      return this.$store.state.account
    },
    vName () {
      return this.$store.state.vname
    }
  },
  components: {
    ulandlis,
  },
  methods: {
    updatapas () {
      if (this.new1 != this.new2) {
        this.message = "两次输入新密码不同！"
      } else {
        post_updatapas(this.$store.state.userid, this.new1)
          .then(res => {
            console.log(res);
            if (res.statue == "修改成功") {
              this.icon = "iconfont icon-xiaolianchenggong happy"
              this.sign = "成功!"
              this.isshow = false
            } else {
              this.icon = "iconfont icon-chucuo sed"
              this.sign = "修改失败!"
            }
            this.isshow1 = true
            setTimeout(() => {
              this.isshow1 = false
            }, 2900)
          }, err => {
            this.$mytoast.toast("暂无法修改")
          })
      }
    },
    showupdata () {
      this.isshow = true
    },
    hidenupdata () {
      this.isshow = false
    },
    gologin () {
      localStorage.removeItem("userVillageid")
      localStorage.removeItem("vName")
      localStorage.removeItem("userSex")
      localStorage.removeItem("userName")
      localStorage.removeItem("userAccountid")
      localStorage.removeItem("userId")
      this.$router.replace("/login")
    }
  },
}
</script>
<style scoped>
.profile {
  /* background-color: rgba(192, 43, 40, 0.1); */
  background-color: white;
  height: 8rem;
  padding-left: 10px;
  display: flex;
  flex-direction: unset;
  padding-top: 1rem;
}
.profile .photo {
  width: 7rem;
  height: 7rem;
  background-color: rgba(192, 43, 40, 0.1);
  text-align: center;
  line-height: 7rem;
  margin-right: 1rem;
}
.profile .name {
  flex: auto;
  height: 5rem;
  display: flex;
  flex-direction: column;
}
.profile .name div {
  flex: 1;
  padding-top: 1rem;
}
.itembar {
  margin: 10px 0px;
  background-color: white;
}
.icon-wode3 {
  font-size: 3rem;
  color: #cf2d28;
}
.icon-jubao1 {
  font-size: 2rem;
  color: rgb(32, 108, 250);
}
.icon-mima {
  font-size: 1.7rem;
  color: rgb(250, 32, 32);
}
.ulandlis {
  margin: 0px;
}
.inputbody {
  margin: 10px 0px;
  text-align: center;
}
td input {
  padding: 5px;
  border: none;
  background-color: #efefef;
  border-radius: 5px;
}
.button {
  text-align: center;
}
button {
  background-color: #cf2d28;
  border: none;
  letter-spacing: 4px;
  color: #ffffff;
  margin: 0px 2rem;
}
.tuichu {
  position: relative;
  text-align: center;
  margin-top: 5rem;
}
/* .button button,
.tuichu button {
  background-color: #cf2d28;
  color: white;
  padding: 6px 2rem;
  border-radius: 6px;
  border: none;
} */
.happy {
  color: darkgreen;
}
.sed {
  color: #cf2d28;
}
.mask {
  padding-bottom: 1rem;
}
</style>
