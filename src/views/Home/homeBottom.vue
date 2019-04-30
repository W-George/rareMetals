<template>
  <div class="homeBottomWarp">
    <div class="bottomLeft">
      <h3>铋、锗、钼、钨、铼</h3>
      <div class="leftContent">
        <div class="hot">
          <a>钙</a>
          <a>氧化铋</a>
          <a>锑</a>
          <a>三氧化二铋</a>
          <span>热门推荐</span>
        </div>
        <img src="http://web.img.51sole.com/B2BManage/Images/201611231753484957.jpg" alt="">
      </div>
    </div>
    <div class="bottomRight">
      <div class="rightLeft">
        <div v-for="(i,k) in data" :key="k">
          <h3>
            <span v-for="(item,key) in i.title" :key="key">{{item}}</span>
          </h3>
          <div class="listA">
            <span v-for="(item,key) in i.content" :key="key" @click="$router.push(`/details/2+${k}+${key}`)">{{item}}</span>
          </div>
        </div>
      </div>
      <tabs></tabs>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.homeBottomWarp{
  width: 1200px;
  margin: 0 auto;
  border: 1px solid #e2e2e2;
  overflow: hidden;
  .bottomLeft{
    float: left;
    width: 233px;
    height: 443px;
    background: #EC6867;
    h3{
      text-align: center;
      background: rgb(203, 39, 38);
      line-height: 42px;
      font-size: 19px;
      font-weight: normal;
      color: #fff;
    }
    .leftContent{
      padding-top: 30px;
      .hot{
        position: relative;
        width: 204px;
        height: 73px;
        padding: 10px;
        margin: 18px auto 0;
        border: 1px solid #FBD7D7;
        margin-bottom: 50px;
        span{
          position: absolute;
          top: -12px;
          left: 60px;
          display: block;
          width: 80px;
          height: 18px;
          text-align: center;
          font-size: 14px;
          color: #fff;
          background: #EC6867;
        }
        a{
          display: inline-block;
          height: 24px;
          line-height: 28px;
          color: #fff;
          width: 72px;
          margin: 0 9px;
        }
      }
    }
  }
  .bottomRight{
    float: left;
    .rightLeft{
      float: left;
      height: 441px;
      width: 387px;
      padding: 6px 0 0 20px;
      border-right: 1px solid #e2e2e2;
      div{
        float: left;
        width: 50%;
        padding-right: 5%;
        height: 80px;
        margin-bottom: 8px;
        span{
          display: inline-block;
          color: #555;
          margin-right: 15px;
          font-size: 12px;
          line-height: 24px;
          &:hover{
            color: #FF7300;
            cursor: pointer;
          }
        }
        .listA{
          width: 100%;
        }
        h3{
          line-height: 30px;
        }
      }
    }
  }
}
</style>


<script>
import tabs from './tabs'
export default {
  components:{
    tabs
  },
  data() {
    return {
      data:[
        {title:['铋','精铋'],content:['氧化铋 ','铋颗粒 ','碳酸铋 ','金属铋锭']},   
        {title:['纳米铋粉','铋酸钠'],content:['氯氧化铋',' 三氧化二铋',' 硒化铋',' 碲化铋']}, 
        {title:['铋粉','铋锭'],content:['碲粉','碲丸 ','纯碲',' 碲锭']},   
        {title:['碲棒','碲粒'],content:['金属碲',' 碲铜合金 ','二氧化碲 ','铂钴']},   
        {title:['铁钴 ','碳酸钴'],content:['氯化钴','四氧化三钴 ','硫酸钴 ','钴粉']},  
        {title:['硝酸钴','草酸钴'],content:['铼锭',' 铼棒 ','铼粉 ','高铼酸']},  
        {title:['二硫化铼 ','铼酸铵'],content:['铼块','铼条 ','铼粒 ','氧化钼']},  
        {title:['钼粉','钼锭'],content:['钼酸钠','钼精矿','钼片','钼丝']},   
        {title:['钼条','钨粉'],content:['铈钨棒','碳化钨','铜钨合金','钨条']},   
        {title:['钨丝 ','钨板'],content:['钨棒','锗粒','锗锭','锗粉']}   
      ]
    }
  }
}
</script>
