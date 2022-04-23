
<template>
  <div>
    <Header/>
    <div id="content">
      <img alt="Vue logo" src="@/assets/logo.png" width="200" height="200">
      <div class="title">
        WELCOME
      </div>
    </div>  
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
export default {
  components: {
    Header, Footer
  } // import한 Header.vue를 'Header'의 이름으로 컴포넌트를 등록
}
</script>

<style lang="scss">
  body {
    font-family: sans-serif;
    margin: 0;
  }

  #content {
    height: calc(100vh - 60px);
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;    
    margin-top: 60px;

    & .title {
      font-size: 50px;
      font-weight: 600;
      margin-top: 15px;
    }
  }
</style>