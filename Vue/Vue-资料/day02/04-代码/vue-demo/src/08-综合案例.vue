<template>
  <div class="article-case">
    <!-- 展示给用户看的 -->
    <div class="form-preview" v-if="!edit">
      <h2>{{ article.title }}</h2>
      <small v-if="article.channel">{{ article.channel }}</small>
      <a class="btn-edit" href="#" @click="showEdit">编辑</a>
    </div>

    <!-- 编辑状态 -->
    <div class="form-edit" v-else>
      <div class="form-item">
        <div class="label">标题：</div>
        <div class="input">
          <input v-model="form.title" type="text" placeholder="请输入标题" />
        </div>
      </div>
      <div class="form-item">
        <div class="label">频道：</div>
        <div class="input">
          <select v-model="form.channel">
            <option value="">请选择频道</option>
            <option value="前端">前端</option>
            <option value="运维">运维</option>
            <option value="测试">测试</option>
          </select>
        </div>
      </div>
      <div class="form-item">
        <div class="label"></div>
        <div class="input">
          <button class="cancel" @click="cancel">取消</button>
          <button class="submit" @click="submit">确认</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 实现思路：
// 1. 控制显示隐藏
// 2. 进入编辑状态，输入框需要回显 （设置输入框的值）
//    (1) v-model 和 表单元素绑定
//    (2) 一显示的时候，设置绑定的变量的值

export default {
  name: 'ArticleCase',
  data() {
    return {
      edit: false, // 标记是否在编辑状态
      article: {
        title: '如何成为一名前端老鸟？',
        channel: '前端',
      },
      form: {
        title: '',
        channel: '',
      },
    };
  },
  methods: {
    showEdit () {
      this.edit = true // 改为编辑显示状态
      // 需要将文章的标题和频道，设置给 form
      this.form = {
        ...this.article
      }
    },
    cancel () {
      this.edit = false
    },
    submit () {
      this.edit = false // 关闭编辑状态
      // 提交修改，将form的内容更新给article
      this.article = {
        ...this.form
      }
    }
  },
};
</script>

<style scoped lang="less">
.form-preview {
  position: relative;
  display: flex;
  align-items: center;
}
.form-preview h2 {
  font-size: 18px;
  font-weight: normal;
}
.form-preview small {
  font-size: 12px;
  display: inline-block;
  padding: 2px 6px;
  background: #27ba9b;
  color: #fff;
  border-radius: 2px;
  transform: scale(0.8);
}
.form-preview .btn-edit {
  font-size: 12px;
  display: none;
  text-decoration: none;
  color: #069;
  margin-left: 20px;
}
.form-preview:hover .btn-edit {
  display: block;
}
.form-edit {
  padding-top: 20px;
}
.form-item {
  display: flex;
  margin-bottom: 20px;
  align-items: center;
}
.form-item .label {
  width: 60px;
  text-align: right;
  font-size: 14px;
}
.form-item .input {
  flex: 1;
}
.form-item input,
.form-item select {
  appearance: none;
  outline: none;
  border: 1px solid #ccc;
  width: 200px;
  height: 40px;
  box-sizing: border-box;
  padding: 10px;
  color: #666;
}
.form-item input::placeholder {
  color: #666;
}
.form-item .cancel,
.form-item .submit {
  appearance: none;
  outline: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 10px;
  margin-right: 10px;
  font-size: 12px;
  background: #ccc;
}
.form-item .submit {
  border-color: #069;
  background: #069;
  color: #fff;
}
</style>