<script>
import {store} from '../store';
export default{
  name: "PageMain",
  components:{
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
          <div>
            <img src="../assets/img/Gavel-Illustration-e1556884768193.png" alt="">
          </div>
          <div>
            <h6>Law Faculty</h6>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur nihil quos libero error perspiciatis modi excepturi harum rem sed eius fugaasperiores velit ullam dolorem a, molestiae nisi quibusdam nemo.</p>
            <a class="btn btn-yellow text-white" href="#"><strong>Browse through courses</strong></a>
          </div>
        </div>
      </div>
    </section>
    <section id="uni-year">
      <div class="container text-center">
        <div id="clock-icon">
          <img src="../assets/img/Clock-and-Bell.png" alt="">
        </div>
        <h2>University Year</h2>
        <div class="time-line">
          <div id="time-line-img">
            <img src="../assets/img/Timeline-Item.png" alt="">
            <div class="time-line-object" id="obj1">
              <h6>Demo Classes</h6>
              <p>In the first week, students try to accommodate with the teaching style and choose their optional courses.</p>
            </div>
            <div class="time-line-object" id="obj2">
              <h6>Graduation Day</h6>
              <p>On the day of graduation, all students gather for the ceremony and then network and party among others.</p>
            </div>
            <div class="time-line-object" id="obj3">
              <h6>Orientation</h6>
              <p>First day of the university year, all students gather for the opening ceremony and then network with others.</p>
            </div>
            <div class="time-line-object" id="obj4">
              <h6>Evaluation</h6>
              <p>At the end of a semester, students take a general evaluation test for every subject they're learning.</p>
            </div>
          </div>
        </div>   
      </div>
      <div class="container text-center">
        <div id="clock-icon">
          <img src="../assets/img/upcoming-events-calendar-icon.png" alt="">
        </div>
        <h2 class="text-white">Upcoming Events</h2>
      </div>
      <div class="container d-flex justify-content-between align-items-center">
        <div class="box-event card text-center p-5">
          <h5>Coaching Session</h5>
          <div>20 May 21:30 PM</div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, praesentium! Iure [..] </p>
          <div><a class="btn text-white" href="#"><strong>Find More</strong></a></div>
        </div>
        <div class="box-event card text-center p-5">
          <h5>Coaching Session</h5>
          <div>23 May 21:30 PM</div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, praesentium! Iure [..] </p>
          <div><a class="btn text-white" href="#"><strong>Find More</strong></a></div>
        </div>
        <div class="box-event card text-center p-5">
          <h5>Coaching Session</h5>
          <div>26 May 21:30 PM</div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, praesentium! Iure [..] </p>
          <div><a class="btn text-white" href="#"><strong>Find More</strong></a></div>
        </div>
      </div>
      <div class="text-center pt-5">
        <a class="btn btn-yellow text-white" href="#"><strong>Browse through courses</strong></a>
      </div>

    </section>
    <section id="latest-courses">
      <div class="container">
        <h2>Latest Courses</h2>
        <div class="d-flex justify-content-between align-items-center pb-5">
          <div v-for="(elem, index) in store.coursesArray" :key=index class="box-course text-center">
            <div class="img-box pt-3">
              <img :src="`${elem.img}`" alt="">
            </div>
            <div>
              <h5>{{ elem.text }}</h5>
              <h6>Teacher: {{ elem.teacher }}</h6>
              <h6 class="pb-5">Price: {{ elem.price }}</h6>
              <div class="btn"><a href="#"><strong>View Course</strong></a></div>
            </div>
          </div>
        </div>
        <div class="exam">
          <div class="container d-flex justify-content-between">
            <div class="left-box">
              <div id="exam-icon">
                <img src="../assets/img/Exam-icon.png" alt="">
              </div>
              <h2 class="mb-5">The most efficient <br> examination method</h2>
              <p class="mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus in placeat dolor nam! Eius, recusandae. Fugit porro odio eos     enim tempore nisi nostrum autem! Fuga voluptate recusandae labore consectetur fugiat.</p>
              <a class="btn text-white" href="#"><strong>Discover the Method</strong></a>
            </div>
            <div class="right-box">
              <img src="../assets/img/Exam-Illustration.png" alt="">
            </div>
          </div>
        </div>
        <div class="fees">
          <div class="container d-flex justify-content-between">
            <div class="left-box">
              <img src="../assets/img/Girl-Illustration.png" alt="">
            </div>
            <div class="right-box">
              <div id="fees-icon">
                <img src="../assets/img/Exam-icon-1.png" alt="">
              </div>
              <h2 class="mb-5">Variable fees for <br> international students</h2>
              <p class="mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus in placeat dolor nam! Eius, recusandae. Fugit porro odio     eos   enim tempore nisi nostrum autem! Fuga voluptate recusandae labore consectetur fugiat.</p>
              <a class="btn text-white" href="#"><strong>List of Fees</strong></a>
            </div>
          </div>
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
        
      }
    }
  }
  #uni-year{
    background-color: #E56768;   
    padding-bottom: 100px;
    .container{
      padding-top: 100px;
      #clock-icon{
        width: 10%;
        margin: 0 auto;
        img{
          width: 50%;
        }
      } 
      .time-line{
        margin-top: 200px;
        padding-bottom: 150px;
        .time-line-object{
          width: 260px;
          color: white;
          position: absolute;
        }
        #obj1{
          top: -150px;
          left: 400px;
        }
        #obj2{
          top: -150px;
          right: 180px;
        }
        #obj3{
          bottom: -165px;
          left: 170px;
        }
        #obj4{
          bottom: -165px;
          right: 400px;
        }
        #time-line-img{
          position: relative;
          left: 50%;
          transform: translateX(-50%);
        }
      }     
    }
    .container{
      .box-event{
        width: 32%;
        position: relative;
        .btn{
          background-color: #E56768;
          position: absolute;
          bottom: -22px;
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }
  }
  #latest-courses{
    padding: 100px 0;
    .container{
      .d-flex{
        .box-course{
          width: 24%;
          position: relative;
          border: 1px solid lightgray;
          .img-box{
            width: 100%;
            img{
              width: 50%;
            }
          }
          .btn{
            background-color: #E56768;
            position: absolute;
            bottom: -25px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 15px;
          }
        }
      }
      .exam{
        .container{
          .left-box{
            width: 50%;
            #exam-icon{
              width: 20%;
              img{
                width: 50%;
              }
            } 
            h2{
              font-size: 40px;
            }
            p{
              padding-right: 100px;
            }
            a{
              background-color: #E56768;
            }
          }
          .right-box{
            width: 50%;
            img{
              width: 80%;
            }
          }
        }
      }
      .fees{
        .container{
          .left-box{
            width: 50%;
            img{
              width: 80%;
            }
          }
          .right-box{
            width: 50%;
            #fees-icon{
              width: 20%;
              img{
                width: 50%;
              }
            } 
            h2{
              font-size: 40px;
            }
            p{
              padding-right: 100px;
            }
            a{
              background-color: #E56768;
            }
          }
        }
      }
    }
    
  }
}
</style>