<template>
  <div class="article">
    <div class="title-main">
      <h2 class="title">Python机器人微信自动回复</h2>
      <div class="time">2018-10-08 16:18:32</div>
    </div>
    <div class="content">
      <p>
        大家在平时群里经常会遇到群里有机器人自动回复，
        或者遇到加了一些微信好友，能够实现自动回复。
        比如下图这个返利的公众号。
      </p>
      <img src="../../img/robot/1.png">
      <p>大家应该都比较好奇，这是怎么实现的呢？微信好像也没有提供这样的工具吧？</p>
      <p>下面我就简单介绍下微信机器人的实现。首先我们需要借助的工具有wxpy、图灵机器人。Python的安装我在这里就不在赘述，直接将wxpy的安装和图灵机器人的注册。
        考虑到PYPI 官方镜像在国内下载可能速度很慢，我们这边用豆瓣的镜像，通过下面脚本进行下载：</p>
      <p>pip install -U wxpy -i https://pypi.doubanio.com/simple/</p>
      <img src="../../img/robot/2.png">
      <p>
        下载及安装好wxpy，我们注册图灵机器人。
      </p>
      <p>在图灵机器人官网（http://www.tuling123.com/）注册一个账号，点击右上角的头像进入个人中心</p>
      <img src="../../img/robot/3.png">
      <p>进入以后点击创建机器人，选择你需要应用的终端、行业、场景等，基本上你随意选择就好。</p>
      <img src="../../img/robot/4.png">
      <p>创建以后自动跳转下一个界面，然后记住apikey。</p>
      <img src="../../img/robot/5.png">
      <p>接下来就是最重要的写代码的环节。很简单，7行代码解决问题。</p>
      <p style="color: aquamarine">
        from wxpy import<br/>
        # 实例化，并登录微信<br/>
        bot = Bot(cache_path=True)<br/>
        # 调用图灵机器人API<br/>
        tuling = Tuling(api_key='1a19c7b1520b41a99ba0********')<br/>
        @bot.register()<br/>
        def auto_reply(msg):<br/>
        tuling.do_reply(msg)<br/>
        embed()<br/>
      </p>
      <p>点击运行以后，需要扫一个二维码进行微信登录，然后见到一下提示，说明你的微信机器人已经创建完成，并已经开始运行。
      </p>
      <img src="../../img/robot/6.png">
      <p>然后我们测试下效果，随便找个人</p>
      <img src="../../img/robot/7.png">
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
      img{
        display: block;
        margin: 0 auto;
        max-width: 600px;
      }
    }
  }


</style>
