<template>
  <div class="tabsWarp">
    <el-tabs v-model="activeName" type="card"> 
      <el-tab-pane label="钙产品" name="first">
        <div class="cardDiv" v-for="(i,k) in data" :key="k">
          <img :src='i.src'>
          <h3>{{i.content}}</h3>
        </div>
      </el-tab-pane>
      <el-tab-pane label="氧化铋" name="second">
        <div class="cardDiv" v-for="(i,k) in data1" :key="k">
          <img :src='i.src'>
          <h3>{{i.content}}</h3>
        </div>
      </el-tab-pane>
      <el-tab-pane label="锑产品" name="third">
        <div class="cardDiv" v-for="(i,k) in data2" :key="k">
          <img :src='i.src'>
          <h3>{{i.content}}</h3>
        </div>
      </el-tab-pane>
      <el-tab-pane label="三氧化二铋" name="fourth">
        <div class="cardDiv" v-for="(i,k) in data3" :key="k">
          <img :src='i.src'>
          <h3>{{i.content}}</h3>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<style lang="scss">
.tabsWarp{
  float: left;
  width: 576px;
  height: 443px;
  .el-tabs__header{
    margin: 0 !important;
    #tab-first{
      padding: 0 20px !important;
    }
  }
  .cardDiv{
    float: left;
    height: 199px;
    padding: 0 10px;
    width: 192px;
    text-align: center;
    border-right: solid 1px #e1e1e1;
    border-bottom: solid 1px #e1e1e1;
    &:nth-child(3n){
      border-right: none;
    }
    img{
      width: 105px;
      height: 105px;
      margin: 20px 0;
    }
    h3{
      font-weight: normal;
      text-align: left;
    }
  }
}
</style>


<script>
  export default {
    data() {
      return {
        activeName: 'first',
        data:[
          {src:'http://cbu01.alicdn.com/img/ibank/2015/452/173/2007371254_1559104391.220x220xz.jpg',content:'专用供应食品级泛酸钙D-泛酸钙 维生素B5一公斤起订泛酸钙'},
          {src:'http://cbu01.alicdn.com/img/ibank/2016/668/230/2997032866_1537647041.220x220xz.jpg',content:'供应泛酸钙，维生素B5'},
          {src:'http://cbu01.alicdn.com/img/ibank/2016/308/030/2761030803_2059337018.220x220xz.jpg',content:'D-泛酸钙维生素B5食品添加剂'},
          {src:'http://cbu01.alicdn.com/img/ibank/2015/871/878/2458878178_230932688.220x220xz.jpg',content:'优质食品级  D-泛酸钙(右旋泛酸钙，维生素B5)'},
        ],
        data1:[
          {src:'https://cbu01.alicdn.com/img/ibank/2015/745/500/2620005547_880804525.220x220xz.jpg',content:'纳米氧化铋 氧化铋 超细氧化铋，氧化铋粉'},
          {src:'https://cbu01.alicdn.com/img/ibank/2013/751/757/1051757157_886779396.220x220xz.jpg',content:'厂家供氧化铋'},
          {src:'https://cbu01.alicdn.com/img/ibank/2013/751/757/1051757157_886779396.220x220xz.jpg',content:'生产供氧化铋'},
          {src:'https://cbu01.alicdn.com/img/ibank/2015/263/432/2653234362_235096269.220x220xz.jpg',content:'氧化铋，纳米氧化铋'},
          {src:'http://cbu01.alicdn.com/img/ibank/2016/844/698/3114896448_459612790.220x220xz.jpg',content:'供应 氢氧化铋 医药级'},
          {src:'http://cbu01.alicdn.com/img/ibank/2015/215/442/2268244512_598749222.220x220xz.jpg',content:'厂家直销 氯氧化铋 高级颜料塑料专用氯氧化铋'},
        ],
        data2:[
          {src:'http://cbu01.alicdn.com/img/ibank/2015/779/081/2072180977_755952410.220x220xz.jpg',content:'大量现货锑锭批发 0#锑 2#锑 高纯锑99.9%'},
          {src:'http://cbu01.alicdn.com/img/ibank/2016/517/524/3338425715_114534870.220x220xz.jpg',content:'生产销售“久运”牌1号精锑 锑锭99.85%  高纯度锑锭'},
          {src:'http://cbu01.alicdn.com/img/ibank/2016/530/923/3338329035_114534870.220x220xz.jpg',content:'厂家直销 金属锑 0号精锑 99%高纯度精锑 优质锑锭厂家'},
          {src:'http://cbu01.alicdn.com/img/ibank/2016/255/895/3030598552_1258129056.220x220xz.jpg',content:'大量现货锑锭批发  0#锑 2#锑 高纯锑'},
        ],
        data3:[
          {src:'https://cbu01.alicdn.com/img/ibank/2016/886/992/3364299688_944120089.220x220xz.jpg',content:'供应高纯三氧化二铋稀材专用双锥回转真空干燥机'},
          {src:'https://cbu01.alicdn.com/img/ibank/2016/708/662/3563266807_1858914783.220x220xz.jpg',content:'20-30nm氧化鉍/纳米Si2O3/着色剂/超导材料/催化剂/电陶材料/1kg'},
          {src:'https://cbu01.alicdn.com/img/ibank/2016/415/069/3684960514_2131415062.220x220xz.jpg',content:'厂家供应各种规格涂料电子电焊玻璃添加剂氧化铋三氧化二铋'},
          {src:'https://cbu01.alicdn.com/img/ibank/2016/639/616/2991616936_660686747.220x220xz.jpg',content:'厂家直销氧化铋 三氧化二铋 99.99% Bi2O3 行业领先'},
          {src:'http://cbu01.alicdn.com/img/ibank/2015/947/262/2688262749_36045857.220x220xz.jpg',content:'厂家直销  高含量氧化铋超细 三氧化二铋 纳米氧化铋 质优价廉'},
          {src:'http://cbu01.alicdn.com/img/product/67/55/17/67551717.220x220xz.jpg',content:'试剂 氧化铋 三氧化二铋 分析纯 AR250g/瓶 上海国药'},
        ],
        
      };
    }
  };
</script>