<script>
import Card from '../components/Card.vue'
import {store} from '../store';
export default{
  name: "PageMain",
  components:{
    Card
  },
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
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur nihil quos libero error perspiciatis modi excepturi harum rem sed eius fugaasperiores velit ullam dolorem a, molestiae nisi quibusdam nemo.</p>
      <a class="btn btn-yellow text-white" href="#"><strong>Browse through courses</strong></a>
    </div>
    `
  }
  
  }
}
</script>

<template>
  <main>
    <section class="section">
      <div id="book-icon" class="container mb-3">
        <div>
          <img src="../assets/img/Books-icon.png" alt="">
        </div>
      </div>
      <div class="container d-flex justify-content-between">
        <div class="left-box">
          <h2 class="mb-5">Thousands of courses <br> for any type of student</h2>
          <p class="mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus in placeat dolor nam! Eius, recusandae. Fugit porro odio eos enim tempore nisi nostrum autem! Fuga voluptate recusandae labore consectetur fugiat.</p>
          <a class="btn btn-yellow text-white" href="#"><strong>Browse through courses</strong></a>
        </div>
        <div class="right-box">
          <img src="../assets/img/Graduation-Illustration.png" alt="">
        </div>
      </div>
    </section>
    <section class="mt-5">
      <div class="container">
        <div class="text-center">
          <h2>Faculties available at EduPrime</h2>
          <p>A single university with a load of courses, tailored <br> to satisfy any student's needs.</p>
        </div>
        <div class="d-flex faculties">
          <div v-for="(elem, index) in store.facultiesArray" :key="index" @click="changeCourse(elem, index)" class="comp d-flex justify-content-center align-items-center">
            <img :src="`${elem.img1}`" alt="">
            <div>{{elem.course}}</div>
          </div>
        </div>
        <div id="course-box" class="d-flex align-items-center">
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
main{
  .section{
    margin-top: 200px;
    #book-icon{
      div{
        width: 10%;
        img{
          width: 50%;
        }
      } 
    }
    .container{
      .left-box{
        width: 50%;
        h2{
          font-size: 50px;
        }
      }
      .right-box{
        width: 40%;
        img{
          width: 80%;
        }
      }
    }
  }
  section.mt-5{
    .container{
      .faculties{
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
        }
      }
      #course-box{
        width: 70%;
        margin: 0 auto;
        img{
          width: 50px;
          height: 50px;
        }
      }
    }
  }
}
</style>