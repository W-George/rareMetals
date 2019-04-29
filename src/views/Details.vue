<template>
  <div class="detailsPage">
    <Header></Header>
    <div class="detailsWarp">
      <PicZoom :previewImg="img" :zoomImg="img"></PicZoom>
      <div class="details">
        <h3>{{detailsData.name}}</h3>
        <div>
          <p>起批量 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1千克</p>
        </div>
        <h4>产品属性</h4>
        <h5>公司名称:{{detailsData.company}}</h5>
        <h5>发布时间:{{detailsData.time}}</h5>
      </div>
    </div>
    <button>加入购物车</button>
  </div>
</template>

<style lang="scss" scoped>
.detailsPage{
    padding-bottom: 100px;
  .detailsWarp{
    width: 1200px;
    margin: 0 auto;
    margin-top: 20px;
    overflow: hidden;
    .details{
      float: left;
      width: 600px;
      margin-left: 20px;
      h3{
        font-size: 16px;
        font-weight: normal;
        line-height: 30px;
      }
      div{
        height: 109px;
        background: #FFF5EC;
        border-top: 1px solid #FF7300;
        margin: 5px 0;
        p{
          font-size: 13px;
          color: #A5988F;
          text-indent: 15px;
          line-height: 50px;
        }
      }
      h4{
        font-size: 16px;
        font-weight: normal;
        line-height: 40px;
        border-bottom:  solid 1px #e5e5e5;
        margin-bottom: 20px;
      }
      h5{
        font-size: 13px;
        font-weight: normal;
        line-height: 30px;
        color: #666;
      }
    }
  }
  button{
    display: block;
    width: 186px;
    height: 50px;
    font-size: 14px;
    background: #1b94e1;
    border: none;
    text-align: center;
    color: #fff;
    margin: 0 auto;
    cursor: pointer;
  }
}
</style>


<script>
import Header from '../components/header'
import PicZoom from './Details/PicZoom'
export default {
  data() {
    return {
      detailsData:{},
      img:''
    }
  },
  mounted() {
    this.detailsData = this.$route.params
    this.img = this.detailsData.img
  },
  components:{
    Header,
    PicZoom
  }
}
</script>