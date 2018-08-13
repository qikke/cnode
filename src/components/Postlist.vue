<template>
  <ul class="postList">
    <li class="nav">
      <ul class="clearfix">
        <li class="active"><a href="#">全部</a></li>
        <li><a href="#">精华</a></li>
        <li><a href="#">分享</a></li>
        <li><a href="#">回答</a></li>
        <li><a href="#">招聘</a></li>
        <li><a href="#">客户端测试</a></li>
      </ul>
    </li>
    <li v-for="post in postListData">
      <a href="#" class="authorImg">
        <img :src="post.author.avatar_url">
      </a>
      <span class="comment">
        <span class="replyMount">{{post.reply_count}}</span><span class="count_seperator">/</span><span
          class="clickMount">{{post.visit_count}}</span>
      </span>
      <span :class="[{active:isActive(post)},'topic']">{{getTopicContent(post)}}</span>
      <router-link :to="{name:'post_content',params:{id:post.id}}"><a href="#" class="titileName">{{post.title}}</a></router-link>
      <a href="" class="latestComment">{{post.last_reply_at | timeTransform}}</a>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "Postlist",
    data() {
      return {
        postListData: '',
        activeClass: ['top', 'good'],
      }
    },
    methods: {
      //获取cnode数据
      getData() {
        let _this = this
        this.$http.get('https://cnodejs.org/api/v1/topics').then(response => {
          _this.postListData = response.data.data
          console.log(_this.postListData)
        }).catch(error => {
          console.log(error)
        })
      },
      isActive(post) {
        return this.activeClass.reduce((prev, curr) => {
          return prev || post[curr]
        }, false)
      },
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
    },
    computed: {},
    filters: {
      timeTransform(value) {
        // 2018-08-11T11:31:51.799Z
        let reg = /^(\d+)-(\d+)-(\d+)T(\d+):(\d+)/
        let [, commentYear, commentMouth, commentDay, commentHour, commentMinute] = value.match(reg)
        let currentDate = new Date()
        let currentYear = currentDate.getFullYear()
        let currentMonth = currentDate.getMonth() + 1
        let currentDay = currentDate.getDate()
        let currentHour = currentDate.getHours()
        let currentMinute = currentDate.getMinutes()

        if (currentYear != commentYear) {
          return (currentYear - commentYear) + '年前'
        } else if (currentMonth != commentMouth) {
          return (currentMonth - commentMouth) + '月前'
        } else if (currentDay != commentDay) {
          return (currentDay - commentDay) + '天前'
        } else if (commentHour != currentHour) {
          return (currentHour - commentHour) + '小时前'
        } else if (commentMinute != currentMinute) {
          return (currentHour - commentHour) + '分钟前'
        } else {
          return '刚刚'
        }
      }
    },
    mounted() {
      this.getData()
    }
  }
</script>

<style scoped>
  .postList {
    width: 60%;
    margin: 0 auto;
    background: white;
    margin-top: 15px;
  }

  .postList > li:not(:first-child) {
    position: relative;
    border-bottom: 1px solid #F0F0F0;
    padding: 10px;
    line-height: 30px;
    display: block;
  }

  .postList > li:not(:first-child):after {
    content: '';
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }

  .postList > li:not(:first-child):hover {
    background: #F6F6F6;
  }

  .authorImg > img {
    width: 30px;
    height: 30px;
    display: inline-block;
    vertical-align: middle;
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
    left:164px;
    top:13px;
    height: 30px;
    max-width: 700px;
    overflow:hidden;
  }

  .latestComment {
    display: inline-block;
    vertical-align: middle;
    float: right;
    color: #778087;
    font-size: 11px;
  }

  .nav {
    background: #F6F6F6;
  }

  .nav li {
    float: left;
    margin: 0 10px;
    font-size: 14px;
    padding: 10px;
  }

  .nav li > a {
    color: #80bd01;
    padding: 2px;
    border-radius: 3px;
  }

  .nav li.active > a {
    background: #80bd01;
    color: #fff;
  }

</style>