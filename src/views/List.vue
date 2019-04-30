<template>
  <div>
    <Header></Header>
    <div class="list">
      <h3>当前位置: 稀有金属 > {{listTitle }}</h3>
      <div class="UlWarp">
        <div class="Ullist" v-for="(i,k) in listArr" :key="k" @click="$router.push({ name: 'details', params: {
          choose:true,
          data:i
        }})">
          <img :src="i.img">
          <p>{{i.name}}</p>
          <div>
            <h4>{{i.company}}</h4>
            <a>所在地 : {{i.company.substring(0,2)}}</a><br/>
            <span>{{i.time}}</span>
          </div>
        </div>
      </div>
      <div style="text-align: center">
        <el-pagination
          background
          @current-change="handleCurrentChange"
          layout="prev, pager, next"
          :total="25">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/header'
import listData from '../assets/mock/list'
export default {
  components:{
    Header
  },
  data() {
    return {
      listArr:[],
      listTitle:''
    }
  },
  methods: {
    handleCurrentChange(val){
      const start = (+val-1)*10;
      const end = val*10;
      this.listArr = listData[this.$route.params.id-1].data.slice(start,end)
      document.documentElement.scrollTop = document.body.scrollTop = 0;
    }
  },  
  mounted(){
    this.listArr = listData[this.$route.params.id-1].data.slice(0,10)
    this.listTitle = listData[this.$route.params.id-1].name
  },
  beforeRouteUpdate (to,from,next){
    this.listArr = listData[to.params.id-1].data.slice(0,10)
    this.listTitle = listData[to.params.id-1].name
    next()
  }

}
</script>

<style lang="scss" scoped>
.list{
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  padding-bottom: 20px;
  h3{
    font-weight: normal;
    line-height: 40px;
  }
  .UlWarp{
    border-top: 1px solid #ddd;
    padding-bottom: 20px;
    cursor: pointer;
    .Ullist{
      width: 100%;
      border-bottom: 1px solid #ddd;
      background: #fefefe;
      padding: 20px 0;
      overflow: hidden;
      img{
        float: left;
        width: 164px;
        height: 164px;
      }
      p{
        float: left;
        font-size: 18px;
        margin-left: 20px;
      }
      div{
        float: right;
        text-align: right;
        h4{
          font-size: 14px;
          font-weight: 700;
          color: #333;
        }
        a{
          line-height: 30px;
          color: #999;
        }
        span{
          color: #ccc;
          padding-left: 24px;
          background: url('../assets/time.png') left center no-repeat;
        }
      }
    }
  }
}
</style>

