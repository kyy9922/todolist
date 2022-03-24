<template>
  

  <transition name="fade">
    <Modal @closeModal="모달창열렸니 = false;" :원룸들="원룸들"
  :누른거="누른거" :모달창열렸니="모달창열렸니" />
  </transition>

  <!-- 모달창 -->
  <!-- <div class="black-bg" v-if="모달창열렸니 == true">
    <div class="white-bg">
      <img :src="원룸들[누른거].image" style="width:100%">
      <h4>{{ 원룸들[누른거].title }}</h4>
      <p>{{ 원룸들[누른거].content}}</p>
      <p>{{ 원룸들[누른거].price}}</p>
      <Discount/>
      <button @click="모달창열렸니 = false">닫기</button>
    </div>
  </div> -->
  <!-- <Modal @closeModal="모달창열렸니 = false;" :원룸들="원룸들"
  :누른거="누른거" :모달창열렸니="모달창열렸니" /> -->

  <!-- 상단메뉴 -->
  <div class="menu">
    <a v-for="(a) in 메뉴들" :key="a">{{a}}</a>
  </div>

  <Discount v-if="showDiscount == true"/>

  <button @click="priceSort">가격낮은순정렬</button>
  <button @click="sortBack">되돌리기</button>
  <button @click="highSort">가격높은순정렬</button>
  <button @click="listSort">가나다순정렬</button>

  <!-- 레이아웃 -->
  <!-- <div v-for="(a,i) in 원룸들" :key="i">
    <img :src="a.image" class="room-img">
    <h4 @click="모달창열렸니 = true; 누른거 = i">{{ a.title }}</h4>
    <p>{{a.price}}</p>
  </div> -->

  <Card @openModal="모달창열렸니 = true; 누른거 = $event" :원룸="원룸들[i]" 
  v-for="(작명,i) in 원룸들" :key="작명" />
  
  <!-- <div v-for="(a,i) in products" :key="i">
    <h4>{{ a }}</h4>
    <p>50 만원</p>    
  </div> -->

  <!-- <div v-for="(a,i) in 경고" :key="i">
    <img class="room-img" src="./assets/room0.jpg">
    <h4 @click="모달창열렸니 = true">{{ products[i] }}</h4>
    <p>50 만원</p>
    <button @click="경고[i]++">허위매물신고</button> <span>신고수 : {{a}}</span>
  </div> -->

  <!-- <div>
    <h4 @click="모달창열렸니 = true">{{ products[0] }}</h4>
    <p>50 만원</p>
    <button @click="경고[0]++">허위매물신고</button> <span>신고수 : {{경고[0]}}</span>
  </div>
  <div>
    <h4>{{ products[1] }}</h4>
    <p>50 만원</p>
    <button @click="경고[1]++">허위매물신고</button> <span>신고수 : {{경고[1]}}</span>
  </div>
  <div>
    <h4>{{ products[2] }}</h4>
    <p>50 만원</p>
    <button @click="경고[2]++">허위매물신고</button> <span>신고수 : {{경고[2]}}</span>
  </div> -->
</template>

<script>
import data from './assets/oneroom.js';
import Discount from './Discount.vue';
import Modal from './Modal.vue';
import Card from './Card.vue';


export default {
  name: 'App',
  data(){
    return{
      showDiscount : true,
      원룸오리지널 : [...data],
      누른거 : 0,
      원룸들 : data,
      모달창열렸니 : false,
      경고 : [0,0,0],
      메뉴들 : ['Home', 'Shop', 'About'],
      price1 : 60,
      price2 : 70,
      style : 'color:blue',
      products : ['역삼동원룸', '천호동원룸', '마포구원룸'],
    }
  },
  methods: {
    increase(){
      this.신고수 += 1;
    },
    sortBack(){
      this.원룸들 = [...this.원룸오리지널];
    },
    priceSort(){
      this.원룸들.sort(function(a,b){
        return a.price - b.price
      })
    },
    highSort(){
      this.원룸들.sort(function(a,b){
        return b.price - a.price
      })
    },
    listSort(){
      this.원룸들.sort(function(a,b){
        if(a.title>b.title) return 1;
        if(a.title===b.title) return 0;
        if(a.title < b.title) return -1;
      })
    }    
  },

  setInterval(() => {
    
  }, 1000);

  


  components: {
    Discount : Discount,
    Modal : Modal,
    Card : Card,
  }
}
</script>

<style>
.fade-enter-from {transform:translateY(-1000px)}
.fade-enter-active {transition: all 1s}
.fade-enter-to {opacity:1;transform:translateY(0px)}

.fade-leave-from {opacity: 1;}
.fade-leave-active {transition: all 1s}
.fade-leave-to {opacity:0;}
body {
  margin : 0;
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%; height:100%;
  background: rgba(0,0,0,0.5);
  position: fixed; padding: 20px;
}
.white-bg {
  width: 100%; background: white;
  border-radius: 8px;
  padding: 20px;
} 

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.menu {
  background:darkslateblue;
  padding:15px;
  border-radius: 5px;

}
.menu a{
  color:white;
  padding-left:10px;
}
.room-img {
  width:100%;
  margin-top:40px;
}















</style>
