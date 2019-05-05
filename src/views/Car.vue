<template>
  <div>
    <Header></Header>
    <div class="carWarp">
      <h3 class="carTitle">我的购物车</h3>
      <Table></Table>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.carWarp{
  width: 1200px;
  margin: 0 auto;
  .carTitle{
    font-size: 16px;
    font-weight: normal;
    line-height: 50px;
  }
}
</style>


<script>
import Header from '../components/header'
import Table from './Car/Table'
export default {
  data() {
    return {
      carData:[]
    }
  },
  mounted(){
    this.carData = this.$store.state.data
  },
  components:{
    Header,
    Table
  },
}
</script>