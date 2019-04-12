<template>
  <div>
    <div class="headerWarp">
      <div class="header">
        <span>
          欢迎访问
          <router-link to='/' tag="a">稀有金属网</router-link>
        </span>
        <p>
          稀有金属商城,稀有金属批发,稀有金属交易网
        </p>
      </div>
    </div>
    <div class="navWarp">
      <div class="nav">
        <ul>
          <li>
            <i></i>
            精选品类
          </li>
          <li class="widthLi"><a>首页</a></li>
          <li>
            <a>铋</a>  /  <a>镍</a>
          </li>
          <li>
            <a>铟</a>  /  <a>钴</a>
          </li>
          <li>
            <a>碲</a> /  <a>钼</a>
          </li>
          <li>
            <a>铌</a>  /  <a>钨</a>
          </li>
          <li class="widthLi"><a>稀土</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .navWarp{
    width: 100%;
    background: #0897D7;
    .nav{
      width: 1200px;
      height: 40px;
      margin: 0 auto;
      line-height: 40px;
      ul{
        .widthLi{
          a{
            display: inline-block;
            width: 130px;
          }
        }
        li{
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


<script>
export default {
  
}
</script>
