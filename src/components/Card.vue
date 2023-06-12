<script>
import {store} from '../store';
export default{
  name: "Card",
  data(){
    return{
      store
    }
  },
  methods: {
    changeCourse(elem, index){
      document.getElementById("course-box").innerHTML= `
      <div>
        <img src="${elem.img2}" alt="">
      </div>
      <div>
        <h6>${elem.course}</h6>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur nihil quos libero error perspiciatis modi excepturi harum rem sed eius fuga asperiores velit ullam dolorem a, molestiae nisi quibusdam nemo.</p>
        <a class="btn btn-yellow text-white" href="#"><strong>Browse through courses</strong></a>
      </div>
      `
    }
  }
}
</script>

<template>
  <div v-for="(elem, index) in store.facultiesArray" :key="index" @click="changeCourse(elem, index)" class="comp d-flex  justify-content-center align-items-center">
    <img :src="`${elem.img1}`" alt="">
    <div>{{elem.course}}</div>
  </div>
  <div id="course-box">

  </div>
</template>

<style lang="scss" scoped>
.comp{
  width: 20%;
  flex-direction: column;
  border: 1px solid lightgrey;
  img{
    width: 40%;
    display: block;
    padding: 10px;
    margin: 10px;
  }
  #course-box{
    img{
      width: 50px;
      height: 50px;
    }
  }
}
</style>