<template>
  <div class="bannerImgWarp">
    <div class="bannerImg">
      <img :src="i" alt="" v-for="i in imgUrl" :key="i">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bannerImgWarp{
  width: 1200px;
  margin: 0 auto;
  .bannerImg{
    height: 90px;
    margin: 15px -13px 15px 0;
    img{
      margin: 0 13px 0 0;
      width: 290px;
      height: 90px;
      overflow: hidden;
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      imgUrl:[
        "http://style.51sole.com/b2c/images/54.png",
        "http://style.51sole.com/b2c/images/55.png",
        "http://style.51sole.com/b2c/images/zs.jpg",
        "http://style.51sole.com/b2c/images/zm.jpg"
      ]
    }
  },
}
</script>