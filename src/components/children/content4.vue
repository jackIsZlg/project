<template>
  <div class="article">
    <div class="title-main">
      <h2 class="title">vue+express+pm2+nginx前后端搭建</h2>
      <div class="time">2018年11月22日 20:05:26</div>
    </div>
    <div class="content">
      <h3>一、LINUX上安装node环境：</h3>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods:{

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .article{
    font-size: 16px;
    text-align: left;
    padding: 0px 20px;
    box-sizing: border-box;
    .title-main{
      .time{
        font-size: 12px;
        color: #858585;
      }
    }
    .content{
      border-top: 1px solid #CCC;
      word-wrap:break-word ;
      p{
        font-size: 16px;
      }
    }
  }


</style>
