<template>
  <div class="body">
    <div class="header">
      <Headergoback>
        <span slot="Headertitle">{{title}}</span>
      </Headergoback>
    </div>
    <div style="padding-top:6vh">
      <van-form @submit="onSubmit">
        <van-field v-model="villager.name"
                   type="text"
                   name="用户名"
                   label="用户名"
                   placeholder="用户名"
                   readonly
                   :rules="[{ required: true, message: '请填写用户名' }]" />
        <van-field v-model="villager.account"
                   type="text"
                   name="账号"
                   label="账号"
                   placeholder="账号"
                   readonly
                   :rules="[{ required: true, message: '请填写账号' }]" />
        <van-field v-model="password"
                   type="password"
                   name="密码"
                   label="密码"
                   placeholder="密码"
                   :rules="[{ required: false, message: '请填写密码' }]" />
        <!-- <van-field v-model="password1"
                   type="password"
                   name="确认密码"
                   label="确认密码"
                   placeholder="确认密码"
                   :rules="[{ required: false, message: '请确认密码密码' }]" /> -->
        <van-field v-model="villager.phone"
                   type="text"
                   name="联系方式"
                   label="联系方式"
                   placeholder="联系方式"
                   :rules="[{ required: true, message: '请填写联系方式' }]" />
        <van-field v-model="villager.address"
                   type="text"
                   name="地址"
                   label="地址"
                   placeholder="地址"
                   :rules="[{ required: true, message: '请填写地址' }]" />
        <van-field name="radio"
                   label="单选框">
          <template #input>
            <van-radio-group v-model="villager.sex"
                             direction="horizontal">
              <van-radio :name="0"
                         :value="0">男</van-radio>
              <van-radio :name="1"
                         :value="1">女</van-radio>
            </van-radio-group>
          </template>
        </van-field>
        <div style="margin: 16px;">
          <van-button round
                      block
                      type="danger"
                      native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>
 
<script>
import {
  get_villager,
  patch_villager
} from 'network/request'
import Headergoback from "components/commen/Header/Headergoback"
export default {
  name: "updataProfile",
  data () {
    return {
      title: "编辑我的资料",
      villager: {
      },
      password: ""
    }
  },
  created () {
    get_villager(this.$store.state.userid)
      .then(res => {
        console.log(res);
        for (const [k, v] of Object.entries(res)) {
          if (v != null) {
            this.$set(this.villager, k, v)
          }
        }
        console.log(this.villager);
      })
  },
  components: {
    Headergoback
  },
  methods: {
    onSubmit (values) {
      this.$dialog.confirm({
        title: '编辑资料',
        message: '确认修改吗？',
      })
        .then(() => {
          this.$set(this.villager, "village", Number(this.$store.state.vid))
          this.$set(this.villager, "group", Number(this.$store.state.zid))
          this.$set(this.villager, "password", this.password.toString())
          return patch_villager(this.$store.state.userid, this.villager)
        })
        .catch(() => {

        })
        .then(res => {
          console.log(res);
          if (res != undefined) {
            this.$toast.success("操作成功！")
          } else {
            this.$toast.fail("操作失败！")
          }

        }, err => {
          console.log(res);

          this.$toast.fail("操作失败！")
        });
      // }
    },
  },
}
</script>
<style>
.body {
  background-color: #f6f6f6;
}
</style>