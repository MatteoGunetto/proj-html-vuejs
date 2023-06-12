<script>
import {store} from './store';
import PageHeader from './components/PageHeader.vue';
import PageMain from './components/PageMain.vue';
export default{
  name: "App",
  components: {
    PageHeader,
    PageMain
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
  </div>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>