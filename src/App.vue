<template>
  <div class="wapper">
    <HeaderSection 
      :title="title"
    />
    <div class="wrapper-content">
      <div class="container">
        
          <router-view />
        
      </div>
    </div>
    <FooterSection
    />
  </div>
</template>


<script>
import HeaderSection from "@/components/HeaderSection";
import FooterSection from "@/components/FooterSection";
export default {
  components: {
    HeaderSection,
    FooterSection
  },
  data(){
    return{
      title : 'Logo',
      
    }
  }
}
</script>

<style>

</style>
