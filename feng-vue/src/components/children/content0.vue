<template>
  <div class="article">
    <div class="title-main">
      <h2 class="title">NGINX配置HTTP HSTS协议</h2>
      <div class="time">2018-09-04 11:28:26</div>
    </div>
    <div class="content">
      <p>Netcraft 公司最近公布了他们检测SSL/TLS网站的研究，
        并指出只有仅仅5%的用户正确执行了HTTP严格传输安全HSTS。本文介绍nginx如何配置HSTS。</p>

      <p>什么是HSTS</p>
      <p>HTTPS(SSL和TLS)确保用户和网站通讯过程中安全，使攻击者难于拦截、修改和假冒。
        当用户手动输入域名或http://链接，该网站的第一个请求是未加密的，使用普通的http。
        最安全的网站立即发送回一个重定向使用户引向到https连接，
        然而，中间人攻击者可能会攻击拦截初始的http请求，从而控制用户后续的回话。
      </p>

      <p>自然而然HSTS应运而生为了解决这一潜在的安全问题。即时用户输入域名或http连接，浏览器将严格的升级到https连接。</p>
      <div>
        <img src="../../img/nginx1.jpg"/>
      </div>
      <p>HSTS</p>
      <p>HSTS如何工作的 </p>
      <p>HSTS策略是从安全的HTTPS站点发送的HTTP响应头部发布的。</p>
      <p style="color: #98c379">
        Strict-Transport-Security: max-age=31536000; includeSubDomains
      </p>
      <p>nginx配置HSTS</p>
      <p>在nginx配置文件上设置HSTS响应头部。</p>
      <p style="color: #98c379">
        add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
      </p>
      <p>
      <p>always 参数确保所有的响应设置该头部，包括内部产生的错误响应。nginx版本早于1.7.5不支持该always参数和内部产生的错误响应不设置该头部信息。</p>
      <p>add_header指令继承规则：</p>
      <p>nginx配置块继承add_header指令所在的封装块，
        因此只需将add_header指令放在顶级的server块。
        此外还有个重要的例外，如果一个块包含了add_header指令本身，
        它不会从封装块继承该头部，你需要重新定义所有的add_header指令。</p>
      <p style="color:  #98c379">
        server {<br/>
          listen 443 ssl;<br/>

          add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;<br/>

          # This 'location' block inherits the STS header<br/>
          location / {<br/>
          root /usr/share/nginx/html;<br/>
          }<br/>

          # Because this 'location' block contains another 'add_header' directive,<br/>
          # we must redeclare the STS header<br/>
          location /servlet {<br/>
          add_header X-Served-By "My Servlet Handler";<br/>
          add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;<br/>
          proxy_pass http://localhost:8080;<br/>
          }<br/>
        }<br/>
      </p>
      <p>测试HTTP严格传输安全：</p>
      <p>一旦用户提出HSTS策略，它的缓存信息期由max-age指定。
        在此期间，浏览器将会拒绝通过未加密的HTTP访问web服务，
        并拒绝给予例外证书错误（如果该网站以前提交了一个有效可信的证书）。
        如果指定了一个includeSubDomanis参数，这些限制也同样适用于当前域下的所有子域。
      </p>
      作者：努力一方
      来源：CSDN
      原文：https://blog.csdn.net/yufei6808/article/details/82380887
      版权声明：本文为博主原创文章，转载请附上博文链接！
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
        img{
          width: 100%;
        }
      }
      img{
        width: 600px;
      }
    }
  }


</style>
