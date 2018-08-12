<template>
  <div class="topNavBar">
    <div class="container clearfix">
      <a class="logo"><img src="https://o4j806krb.qnssl.com/public/images/cnodejs_light.svg"></a>
      <ul class="nav clearfix">
        <li><a href="#">首页</a></li>
        <li><a href="#">新手入门</a></li>
        <li><a href="#">API</a></li>
        <li><a href="#">关于</a></li>
        <li><a href="#">注册</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped>


  .topNavBar {
    background: #444444;
    width:100%;
  }

  .container {
    width:90%;
    min-width: 960px;
    max-width: 1400px;
    margin:auto;
    padding: 5px 0;
  }
  .container .logo{
    display: inline-block;
    height: 40px;
  }
  .container img{
    height: 37px;
    width: 134px;
  }

  .nav {
    float: right;
  }

  .nav > li {
    float: left;
    color:#CCCCCC;
    font-size: 13px;
  }

  .nav >li > a{
    display:inline-block;
    padding:12px 15px;
  }

  .clearfix:after {
    content: '';
    display: block;
    clear: both;
  }
</style>