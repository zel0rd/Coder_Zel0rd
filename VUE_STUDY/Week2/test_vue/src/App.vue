<template>
  <div>
    <div class="align-center">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

div {
  background-color: #e6e5ff;
}

.align-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>