<template>
  <div class="post">
    <a href="#" class="authorImg">
      <router-link :to="{name:'user',params:{name:post.author.loginname}}">
        <img :src="post.author.avatar_url">
      </router-link>
    </a>
    <span class="comment">
        <span class="replyMount">{{post.reply_count}}</span><span class="count_seperator">/</span><span
        class="clickMount">{{post.visit_count}}</span>
      </span>
    <span :class="[{active:isActive(post)},'topic']">{{getTopicContent(post)}}</span>
    <router-link :to="{name:'post_content',params:{id:post.id}}">
      <a href="#" class="titileName">{{post.title}}</a>
    </router-link>
    <a href="" class="latestComment">{{post.last_reply_at | timeTransform}}</a>
  </div>

</template>

<script>
  export default {
    name: "Post",
    props:['post'],
    data(){
      return {
        activeClass: ['top', 'good'],
      }
    },
    methods:{
      getTopicContent(post) {
        if (post.top) {
          return '置顶'
        } else if (post.good) {
          return '精华'
        } else if (post.tab === 'share') {
          return '分享'
        } else if (post.tab === 'ask') {
          return '问答'
        } else {
          return '无'
        }
      },
      isActive(post) {
        return this.activeClass.reduce((prev, curr) => {
          return prev || post[curr]
        }, false)
      },
    },
  }
</script>

<style scoped>

  .post{
    position: relative;
    border-bottom: 1px solid #F0F0F0;
    padding: 10px;
    line-height: 30px;
  }

  .post:hover{
    background: #F6F6F6;
  }
  .comment {
    display: inline-block;
    vertical-align: middle;
    width: 70px;
    text-align: center;
  }

  .count_seperator {
    color: #333;
    font-size: 12px;
  }

  .replyMount {
    color: #9e78c0;
    font-size: 14px;
  }

  .clickMount {
    font-size: 12px;
    color: #b4b4b4;

  }
  .authorImg  img {
    width: 30px;
    height: 30px;
    display: inline-block;
    vertical-align: middle;
  }
  .topic {
    padding: 2px 4px;
    vertical-align: middle;
    background: #E5E5E5;
    color: #fff;
    font-size: 12px;
    border-radius: 3px;
  }

  .topic.active {
    background: #80bd01;
  }

  .titileName {
    position: absolute;
    left: 164px;
    top: 13px;
    height: 30px;
    max-width: 700px;
    overflow: hidden;
  }

  .latestComment {
    display: inline-block;
    vertical-align: middle;
    float: right;
    color: #778087;
    font-size: 11px;
  }
</style>