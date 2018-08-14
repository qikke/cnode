<template>
  <div class="artical">
    <div class="panel">
      <header>
        <div class="title">{{postInfo.title}}</div>
        <ul class="clearfix">
          <li>• 发布于{{postInfo.create_at | timeTransform}}</li>
          <li>• 作者{{postInfo.author.loginname}}</li>
          <li>• {{postInfo.visit_count}}次浏览</li>
          <li>• 来自{{postInfo.tab | comeFrom}}</li>
        </ul>
      </header>
      <main v-html="postInfo.content"  id="content"></main>
    </div>
    <div class="reply">
      <ul>
        <div class="reply-header">{{postInfo.replies.length}}回复</div>
        <li v-for="(comment,index) in postInfo.replies">
          <div class="author_content clearfix">
            <a href="#"><img :src="comment.author.avatar_url" alt=""></a>
            <div class="user_info">
              <a href="#">{{comment.author.loginname}}</a>
              <span>{{index+1}}楼 •{{comment.create_at | timeTransform}}</span>
            </div>
          </div>
          <div v-html="comment.content"></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Artical",
    data() {
      return {
        postInfo: {},
      }
    },
    methods: {
      getData() {
        let _this = this
        this.$http.get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)
          .then(response => {
            console.log(response.data.data)
            _this.postInfo = response.data.data
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
    filters: {
      comeFrom(value) {
        if (value === 'share') {
          return '分享'
        } else if (value === 'ask') {
          return '问答'
        }
      }
    },
    created() {
      this.getData()
    }
  }
</script>

<style>
  @import "../assets/markdown-github.css";
  .panel,.reply{
    width: 70%;
    margin: 15px auto 0 auto;
    background: white;

  }

  .panel > header {
    padding: 10px;
    border-bottom: 1px solid #ddd;
  }

  .panel > header .title {
    font-size: 22px;
    font-weight: 700;
    margin: 8px 0;
  }

  .panel > header ul > li{
    float:left;
    font-size: 12px;
    color: #838383;
    display:inline-block;
    margin-right: 10px;
  }

  .markdown-text img {
    width: 92% !important;
  }

  .reply{

  }

  .reply .reply-header{
    padding: 10px;
    background-color: #f6f6f6;
    border-radius: 3px 3px 0 0;
  }

  .reply li{
    border-top: 1px solid #f0f0f0;
    padding: 10px;
    margin-bottom: 10px;
  }
  .author_content>a,.user_info{
    float:left;
  }

  .user_info{
    font-size: 14px;
    margin-left: 10px;
  }

  .user_info>a{
    color: #666;
    text-overflow: ellipsis;
    font-size: 12px;
    font-weight: 700;
  }

  .user_info>span{
    font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,sans-serif!important;
    word-break: break-word;
  }
  .author_content img{
    width:30px;
    height:30px;
  }

</style>