<template>
  <div class="feedback">
    <div class="item">
      <p class="beforeform">
        温馨提示：
        在下面表单中填写你的意见建议吧！
        每天最多只能提交三条意见建议哦，请谨慎填写！
      </p>

    </div>
    <div class="item">

      <div class="item title">
        <span> 标题：</span>
        <input type="text"
               v-model="title">
        <span style="color:red">{{message1}}</span>
      </div>

      <div class="textbody">
        <textarea v-model="content"
                  placeholder="填写意见建议内容"></textarea>
      </div>
      <span style="color:red">{{message2}}</span>
    </div>
    <div class="item">
      <div class="imgs">
        <div>
          <label for="shangchuan">
            <span>+</span>
          </label>
          <input type="file"
                 id="shangchuan"
                 capture='camera'
                 accept="image/png,image/jpg,image/gif,image/JPEG"
                 @change="imgPreview($event)"
                 multiple="multiple" />
        </div>
        <div id="imgs">
          <div v-for="(img,index) in myimgs"
               :key="index"
               @click="deleteimg(index)">
            <img :src="img">
          </div>

        </div>
      </div>
      <p>最多只能上传三张图片</p>
    </div>
    <span class="label">请选择意见建议类型:</span>
    <div class="item">
      <!-- <option :value="0"></option> -->
      <van-radio-group v-model="type"
                       direction="horizontal">
        <van-radio v-for="(t ,index) in types"
                   :key="index"
                   :value="t.id"
                   :name="t.id"
                   checked-color="#cf2d28">{{t.name}}</van-radio>
      </van-radio-group>
      <br>
      <div> <span style="color:red">{{message3}}</span></div>
    </div>
    <span class="label">是否匿名:</span>
    <div class="item">
      <van-radio-group v-model="ispublic"
                       direction="horizontal">
        <van-radio :name="false"
                   :value="false"
                   checked-color="#cf2d28">非匿名</van-radio>
        <van-radio :name="true"
                   :value="true"
                   checked-color="#cf2d28">匿名</van-radio>
      </van-radio-group>

    </div>
    <div style="text-align:center">
      <!-- <button @click="tijiao">提交</button> -->
      <van-button type="primary"
                  @click.stop="tijiao"
                  color="#cf2d28">提交</van-button>
      <!-- <van-button type="primary"
                  @click.stop="tijiao">提交</van-button> -->
    </div>
  </div>
</template>
<script>
import {
  post_feedback,
  post_file
} from 'network/request'
import {
  getObjectURL
} from 'assets/js/uploadimg'
export default {
  name: "feedback",
  data () {
    return {
      types: [
        { id: 0, name: "资金" },
        { id: 1, name: "资产" },
        { id: 2, name: "资源" },
        { id: 3, name: "党务" },
        { id: 4, name: "村务" },
        { id: 5, name: "其他" }
      ],
      title: "",
      content: "",
      type: -1,
      myimgs: [],
      message1: "",
      message2: "",
      message3: "",
      myimgs1: [],
      ispublic: false,
      relatedDocuments: []
    }
  },
  created () {

    this.userid = this.$store.state.userid
  },
  methods: {
    imgPreview (e) {
      if (this.myimgs.length === 3) {
        alert("一次反馈图片不能超过三张！")
      } else {
        let newsrc = getObjectURL(e.srcElement.files[0]);
        this.myimgs.push(newsrc)
        this.myimgs1.push(e.srcElement.files[0])
      }
    },
    deleteimg (index) {
      this.myimgs.splice(index, 1)
      this.myimgs1.splice(index, 1)
    },
    upload () {
      let ps = this.myimgs1.map(function (img) {
        console.log(img);
        let formdata = new FormData()
        formdata.append("file", img)
        return post_file(formdata)
      })
      Promise.all(ps)
        .then(posts => {
          if (posts.length != 0) {
            this.relatedDocuments.push(...posts)
          }
          let obj = {
            "title": this.title,
            "content": this.content,
            "type": this.type,
            "anonymous": this.ispublic,
            "village": Number(this.$store.state.vid),
            "villager": Number(this.$store.state.userid),
            "relatedDocuments": this.relatedDocuments
          }
          post_feedback(obj).then(res => {
            console.log(res);
            this.$toast.success("上传成功！")
          }, err => {
            this.$toast.fail("上传失败！")
          })
          // this.$toast.success("修改成功！")
        }, err => {
          this.$toast.fail("图片上传失败！")
          // let obj = {
          //   "title": this.title,
          //   "content": this.content,
          //   "type": this.type,
          //   "anonymous": this.ispublic,
          //   "village": Number(this.$store.state.vid),
          //   "villager": Number(this.$store.state.userid),
          //   "relatedDocuments": this.relatedDocuments
          // }
          // post_feedback(obj).then(res => {
          //   console.log(res);
          //   this.$toast.success("上传成功！")
          // })
        })
    },
    tijiao () {
      if (this.title === "") {
        this.message1 = "标题不能为空！"
      } else {
        if (this.content === "") {
          this.message2 = "反馈内容不能为空！"
        } else {
          if (this.type === -1) {
            this.message3 = "请选择反馈类型"
          } else {
            this.$dialog.confirm({
              title: '意见建议',
              message: '确认提交该条意见建议吗？',
            })
              .then(() => {
                this.upload()
              })
              .then(res => {
                console.log(res);
              })
          }
        }
      }
    }
  },
}
</script>
<style>
.van-radio {
  margin-bottom: 1rem;
}
</style>
<style scoped>
.label {
  margin-left: 10px;
}
.feedback {
  margin-top: 6vh;
  background-color: #f6f6f6;
}
.beforeform {
  /* color: #888888; */
  color: orange;
  text-align: left;
  letter-spacing: 2px;
  line-height: 1.6rem;
}
.feedback textarea {
  margin: 0px;
  height: 10rem;
  border: none;
  width: 100%;
  letter-spacing: 2px;
  color: #888888;
  outline: none;
}
.feedback .item {
  margin: 10px 0px;
  background: white;
  padding: 10px;
}
.van-radio-group {
  line-height: 2rem;
}
input {
  padding: 5px;
  border: 1px solid #cccccc;
}
.textbody {
  border: 1px solid #cccccc;
  padding: 10px;
}
.imgs {
  display: flex;
}
#imgs {
  flex: auto;
  display: flex;
  /* padding: 0 4px; */
}
#imgs div {
  width: 4rem;
  height: 4rem;
  margin: 0 1rem;
  overflow: hidden;
  text-align: center;
  border-radius: 1rem;
}

#imgs img {
  width: 10rem;
  height: auto;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
label {
  width: 4rem;
  height: 4rem;
  text-align: center;
  line-height: 4rem;
  display: inline-block;
  border-radius: 1rem;
  background-color: #efefef;
}
#shangchuan {
  display: none;
}
select {
  padding: 5px;
  width: 6rem;
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid #cccccc;
}
button {
  width: 8rem;
  text-align: center;
  color: white;
  letter-spacing: 4px;
}
p {
  margin-top: 1rem;
  text-align: right;
  color: #aaaaaa;
  font-size: 0.9rem;
}
.happy {
  color: darkgreen;
}
.sed {
  color: #cf2d28;
}
</style>
