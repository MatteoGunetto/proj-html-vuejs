<script>
import {store} from './store';
import PageHeader from './components/PageHeader.vue';
import PageMain from './components/PageMain.vue';
import PageFooter from './components/PageFooter.vue';
export default{
  name: "App",
  components: {
    PageHeader,
    PageMain,
    PageFooter
  },
  data(){
    return{
      store
    }
  },
  created(){
    
    
    
  },
  computed:{
    
  },
  methods: {
   
    
  
}
}
</script>
<template>
  <div>
    <PageHeader/>
    <PageMain/>
    <PageFooter/>
  </div>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>