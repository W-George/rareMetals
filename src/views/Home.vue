<template>
  <div>
    <Header></Header>
    <div class="main">
      <div class="main_center">
        <div class="banner">
          <el-carousel height="300px">
            <el-carousel-item v-for="item in imgBannerUrl" :key="item">
              <img :src="item">
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="main_centerBottom">
          <i class="btnLeft"></i>
          <img :src="i" alt="" v-for="i in imgUrl" :key="i">
          <i class="btnRight"></i>
        </div>
      </div>
      <div class="main_right">
        <div class="title">名企推荐</div>
        <div class="main_right_content">
          <ul>
            <li v-for="(i,k) in companyList" :key="k">
              <i :class="`listgb${k}`"></i>
              {{i}}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <bannerImg></bannerImg>
    <homeBottom></homeBottom>
  </div>
</template>

<style lang="scss" scoped>
  .main{
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    .main_center{
      width: 780px;
      float: left;
      margin-left: 218px;
      .banner{
        width: 760px;
        height: 300px;
        margin: 10px;
      }
      .main_centerBottom{
        position: relative;
        width: 760px;
        margin: 0 10px;
        height: 170px;
        margin-top:9px;
        padding-left: 25px;
        img{
          margin: 0 5px;
        }
        i{
          background: url('../assets/icon.png');
          display: block;
          position: absolute;
          top: 70px;
          width: 14px;
          height: 24px;
        }
        .btnLeft{    
          left: 0;   
          background-position: -381px 0;
        }
        .btnRight{
          right: 0;
          background-position: -400px 0;
        }
      }
    }
    .main_right{
      float: right;
      width: 202px;
      height: 497px;
      border: 1px solid #ddd;
      margin-top: 10px;
      .title{
        height: 35px;
        line-height: 35px;
        padding: 0 10px;
        border-bottom: 1px dashed #ddd;
        font-size: 14px;
        font-weight: bold;
        color: #333;
      }
      .main_right_content{
        padding: 10px;
        ul{
          li{
            height: 29px;
            line-height: 29px;
            overflow:hidden;
            text-overflow:ellipsis;
            white-space:nowrap;
            &:hover{
              color: #0096E9;
              cursor: pointer;
            }
            i{
              display: block;
              background: url('../assets/icon.png');
              width: 14px;
              height: 14px;
              overflow: hidden;
              float: left;
              margin: 7px 6px 0 0;
            }
            .listgb0{
              background-position: -586px -540px;
            }
            .listgb1{
              background-position: -586px -565px;
            }
            .listgb2{
              background-position: -586px -588px;
            }
            .listgb3{
              background-position: -586px -612px;
            }
            .listgb4{
              background-position: -586px -636px;
            }
            .listgb5{
              background-position: -586px -660px;
            }
            .listgb6{
              background-position: -586px -684px;
            }
            .listgb7{
              background-position: -586px -708px;
            }
            .listgb8{
              background-position: -586px -732px;
            }
            .listgb9{
              background-position: -586px -756px;
            }
          }
        }
      }
    }
  }
</style>


<script>
import Header from '../components/header'
import bannerImg from './Home/bannerImg'
import homeBottom from './Home/homeBottom'
export default {
  components:{
    Header,
    bannerImg,
    homeBottom
  },
  data() {
    return {
      imgBannerUrl:["http://cos.solepic.com/20181211/201812111813518387.jpg",
        "http://cos.solepic.com/20181224/201812241809274945.jpg",
        "http://cos.solepic.com/20190111/201901111723428280.jpg",
        "http://cos.solepic.com/20180417/201804171703141230.jpg",
        "http://cos.solepic.com/20180830/201808301755216250.jpg"
      ],//轮播图图片
      imgUrl:[
        "http://web.img.51sole.com/weixinstore/20161123/b_651_201611231755504833.jpg",
        "http://web.img.51sole.com/weixinstore/20161123/b_651_201611231756171454.jpg",
        "http://web.img.51sole.com/weixinstore/20161123/b_651_201611231756391628.jpg",
        "http://web.img.51sole.com/weixinstore/20161123/b_651_201611231757005442.jpg",
        "http://web.img.51sole.com/weixinstore/20161123/b_651_201611231757157011.jpg"
      ],//banner图下方图片
      companyList:[
        "苏州市荣千稀有金属制品有限公司",
        "苏州川茂金属材料有限公司",
        "寿光市鲁科化工有限责任公司",
        "宝鸡创奇金属有限公司",
        "安阳市铁发冶金耐材有限公司",
        "宝鸡智铭特种金属有限公司",
        "长沙盛特新材料有限公司",
        "蒂姆（北京）新材料科技有限公司",
        "深圳市爱伦特科技有限公司",
        "宝鸡市巨诺金属材料有限公司"
      ]//优质公司推荐
    }
  },
}
</script>