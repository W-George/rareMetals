<template>
  <div>
    <div class="headerWarp">
      <div class="header">
        <span>
          欢迎访问
          <router-link to='/' tag="a">稀有金属网</router-link>
        </span>
        <p>
          <template v-if="userinfo">
            欢迎您!! &nbsp;{{userinfo}}  <a style="cursor: pointer;" @click="gologout">退出</a>&nbsp;稀有金属商城,稀有金属批发,稀有金属交易网
          </template>
          <template v-else>
            <a style="cursor: pointer;" @click="$router.push(`/signin`)">登录</a>  &nbsp;稀有金属商城,稀有金属批发,稀有金属交易网
          </template>
        </p>
      </div>
    </div>
    <div class="navWarp">
      <div class="car"  @mouseenter="carEnter" @mouseleave="carLeave" @click="goCar" v-if="$route.name !== 'car' && $route.name !== 'signin' && $route.name !== 'signup'">
        <span>查看购物车</span>
        <em v-show="carData.length !== 0">{{carData.length}}</em>
        <div v-show="listShow" class="carList">
          <div v-for="(i,k) in carData" :key="k">
            <img :src="i.img" alt="">
            <span class="spanName">{{ i.name}}</span>
            <span class="spanNum">X{{i.num}}</span>
          </div>
        </div>
      </div>
      <div class="nav">
        <ul class="navUl">
          <li class="navli" id="mainLi" @mouseenter="enter" @mouseleave="leave">
            <i></i>
            精选品类
            <div :class='active ? "main_left" : "main_left active"' >
              <div class="main_leftDiv">
                <h3>
                  铋/镍
                  <i></i>
                </h3>
                <ul>
                  <li v-for="(item, key) in data" :key="key" @click="$router.push(`/details/1+0+${key}`)">{{item}}</li>
                </ul>
              </div>
              <div class="main_leftDiv">
                <h3>
                  铟/钴 
                  <i></i>
                </h3>
                <ul>
                  <li v-for="(item, key) in data1" :key="key" @click="$router.push(`/details/1+1+${key}`)">{{item}}</li>
                </ul>
              </div>
              <div class="main_leftDiv">
                <h3>
                  碲/钼 
                  <i></i>
                </h3>
                <ul>
                  <li v-for="(item, key) in data2" :key="key" @click="$router.push(`/details/1+2+${key}`)">{{item}}</li>
                </ul>
              </div>
              <div class="main_leftDiv">
                <h3>
                  铌/钨 
                  <i></i>
                </h3>
                <ul>
                  <li v-for="(item, key) in data3" :key="key" @click="$router.push(`/details/1+3+${key}`)">{{item}}</li>
                </ul>
              </div>
            </div>
          </li>
          <li class="navli widthLi"><a @click="$router.push('/')">首页</a></li>
          <li class="navli">
            <a @click="$router.push('/list/1')">铋</a>  /  <a @click="$router.push('/list/2')">镍</a>
          </li>
          <li class="navli">
            <a @click="$router.push('/list/3')">铟</a>  /  <a @click="$router.push('/list/4')">钴</a>
          </li>
          <li class="navli">
            <a @click="$router.push('/list/5')">碲</a> /  <a @click="$router.push('/list/6')">钼</a>
          </li>
          <li class="navli">
            <a @click="$router.push('/list/7')">铌</a>  /  <a @click="$router.push('/list/8')">钨</a>
          </li>
          <li class="navli widthLi"><a @click="$router.push('/list/9')">稀土</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      data:["氧化铋","精铋","铋锭","铋粉","镍带","镍丝","镍粉","镍板","镍棒"],
      data1:["铟丝","铟片","铟锭","铟粉","铟粒","粗铟","钴粉","铁钴","铂钴"],
      data2:["碲粉","纯碲","碲粒","碲锭","碲丸","钼丝","钼片","钼粉","钼条"],
      data3:["铌板","铌片","铌锭","钨棒","钨丝","钨板","钨条","钨粉","铌合金"],
      active:false,
      listShow:false
    }
  },
  computed:{
    ...mapState(['carData','userinfo']),
  },
  mounted(){
    if (this.$route.name === 'home') {
      this.active = true
    }
  },
  methods: {
    gologout(){
      this.$store.commit('logout')
      this.$router.push(`/`)
    },
    enter(){
      if (this.$route.name !== 'home') {
        this.active = true
      }
    },
    leave(){
      if (this.$route.name !== 'home') {
        this.active = false
      }
    },
    carEnter(){
      this.listShow = true
    },
    carLeave(){
      this.listShow = false
    },
    goCar(){
      this.$router.push("/car")
    }
  },
}
</script>

<style lang="scss" scoped>
  .navWarp{
    position: relative;
    width: 100%;
    background: #0897D7;
    .car{
      position: fixed;
      right: 20px;
      top: 80px;
      background: url('http://shop.baojian.com/templates/master/baojian/images/jiafangnew/cart_bg1.gif') no-repeat;
      width: 127px;
      height: 35px;
      padding-left: 39px;
      padding-top: 6px;
      margin-top: 20px;
      color: #c0a894;
      font-size: 13px;
      z-index: 999;
      .carList{
        position: absolute;
        width: 200px;
        overflow: hidden;
        left: -73px;
        top: 30px;
        border: 1px solid rgb(239, 239, 239);
        border-radius: 5px;
        z-index: 999;
        div{
          z-index: 999;
          border-bottom: 1px solid rgb(239, 239, 239);
          color: #000;
          padding: 5px 0;
          background: #fff;
          img{
            width: 60px;
            height: 60px;
          }
          .spanName{
            display: inline-block;
            margin: 0 3px;
            max-width: 105px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            position: relative;
            top: 4px;
          }
          .spanNum{
            float: right;
            margin-top: 18px;
            margin-right: 2px;
          }
        }
      }
      em{
        display: block;
        height: 24px;
        left: 10px;
        line-height: 21px;
        position: absolute;
        top: -17px;
        width: 20px;
        color: #fff;
        background: url('http://shop.baojian.com/templates/master/baojian/images/jiafangnew/cartbg8.png') no-repeat;
        text-align: center;
      }
    }
    .nav{
      width: 1200px;
      height: 40px;
      margin: 0 auto;
      line-height: 40px;
      .navUl{
        .widthLi{
          a{
            display: inline-block !important;
            width: 130px !important;
          }
        }
        #mainLi{
          position: relative;
          .main_left{
            position: absolute;
            width: 219px;
            border:1px solid #e6e6e6;
            background: white;
            z-index: 999;
            .main_leftDiv{
              width: 100%;
              height: 125px;
              border-bottom: 1px dashed #e1e1e1;
              &:last-child{
                border: none;
              }
            }
            h3{
              width: 100%;
              line-height: 35px;
              font-size: 15px;
              font-weight: normal;
              position: relative;
              padding: 0 20px 0 15px;
              color: #000;
              i{
                background: url('../assets/icon.png');
                position: absolute;
                top: 12px;
                right: 12px;
                height: 10px;
                width: 7px;
                background-position: -61px -2px
              }
            }
            ul{
              width: 100%;
              padding: 0 20px 0 15px;
              overflow: hidden;
              li{
                float: left;
                width: 58px;
                height: 28px;
                padding-right: 8px;
                color: #666;
                padding-bottom: 5px;
                font-size: 12px;
                line-height: 25px;
                &:hover{
                  text-decoration: underline;
                  color: #f60;
                  cursor: pointer;
                }
              }
            }
          }
          .active{
            display: none;
          }
        }
        .navli{
          float: left;
          width: 130px;
          text-align: center;
          font-size: 15px;
          color: #fff;
          cursor: pointer;
          a{
            display: inline-block;
            color: #fff;
            height: 100%;
            width: 25px;
            &:hover{
              background: #0885D7;
            }
          }
          &:first-child{
            width: 220px;
            background: #0D75A4;
            text-align: left;
            i{
              background: url('../assets/icon.png');
              display: inline-block;
              width: 16px;
              height: 16px;
              margin: 0 12px -5px 18px;
              background-position: -117px 0;
            }
          }
        }
      }
    }
  }
  .headerWarp{
    width: 100%;
    background: #fafafa;
    .header{
      width: 1200px;
      margin: 0 auto;
      height: 30px;
      line-height: 30px;
      p{
        font-size: 14px;
        float: right;
      }
    }
  }
</style>

