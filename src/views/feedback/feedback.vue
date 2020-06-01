<template>
  <div class="feedback">
    <div class="item title">
      <span> 标题：</span>
      <input type="text"
             v-model="title">
      <span style="color:red">{{message1}}</span>
    </div>
    <div class="item">
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
      <p>做多只能上传三张图片</p>
    </div>
    <div class="item">
      请选择意见建议类型:
      <select v-model="type">
        <option v-for="(t ,index) in types"
                :key="index"
                :value="t.id">{{t.name}}</option>
      </select>
    </div>
    <div style="text-align:center">
      <button @click="tijiao">提交</button>
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
import {
  get_feedback_type,
  get_zhenid_uid,
  post_tijiao_feedback
} from 'network/request'
import {
  getObjectURL
} from 'assets/js/uploadimg'
import uploadsign from "components/commen/uploadsign"
export default {
  name: "feedback",
  components: {
    uploadsign
  },
  data () {
    return {
      types: [],
      title: "",
      content: "",
      type: 1,
      myimgs: [],
      zhenid: 1,
      userid: 1,
      message1: "",
      message2: "",
      isshow: false,
      icon: "iconfont icon-xiaolianchenggong happy",
      sign: "成功!",
      myimgs1: []
    }
  },
  created () {
    get_feedback_type()
      .then(res => {
        this.types = res.backtype.map(t => {
          return {
            id: t.bKey,
            name: t.bType
          }
        })
      })
    this.userid = this.$store.state.userid
    get_zhenid_uid(this.userid)
      .then(res => {
        this.zhenid = res.zhen.zhenId
      })
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
    },
    tijiao () {
      if (this.title === "") {
        this.message1 = "标题不能为空！"
      } else {
        if (this.content === "") {
          this.message2 = "反馈内容不能为空！"
        } else {
          if (confirm("确认提交该反馈吗？")) {
            let formdata = new FormData()
            formdata.append("userId", this.userid);
            formdata.append("fTitle", this.title);
            formdata.append("fType", this.type);
            formdata.append("fContent", this.content);
            formdata.append("fBeiyong1", this.zhenid);
            for (const img of this.myimgs1) {
              formdata.append("photo", img);
              // console.log(img);
            }
            post_tijiao_feedback(formdata)
              .then(res => {
                console.log(res);
                if (res.statue === "success") {
                  this.icon = "iconfont icon-xiaolianchenggong happy"
                  this.sign = "成功!"
                }
                if (res.statue === "存在敏感词") {
                  this.icon = "iconfont icon-chucuo sed"
                  this.sign = "存在敏感词，请重新编译！"
                }
                if (res.statue === "超过每日最大意见建议次数") {
                  this.icon = "iconfont icon-chucuo sed"
                  this.sign = "今日提交数已达到3次！"
                }
                this.isshow = true
                setTimeout(() => {
                  this.isshow = false
                }, 2900)
              })
          }
        }
      }

    }
  },
}
</script>
<style scoped>
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
  padding: 0 1rem;
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
  border: 1px solid #cccccc;
}
button {
  width: 8rem;
  text-align: center;
  color: white;
  background: #cf2d28;
  padding: 6px;
  border-radius: 6px;
  border: none;
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
