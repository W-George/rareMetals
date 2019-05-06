<template>
  <div class="tableWarp">
    <el-table
      :data="carData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="img"
        label="商品图片"
        width="180">
        <template slot-scope="scope">
          <img :src="scope.row.img" alt="" style="width: 36px;height:36px">
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="商品名称">
      </el-table-column>
      <el-table-column
        prop="num"
        label="商品数量"
        width="180"
        align="center">
        <template slot-scope="scope">
          <el-button type="primary" round size="mini" @click="reduce(scope.row)">-</el-button>
          <span class="num">{{scope.row.num}}</span>
          <el-button type="primary" round size="mini" @click="add(scope.row)">+</el-button>
        </template>
      </el-table-column>
      <el-table-column
        label="单价"
        width="180">
        <span>20元 / 千克</span>
      </el-table-column>
      <el-table-column
        label="总价"
        width="180">
        <template slot-scope="scope">
          <span>{{scope.row.num * 20}}元</span>
        </template>
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="120">
        <template slot-scope="scope">
          <el-button
            @click="delet(scope.row)"
            type="text"
            size="small">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <span class="allPrice">总价：{{carNum * 20}}元</span>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed:{
    ...mapState(['carData','carNum']),
  },
  methods: {
    add(data){
      this.$store.commit('updata',data)
    },
    reduce(data){
      this.$store.commit('reduceShop',data)
    },
    delet(data){
      const bstop = confirm('是否删除该商品')
      if (bstop) {
        this.$store.commit('deletShop',data)
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.tableWarp{
  border: 1px solid #ccc;
  .num{
    display: inline-block;
    width: 36px;
    height: 28px;
  }
  .allPrice{
    display: inline-block;
    line-height: 50px;
    margin-left: 20px;
    font-size: 14px;
  }
}
</style>
