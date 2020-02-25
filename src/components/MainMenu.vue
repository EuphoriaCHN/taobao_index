<template>
  <div class="main-menu">
    <div class="container">
      <div class="display-dist">
        <section class="menu-list">
          <ul>
            <li
              v-for="(value, index) in menuList"
              :key="index"
            >
              <a href="#" v-text="value[0]"></a>
              <span>/</span>
              <a href="#" v-text="value[1]"></a>
              <span>/</span>
              <a href="#" v-text="value[2]"></a>
            </li>
          </ul>
        </section>
        <div class="goods-show">
          <div class="rotation-charts">
            <div class="adv-rotation">
              <ul>
                <li
                  v-for="(value, index) in advRotation"
                  :key="index"
                >
                  <a href="#"><img :src="value" alt="" /></a>
                </li>
              </ul>
            </div>
            <div class="tmall-rotation">
              <div class="tmall-title">
                <span>
                  <img src="../assets/images/tmall.png" alt="">
                </span>
                <em>理想生活上天猫</em>
              </div>
              <div class="tmall-images">
                <ul class="process-bar">
                  <li></li>
                </ul>
                <ul class="images-rotation">
                  <li class="many-images">
                    <ul class="clear-fix">
                      <li
                        v-for="(value, index) in manyImages"
                        :key="index"
                      >
                        <a href="#"><img :src="value" alt="" /></a>
                      </li>
                    </ul>
                  </li>
<!--                  <li-->
<!--                    class="two-images"-->
<!--                    v-for="(value, index) in tmallGoodsShow"-->
<!--                    :key="index"-->
<!--                  >-->
<!--                    <img :src="value[0]" alt="" />-->
<!--                    <img :src="value[1]" alt="" />-->
<!--                  </li>-->
                </ul>
              </div>
            </div>
          </div>
          <div class="media-control">
            <div class="top">
              <img src="../assets/images/50307-0-lubanu.jpg_290x290q90.jpg" alt="">
            </div>
            <div class="bottom">
              <h5>今日特卖</h5>
              <img src="../assets/images/TB1j4LLKpXXXXcbaXXXSutbFXXX.jpg" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="login-and-more">
        <div class="login">
          <div class="member-bd">
            <div class="wrapper">
              <a href="#">
                <img src="../assets/images/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_50x50.jpg" alt="" />
              </a>
            </div>
            <div class="hello">
              <span>Hi! 你好</span>
            </div>
            <div class="tjb">
              <a href="#" class="member-punch">
                <span></span>领淘金币抵钱
              </a>
              <a href="#" class="member-club">
                <span></span>会员俱乐部
              </a>
            </div>
          </div>
          <div class="member-ft">
            <div class="member-button">
              <a href="#">登录</a>
              <a href="#">注册</a>
              <a href="#">开店</a>
            </div>
          </div>
        </div>
        <a href="#" class="report">网上有害信息举报区 ></a>
        <div class="notice">
          <ul class="notice-hd">
            <li class="active"><a href="#">公告</a></li>
            <li><a href="#">规则</a></li>
            <li><a href="#">论坛</a></li>
            <li><a href="#">安全</a></li>
            <li><a href="#">公益</a></li>
          </ul>
          <ul class="notice-bd">
            <li class="hotpoint">
              <a href="#">95工艺周阿里、腾讯等六家公司同台联合做公益</a>
            </li>
            <li><a href="#">淘宝造物节之城市秘密</a></li>
            <li><a href="#">聚划算88红包省钱卡</a></li>
          </ul>
        </div>
        <div class="j-module">
          <ul>
            <li>
              <a href="#"><span></span><p>充话费</p></a>
            </li>
            <li>
              <a href="#"><span></span><p>旅行</p></a>
            </li>
            <li>
              <a href="#"><span></span><p>车险</p></a>
            </li>
            <li>
              <a href="#"><span></span><p>游戏</p></a>
            </li>
            <li>
              <a href="#"><span></span><p>彩票</p></a>
            </li>
            <li>
              <a href="#"><span></span><p>电影</p></a>
            </li>
            <li>
              <a href="#"><span></span><p>酒店</p></a>
            </li>
            <li>
              <a href="#"><span></span><p>便利</p></a>
            </li>
          </ul>
        </div>
        <div class="ali-app">
          <h3>阿里APP</h3>
          <a class="more" href="#">更多 ></a>
          <ul>
            <li><a href="#"><img src="data:image/webp;base64,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" alt="" /></a></li>
            <li><a href="#"><img src="data:image/webp;base64,UklGRgAEAABXRUJQVlA4WAoAAAAQAAAAOwAAOwAAQUxQSHwAAAABT6AmAJA2yoZrtiCCaYyIACzbn+8CTmvbjqq3UgMLnS7QODpgIXH4+fu5gAyn2+By/RcR/U8r/Z6p+o2N3f5N9eKsrAid+YTwcDNS+0QaAtKUkB4Z6cdfXUb6JaRHQJqeSMOM1PqE8HC2InRW/Jvqxdnd75mq39hYAQAAVlA4IF4DAACwEwCdASo8ADwAPok0l0elIqIhMBgO+KARCWwAyB3A2X4bfO/xa/GPrq9sHzTwNuv1AflX/gdMd+gHuA/aD1Afxz+y/tF7yPoW/xnpGdQB6AHSl/u96U7wAcIKpmpY+TN7h+qqM4ubmG0ibBoLmlceXOfIo1GB/JWlEudV+hsr7TReEdtF0wwDPiYyc+UbAImXs8SWeQZwifHtnxT/I9qz9KyhuRpgAP78Dxd8z1Vb9U2kwkidDgtf7DFdtwP4K0aa3/+e9SHl/j0Sg/7fSBX/9kENOfG2BdkMHdb9gsAzQuvoY/QPaf82UlHGNsmN+D5d6ek42ZH9CPwLH2rz7+rC8ZV9CgNcfWUipMaFt6E3ibUUc9EEs2+IvRDf+Jh9fgpQIvw+4KU26J84baTcd1Sxff6CXuuZ3jrGAL7kG4we1j9pNJd1HTUzuon8cCeH24QYKsFiHQMceVDAcM2ncC2PKGFAnmRyrP7gz9VbqLO1U4tR2Nrseb97L8ZlZbMI6/rtCYycK7HzliXWoFKZtQ0Q1lf04Z8xwfkgVJhRD7amTUS3k39GoKRZK7HseimRPn6IdciQ4Mayeb7NV7divHxrqBIeWuYoSx5Jl2JB7Legtf6lnz66P9prafB+Egk+CkPgMf/9mQEqrf12NYigDLeLumA606lzar3axkXDx3yVW0GUJMoIeHmKiDF9VUBXFAWDolXLOA4YFN6Ha5XyYYXejO2M5t4DRXVmt5jd14dLKgyuJny4sSriJxnWN12nBissK9y0f8yD0bRMy60iACxIen9YeRUw0RhKYoJQLc5EsyKhcnFus2LItQTQxL5laAHB1MCbyIe68FRH26JPslw3zvytP42IxDUn0HG9rr79c6YCACTppy/6zbVaOvHcN3NKeu46PX9I3n0kiYr8xK/Uh1m/WWvDB9zr15i3jMz3Sndcug57tORpKnFudPUMaBsl1fFqdu4CYxP2u9mQZqyderFI3v6inLvqbM+50mRzreYHnttgLcf/JY3d73OtUTLoPabMPDtk9n71p2Ne+dtPaiSQFQ3+Jd97McsJKIx4zpruD08IggE2KNnK+nU3yIRlu/i3TUVedAAnfpZoK/KeDelXSxzVB+LTqsT4XZaeUvjl4U6yqNXKw7VsWSAA" alt="" /></a></li>
            <li><a href="#"><img src="data:image/webp;base64,UklGRrwEAABXRUJQVlA4WAoAAAAQAAAAOwAAOwAAQUxQSNcAAAANz8GgbSRH57nv/Z8/2F8WEZHNnyHi88wGgzcm43aqSZ3baJLXYDA/PlFDAJYk2aatWte2bdt7/hO7fu/t/n8R0f/kFUwXM4mQ4cddtsvJ6spHshvGo4USmcKpseGtXMV7IN8YjHhW8ihi/dmQe7KKxvqDTbCHKtqqpyLI8scSOitmEWbjCOMhhCFDaPyr4gydu4TQXXZxdLtFFt1iXDRUbrI+5lHNgtd6K4rm0Oa+GfQNhavxHM76Mfzva7yNBs1cAL+3eYePTf1cyCRChh932S6nQV4AAABWUDggvgMAANASAJ0BKjwAPAA+kUCXSKWkIiEoG/6osBIJbADJvGRO1sz5zEOP0G2g8wH2gcIB/VeoA9ADyy/2S+Cv9wv2q9pa5tdFgiT/H+Vl1d+h4S9I7My8ZWoZ0jvQdPQ6ECxXJzL6ihzp9BH1kimsWNbKtACjfrnqF8xbeucoStbwnvSwLTlZDQxs+XsN/DebZ/v+mTOyZbwCgJRKkSB1jDAYAAD+/pCtcriOsduNFTdTp+eV5s5r8aGSf9yz/u5zP7gJBNRmRb5H8e9ifcS2//7DrXl3RbzOv3Gf94z/OfdW/466IRRgAypADHgNsa+3fw6fJ4mk579qCP0FcSd92iDkKmcWoH/8B3HBguo/ZkWU5ReePNc2a8aKsCQBBwkXYShT7mgwnEDlgbmV/yCunZrzf8pDnSgHtiI8GKWW38/FTwNx9otkRUuJ9imbYOn+1/JNa/LzjMuUn+tLY+f/A6dbYctmc40NEdWqsUg4CcKZiGhDk1oewtY5RHQD3t4tFDrwB0j5mfenAmEXkVka5Uj+PEqGb4pz3JKwKI77zjNOWSas4/C56VRZ8POP0XL8JrmPKUdxlgKEEvKEv33HtmmCf02BgOrINpAkM+Pq0d82Vs2qz9+8KB8GpnmPDBVNaIzze2jDuRKvzfdSkOyTgkABVUm9oWTqEsrKwfV5d4wGrTGIaTtD7RFaftj72KOERAUXsJlF80OPQRBbfa1vUZa+TkixZ2BSYnFYDYpMke3M/adcvsallRByw3yKFJrwT/Pb+krn+CdoGYSHbnyMxvV8/Po0z6MP+Wg11g2pOpymYCaG+/G9fdwYUzHjMDGEHn65q6pprlE0ZEogU8/aNTMJdDxZZ+KsicW40dxzEGB7vcUfH/L7Nk9nZ+DQEubfNMaXIOcaczO/RYaSaeeS6Wl14mo40Fe2Zfgr2CnH+iJYc5RV1tmgiA3qHb8t7/3N0m03pRJ+w+G5oHJc0gdhFqPu9UejjMi9zd/o/Zmf5YO8NzmfHJtkZKZp9P28W3Qk7qoaEuaxOFG6I5x97XyoO1Khf76jHV+suKpkiJ+hy6tJS5TsL7kT3Lqmy1BHL58d102Q6Mv2xQWx8Tl0+PKuTsQDZ8+/cEt81WPc9nOk+e6o8s9aNe7ZHmbbWBZQ31QqNCGUl3APHpzVW5wCFaDh7I4yGmeJkVnqxK0Q+sWJEXZA1HuuG1PuspuVGuYfSrrLqhf+n5EE73V12Dog5GuNUI0F2MC/oVQQ0EV0yWf0CKS7uMadC1sVJj//nxVGCxgAAAA=" alt="" /></a></li>
            <li><a href="#"><img src="data:image/webp;base64,UklGRgAEAABXRUJQVlA4WAoAAAAQAAAAOwAAOwAAQUxQSHwAAAABT6AmAJA2yoZrtiCCaYyIACzbn+8CTmvbjqq3UgMLnS7QODpgIXH4+fu5gAyn2+By/RcR/U8r/Z6p+o2N3f5N9eKsrAid+YTwcDNS+0QaAtKUkB4Z6cdfXUb6JaRHQJqeSMOM1PqE8HC2InRW/Jvqxdnd75mq39hYAQAAVlA4IF4DAACwEwCdASo8ADwAPok0l0elIqIhMBgO+KARCWwAyB3A2X4bfO/xa/GPrq9sHzTwNuv1AflX/gdMd+gHuA/aD1Afxz+y/tF7yPoW/xnpGdQB6AHSl/u96U7wAcIKpmpY+TN7h+qqM4ubmG0ibBoLmlceXOfIo1GB/JWlEudV+hsr7TReEdtF0wwDPiYyc+UbAImXs8SWeQZwifHtnxT/I9qz9KyhuRpgAP78Dxd8z1Vb9U2kwkidDgtf7DFdtwP4K0aa3/+e9SHl/j0Sg/7fSBX/9kENOfG2BdkMHdb9gsAzQuvoY/QPaf82UlHGNsmN+D5d6ek42ZH9CPwLH2rz7+rC8ZV9CgNcfWUipMaFt6E3ibUUc9EEs2+IvRDf+Jh9fgpQIvw+4KU26J84baTcd1Sxff6CXuuZ3jrGAL7kG4we1j9pNJd1HTUzuon8cCeH24QYKsFiHQMceVDAcM2ncC2PKGFAnmRyrP7gz9VbqLO1U4tR2Nrseb97L8ZlZbMI6/rtCYycK7HzliXWoFKZtQ0Q1lf04Z8xwfkgVJhRD7amTUS3k39GoKRZK7HseimRPn6IdciQ4Mayeb7NV7divHxrqBIeWuYoSx5Jl2JB7Legtf6lnz66P9prafB+Egk+CkPgMf/9mQEqrf12NYigDLeLumA606lzar3axkXDx3yVW0GUJMoIeHmKiDF9VUBXFAWDolXLOA4YFN6Ha5XyYYXejO2M5t4DRXVmt5jd14dLKgyuJny4sSriJxnWN12nBissK9y0f8yD0bRMy60iACxIen9YeRUw0RhKYoJQLc5EsyKhcnFus2LItQTQxL5laAHB1MCbyIe68FRH26JPslw3zvytP42IxDUn0HG9rr79c6YCACTppy/6zbVaOvHcN3NKeu46PX9I3n0kiYr8xK/Uh1m/WWvDB9zr15i3jMz3Sndcug57tORpKnFudPUMaBsl1fFqdu4CYxP2u9mQZqyderFI3v6inLvqbM+50mRzreYHnttgLcf/JY3d73OtUTLoPabMPDtk9n71p2Ne+dtPaiSQFQ3+Jd97McsJKIx4zpruD08IggE2KNnK+nU3yIRlu/i3TUVedAAnfpZoK/KeDelXSxzVB+LTqsT4XZaeUvjl4U6yqNXKw7VsWSAA" alt="" /></a></li>
            <li><a href="#"><img src="data:image/webp;base64,UklGRm4FAABXRUJQVlA4WAoAAAAQAAAAOwAAOwAAQUxQSO0CAAABd8agbSNJl8zxx9zZ945BROTDJ5nSBhkyZZFIXiISGbKXJZGWFGthkaKLiCyySaRltdkl0oYh/yHttm0zlnaSZ5tt27Zt27Zt27Zt213O/k1Vndzk5lbrY0T/E38NrU7NDMRN23p/XfMExKut33y9qV4K4pO6j7EXcyoiLtqA74wFLvfJ1xGHurdphU+NaJwK5aVnafc/ODijcWaiBpXFZ+j4btfYthUSoaz2LbqYr8+u6VkANfpoP93N0NctfSslwHuVO5QMnJ1ZCR6NhqcpH3wyo7IGLx1umPQSOdctBdLJAx/Ro/l+XhYkjVEf6D2ytgKkEge/oYrA7mzIDHlLRWsL4F7nCVV9n5gIt2oXqc7XDi7GsiAVPN7/g9axfDh3DFLS9zZM8WHj9OGf+evHGANOxccp+WlO59U/KazWkHuA1pliOOjDvlNyWzoy11Poi1h/WqHOcMg5TdleiNV8TntjxAp9tDbAoWWQstURS1tu0jaudlF2+nVa93IgLqV0VR2x3p9pN1/ubbqL1rtWEDIvUfritglt8uvfp+CbW7CS1vchEJo8padD5Rdp/zxFN1bQCk2D0OsjvVxtoB2j7du0DCRspmXOhzAqQA8X6mrYQ9uTGogm36JtAYTJJuUftERUP0Hbj+Ea6odomfMgTKX8t6E6oiXXaL/Sou5h2kLTIUwyKR1ZmIxoxzcUHj6I0OYbBWGkn/If26eWbo/Q/VMXCL0+0cOLZfsjlHhVC0KzZ1R+MwVC3jUqXwJR20jVZmc4dDKp+GIpHIrvUW1odhIcEqYFqfROLTjWvk2lszU4GmMiVGdeKYNLxkmqe91Nh4vW+g5VBaekwFXr+pFqfKuSIGGM/0IV4XUlkErs/4zePy1KgKTR4y69vh+eBWmt0rpP9PJ5Rx0dXjIHnqF06PygHHjU8/odfROme+jJke55OhSkdZh18oNJp/CTHVMapUBVYlH1HtM3nrz2IHrj/M7Fw5tXzjHwXwAAAABWUDggWgIAAHAPAJ0BKjwAPAA+hTSVR6UjIiE59OqooBCJbADG8Yf+5dYJrDwHDa7Sd995JsvtgPMB0APNr6kPn2vZUwDBig3wNIFMw8Rz3j0AP1VZ9EAsqy7/Na13sOtWGDKvg3z927BHUeklR7VFdIMkgYZryg+mda0huVbKUxeLeWezrWp/wyxWAAD++94SxGdmbXHzjQOlteL+xhPMfwU40n5Fr9kln1JgqxKXhro6NDAyu4wMfsQiIAIKravDThY0fPBaTpZ3G0+4/uDESTEW5r4MTbwqQycJcbV+NHRBc9/PYTOVY2B+h94YIbVngkwjWprpsNPmjnofE/60bRWezaaIecnYcjC7ERzHyvjPsq+1WPqd0Bq029xVJu5bT2xX/wfwHtyO/vfIOXKOrTb9mWPAM/lDgnQNDUXuAvNACY9fwOdR65beAaH19VObGzY8e1CSjIUPTrtwNsyfFQjhffqvVenLwjn+6zccovFEhl1EaayRbSVQiCIOANuaRF2aXvA5rSIKOFkp4k74KxwHyvWyf4wO8oMZgOavvDqhrE/j8nTN6gTPkQ+cYacyjhtsZIp4qepIOfcyVjtDkRQyZ4NFg/L20gGl5+qC9fGcRoo7tT9939AlqCuaEQ3jSlI1IJHmXRx+6ywxQYMZEWTOIU+2Cd+0WgvpWLPBSKJe1JUbEQzMI9iLEeeAO7k31oFrLGPC9FTO0L9zYJklv3FLa2PbQ/V0xiiJoHz4Kj37Dik25kNzvrmBA5vSksCCnraEEAPukIdn8kEHmYiB9haMHsmxDR63JVeRmR7/AAAA" alt="" /></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import '@/assets/styles/mainmenu.less';

  export default {
    name: "MainMenu",
    data() {
      return {
        menuList: [
          ['女装', '男装', '内衣'],
          ['鞋靴', '箱包', '配件'],
          ['童装玩具', '孕产', '用品'],
          ['家电', '数码', '手机'],
          ['美妆', '洗护', '保健品'],
          ['珠宝', '眼镜', '手表'],
          ['运动', '户外', '乐器'],
          ['游戏', '动漫', '影视'],
          ['美食', '生鲜', '零食'],
          ['鲜花', '宠物', '农资'],
          ['面料集采', '装修', '建材'],
          ['家具', '家饰', '家纺'],
          ['汽车', '二手车', '用品'],
          ['办公', 'DIY', '五金电子'],
          ['百货', '餐厨', '家庭保健'],
          ['学习', '卡券', '本地服务']
        ],
        advRotation: [
          require('../assets/images/TB16LA.vHr1gK0jSZFDXXb9yVXa-520-280.jpg'),
          require('../assets/images/TB1XotJXQfb_uJkSnhJSuvdDVXa.jpg'),
          require('../assets/images/TB1JNHwKFXXXXafXVXXSutbFXXX.jpg'),
          require('../assets/images/TB183NQapLM8KJjSZFBSutJHVXa.jpg'),
          require('../assets/images/TB13hj2v.H1gK0jSZSyXXXtlpXa-520-280.jpg'),
        ],
        manyImages: [
          require('../assets/images/manyImages/TB1D0sLnHSYBuNjSspiXXXNzpXa.png'),
          require('../assets/images/manyImages/TB1ilbUHpXXXXb8XXXXSutbFXXX.jpg_90x90q90.jpg'),
          require('../assets/images/manyImages/TB1TJNTPXXXXXcqXVXXSutbFXXX.jpg_90x90q90.jpg'),
          require('../assets/images/manyImages/TB1a3bVRXXXXXbfXFXXXXXXXXXX.png'),
          require('../assets/images/manyImages/TB1gD8NhDlYBeNjSszcXXbwhFXa.png'),
          require('../assets/images/manyImages/TB1_aF7pG6qK1RjSZFmXXX0PFXa.png'),
          require('../assets/images/manyImages/TB12cBSirGYBuNjy0FoXXciBFXa.png'),
          require('../assets/images/manyImages/TB1Im97lVT7gK0jSZFpXXaTkpXa.png'),
          require('../assets/images/manyImages/928417138.png_90x90q90.png'),
          require('../assets/images/manyImages/TB1KH4GQpXXXXb_apXXSutbFXXX.jpg_90x90q90.jpg'),
          require('../assets/images/manyImages/TB1_kq7j1SSBuNjy0FlXXbBpVXa.png'),
          require('../assets/images/manyImages/TB1nJxqJXXXXXchapXXSutbFXXX.jpg_90x90q90.jpg'),
        ],
        tmallGoodsShow: [
          [
            require('../assets/images/TB1X6uHLVXXXXcCXVXXSutbFXXX.jpg'),
            require('../assets/images/TB13xKuLVXXXXcHapXXSutbFXXX.jpg')
          ],
          [
            require('../assets/images/TB1KiIrqhD1gK0jSZFsSuvldVXa.jpg_240x240q90.jpg'),
            require('../assets/images/TB1NuT0seH2gK0jSZJnSuuT1FXa.jpg_240x240q90.jpg')
          ],
          [
            require('../assets/images/TB1tBJNvxv1gK0jSZFFwu20sXXa.png_240x240q90.png'),
            require('../assets/images/TB1iT.iuhD1gK0jSZFKSuwJrVXa.jpg_240x240q90.jpg')
          ],
          [
            require('../assets/images/TB19gsVtWL7gK0jSZFBSutZZpXa.jpg_240x240q90.jpg'),
            require('../assets/images/TB1tBMFukP2gK0jSZPxSuucQpXa.jpg_240x240q90.jpg')
          ],
          [
            require('../assets/images/TB1jq1HekvoK1RjSZPfXXXPKFXa-502-380.jpg_240x240q90.jpg'),
            require('../assets/images/TB1NASFejDpK1RjSZFrXXa78VXa-502-380.jpg_240x240q90.jpg')
          ]
        ],
      };
    }
  }
</script>

<style scoped>

</style>
