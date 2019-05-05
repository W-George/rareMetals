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
        <h5>公司名称:{{detailsData.company || '暂无信息'}}</h5>
        <h5>发布时间:{{detailsData.time || '2019-01-06'}}</h5>
      </div>
    </div>
    <button @click="addCard">加入购物车</button>
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
import detailsData1 from '../assets/mock/details'
import detailsData2 from '../assets/mock/details2'
import detailsData3 from '../assets/mock/details3'
export default {
  data() {
    return {
      detailsData:{},
      img:''
    }
  },
  methods:{
    addCard(){
      const obj  = {
        name:this.detailsData.name,
        img:this.detailsData.img,
        num:1
      }
      this.$store.commit('updata',obj)
      this.$message({
          message: '加入购物车成功',
          type: 'success'
        });
    }
  },
  mounted() {
    if (!this.$route.params.choose) {
      const arr = this.$route.params.id.split('+')
      if (arr[0] === '1') {
        this.detailsData = detailsData1[arr[1]][arr[2]]
        this.img = this.detailsData.img
      }else if(arr[0] === '2'){
        this.detailsData = detailsData2[arr[1]][arr[2]]
        this.img = this.detailsData.img
      }else{
        this.detailsData = detailsData3[arr[1]][arr[2]]
        this.img = this.detailsData.img
      }
    }else{
      this.detailsData = this.$route.params.data
      this.img = this.detailsData.img
    }
  },
  components:{
    Header,
    PicZoom
  },
  beforeRouteUpdate (to, from, next) {
    const arr = to.params.id.split('+')
    if (arr[0] === '1') {
        this.detailsData = detailsData1[arr[1]][arr[2]]
        this.img = this.detailsData.img
      }else if(arr[0] === '2'){
        this.detailsData = detailsData2[arr[1]][arr[2]]
        this.img = this.detailsData.img
      }else{
        this.detailsData = detailsData3[arr[1]][arr[2]]
        this.img = this.detailsData.img
      }
    next()
  },
}
</script>