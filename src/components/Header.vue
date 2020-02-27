<template>
  <header class="header">
    <div class="container clear-fix">
      <ul class="header-left clear-fix">
        <li class="site-header-menu">
          <div class="header-menu">
            中国大陆<span class="site-nav-icon"></span>
            <div class="site-header-switch">
              <ul>
                <li v-for="(value, index) in siteHeaderSwitch" :key="index" v-text="value"></li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <div class="header-menu">
            <a href="#" @click.prevent class="site-header-sign">亲，请登录</a>
            <a href="#" @click.prevent>免费注册</a>
          </div>
        </li>
        <li>
          <div class="header-menu taobao-on-phone">
            <a href="#" @click.prevent>手机逛淘宝</a>
          </div>
        </li>
      </ul>
      <ul class="header-right clear-fix">
        <li>
          <div class="header-menu my-taobao has-drop-bar">
            <a href="#" @clic.prevent>我的淘宝</a>
            <i class="more-arrow"></i>
            <div class="nav-header-drop-bar">
              <ul>
                <li v-for="(value, index) in myTaoBao" :key="index" v-cloak>
                  <a href="#">{{value}}</a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <div class="header-menu">
            <i class="shopping-car"></i>
            <a href="#" @clic.prevent>购物车</a>
            <i class="more-arrow"></i>
          </div>
        </li>
        <li>
          <div class="header-menu has-drop-bar">
            <i class="favourite-card"></i>
            <a href="#" @clic.prevent>收藏夹</a>
            <i class="more-arrow"></i>
            <div class="nav-header-drop-bar">
              <ul>
                <li v-for="(value, index) in favouriteCard" :key="index" v-cloak>
                  <a href="#">{{value}}</a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <div class="header-menu category">
            <a href="#" @click.prevent>商品分类</a>
          </div>
        </li>
        <li>
          <div class="header-menu line">
            <span class="line" style="color: #dddddd">|</span>
          </div>
        </li>
        <li>
          <div class="header-menu qn has-drop-bar">
            <a href="#" @click.prevent>千牛卖家中心</a>
            <i class="more-arrow"></i>
            <div class="nav-header-drop-bar">
              <ul>
                <li v-for="(value, index) in qn" :key="index" v-cloak>
                  <a href="#">{{value}}</a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <div class="header-menu call-server has-drop-bar">
            <a href="#" @click.prevent>联系客服</a>
            <i class="more-arrow"></i>
            <div class="nav-header-drop-bar">
              <ul>
                <li v-for="(value, index) in callServer" :key="index" v-cloak>
                  <a href="#">{{value}}</a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <div class="header-menu web-tag">
            <i class="web-list"></i>
            <a href="#" @click.prevent>网站导航</a>
            <i class="more-arrow"></i>
            <div class="nav-header-web-more-bar">
              <ul class="clear-fix">
                <li class="web-more-item">
                  <div class="topical-market">
                    <h4>主题市场</h4>
                    <ul class="web-more-detail">
                      <li
                        v-for="(value, index) in topicalMarket"
                        :key="index"
                      >
                        <a href="#" v-text="value"></a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="web-more-item">
                  <div class="special-market">
                    <h4>特色市场</h4>
                    <ul class="web-more-detail">
                      <li
                        v-for="(value, index) in specialMarket"
                        :key="index"
                      >
                        <a href="#" v-text="value"></a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="web-more-item">
                  <div class="ali-app">
                    <h4>阿里APP</h4>
                    <ul class="web-more-detail">
                      <li
                        v-for="(value, index) in ALiAPP"
                        :key="index"
                      >
                        <a href="#" v-text="value"></a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="web-more-item">
                  <div class="highlights">
                    <h4>精彩推荐集</h4>
                    <ul class="web-more-detail">
                      <li
                        v-for="(value, index) in highlights"
                        :key="index"
                      >
                        <a href="#" v-text="value"></a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <bar-advertizement></bar-advertizement>
  </header>
</template>

<script>
  import BarAdvertizement from '@/components/Header/BarAdvertizement';

  import '@/assets/styles/header.less';

  export default {
    name: "Header",
    components: {BarAdvertizement},
    data() {
      return {
        siteHeaderSwitch: ['全部', '中国大陆', '中国香港', '中国澳门', '韩国', '马来西亚', '澳大利亚', '新加坡', '新西兰', '加拿大', '日本'],
        myTaoBao: ['已买到的宝贝', '我的足迹'],
        favouriteCard: ['收藏的宝贝', '收藏的店铺'],
        qn: ['免费开店', '已卖出的宝贝', '出售中的宝贝', '卖家服务市场', '卖家培训中心', '体检中心', '问商友'],
        callServer: ['消费者客服', '卖家客服'],
        topicalMarket: [
          '女装', '男装', '内衣', '鞋靴', '箱包', '婴童', '家电', '数码', '手机', '美妆', '珠宝', '眼镜', '手表',
          '运动', '户外', '乐器', '游戏', '动漫', '影视', '美食', '鲜花', '宠物', '农资', '房产', '装修', '建材',
          '家居', '百货', '汽车', '二手车', '办公', '定制', '教育', '卡券', '本地'
        ],
        specialMarket: [
          '全球购', '极有家', '阿里拍卖', '淘宝众筹', '飞猪', '农资', '天天特卖', 'Outlets', '淘抢购', '试用', '量贩团', '阿里翻译',
        ],
        ALiAPP: [
          '淘宝', '天猫', '支付宝', '聚划算', '飞猪', '蚂蚁聚宝', '咸鱼', '钉钉', '高德地图', '虾米音乐', '淘票票',
          '菜鸟裹裹', '阿里云', '网商银行', '阿里邮箱', '阿里众包'
        ],
        highlights: [
          '余额宝', '大牌捡宝', '淘公仔', '浏览器', '淘宝香港', '淘宝台湾', '淘宝全球', '淘宝东南亚', '闺蜜淘货', '大众评审',
          '淘工作', '阿里巴巴认证'
        ],
      };
    }
  }
</script>

<style scoped>

</style>
