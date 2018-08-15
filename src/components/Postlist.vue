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
     <Post :post = "post"></Post>
    </li>
  </ul>
</template>

<script>
  import Post from '../components/Post'
  export default {
    name: "Postlist",
    components:{
      Post,
    },
    data() {
      return {
        postListData: '',

      }
    },
    methods: {
      //获取cnode数据
      getData() {
        let _this = this
        this.$http.get('https://cnodejs.org/api/v1/topics').then(response => {
          _this.postListData = response.data.data
        }).catch(error => {
          console.log(error)
        })
      },


    },
    mounted() {
      this.getData()
    }
  }
</script>

<style scoped>
  .postList {
    width: 60%;
    margin: 15px auto 0 auto;
    background: white;
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

  .nav li  a {
    color: #80bd01;
    padding: 2px;
    border-radius: 3px;
  }

  .nav li.active  a {
    background: #80bd01;
    color: #fff;
  }

</style>