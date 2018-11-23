<template>
  <div>
      <div class="oneArt" @click="goToDetail(0)">
          <div class="title">NGINX配置HTTP HSTS协议</div>
          <div class="content">Netcraft 公司最近公布了他们检测SSL/TLS网站的研究，
            并指出只有仅仅5%的用户正确执行了HTTP严格传输安全HSTS。本文介绍nginx如何配置HSTS。
            什么是HSTS HTTPS(SSL和TLS)确保用户和网站通讯过程中安全，使攻击者难于拦截、修改和假冒。
            当用户手动输入域名或h...</div>
          <div class="tip">
            <span class="time">2018-09-04 11:28:26</span>
          </div>
      </div>
      <div class="oneArt" @click="goToDetail(1)">
        <div class="title">vue+express+pm2+nginx前后端搭建</div>
        <div class="content">该配置代码主要是前后端一致，前端展示界面使用vue框架，后端接口编写使用express，
          管理后端用的就是pm2做管理，nginx转发接口及页面。</div>
        <div class="tip">
          <span class="time">2018-09-17 10:12:56</span>
        </div>
      </div>
      <div class="oneArt" @click="goToDetail(2)">
        <div class="title">Python机器人微信自动回复</div>
        <div class="content">大家在平时群里经常会遇到群里有机器人自动回复，
          或者遇到加了一些微信好友，能够实现自动回复。对此需要借助的工具有wxpy、图灵机器人进行相应的配置。</div>
        <div class="tip">
          <span class="time">2018-10-08 16:18:32</span>
        </div>
      </div>
      <div class="oneArt" @click="goToDetail(3)">
        <div class="title">数据调度挖掘技术研究----高效提取数据中的价值</div>
        <div class="content">随着互联网的快速发展，以及云计算技术的推广，海量数据不断产生。
          对于企业而言，这些海量数据变得越来越难处理。对于RDS的压力就会呈指数增加，
          最主要的表现体现在IOPS的增加和CPU使用率的提升。这就需要相应的技术挖掘了。</div>
        <div class="tip">
          <span class="time">2018-11-14 09:52:05</span>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: ''
      }
    },
    methods:{
      goToDetail(id){
        this.$router.push(`/content${id}`);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
   .oneArt{
     font-size: 16px;
     width: 100%;
     text-align: left;
     padding: 10px 20px;
     box-sizing: border-box;
     cursor: pointer;
     .title{
       font-weight: bold;
       font-size: 20px;
     }
     .tip{
       .time{
         font-size: 12px;
         color: #858585;
       }
     }
     .content{
       color: #4f4f4f;
       word-wrap:break-word ;
     }
     border-bottom: 1px solid #CCC;
   }
</style>
