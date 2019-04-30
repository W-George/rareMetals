<template>
  <div>
    <Header></Header>
  </div>
</template>

<script>
import Header from '../components/header'
export default {
  data() {
    return {
      carData:[]
    }
  },
  mounted(){
    this.carData = this.$store.state
  },
  components:{
    Header
  },
}
</script>