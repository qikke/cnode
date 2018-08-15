<template>
  <div class="content">
    <main>
      <header>
        <span>主页</span>
      </header>
      <div class="user_content">
        <img :src="userInfo.avatar_url" class="avatar">
        <span class="loginname">{{userInfo.loginname}}</span>
        <ul class="userInfo">
          <li class="score">{{userInfo.score}}积分</li>
          <li>3个话题收藏</li>
          <li>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-github"></use>
            </svg>
            https://github.com/{{userInfo.githubUsername}}
          </li>
          <li>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-zhuye"></use>
            </svg>
            @{{userInfo.loginname}}
          </li>
          <li class="createdAt">注册时间{{userInfo.create_at | timeTransform}}</li>
          <li></li>
        </ul>
      </div>

    </main>
    <section>
      <header>最近创建的话题</header>
      <ul class="recent">
        <li v-for="(post,index) in recentTopic" v-if="index<5 || recentTopicMore">
          <Post :post="post"></Post>
        </li>
        <li class="show"><span @click="recentTopicMore = !recentTopicMore" v-if="!recentTopicMore && recentTopic.length>5">查看更多>></span></li>
        <li class="show"><span @click="recentTopicMore = !recentTopicMore" v-if="recentTopicMore && recentTopic.length>5">收起>></span></li>
      </ul>
    </section>

    <section>
      <header>最近参与的话题</header>
      <ul>
        <li v-for="(post,index) in replyTopic" v-if="index<5 || recentTopicMore">
          <Post :post="post"></Post>
        </li>
        <li class="show"><span @click="replyTopicMore = !replyTopicMore" v-if="!replyTopicMore && replyTopic.length>5">查看更多>></span></li>
        <li class="show"><span @click="replyTopicMore = !replyTopicMore" v-if="replyTopicMore && replyTopic.length>5">收起>></span></li>
      </ul>
    </section>

  </div>
</template>


<script>
  import Post from './Post'

  export default {
    name: "User",
    data() {
      return {
        userInfo: {},
        recentTopic: [],
        replyTopic:[],
        recentTopicMore:false,
        replyTopicMore:false,
      }
    },
    components: {
      Post,
    },
    methods: {
      init() {
        this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
          .then(response => {
            this.userInfo = response.data.data
            // console.log(this.userInfo)
            this.getRecentTopic()
            this.getReplyTopic()
          })
          .catch(error => {
            console.log(error)
          })
      },
      getRecentTopic() {
        let _this = this
        this.userInfo.recent_topics.forEach((value) => {
          this.$http.get(`https://cnodejs.org/api/v1/topic/${value.id}`)
            .then(response => {
              _this.recentTopic.push(response.data.data)
            })
            .catch(error => {
              console.log(error)
            })
        })
      },
      getReplyTopic(){
        let _this = this
        this.userInfo.recent_replies.forEach((value) => {
          this.$http.get(`https://cnodejs.org/api/v1/topic/${value.id}`)
            .then(response => {
              _this.replyTopic.push(response.data.data)
            })
            .catch(error => {
              console.log(error)
            })
        })
      }
    },
    created() {
      this.init()
    }
  }
</script>

<style scoped>
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

  .content {
    width: 70%;
    margin: 15px auto;
    color: #778087;
    font-size: 14px;
  }

  .content main, .content section {
    margin-top: 10px;
    background: #ffffff;
  }

  .content header {
    background: #F6F6F6;
    color: #80bd01;
    padding: 10px;
    border-radius: 3px 3px 0 0;
  }

  .user_content {
    padding: 10px;
  }

  .content main .avatar {
    width: 40px;
    height: 40px;
    display: inline-block;
    vertical-align: middle;
    margin-right: 5px;
  }

  .content main .loginname {
    vertical-align: middle;
  }

  .content .userInfo {
    margin-top: 10px;
  }

  .content .userInfo > li {
    margin-top: 10px;
  }

  .score {
    color: #333;
  }

  .createdAt {
    color: #ababab;
    padding-top: 15px;
  }

  .show>span{
    display: inline-block;
    padding:10px;
    cursor: pointer;
  }
</style>