<template>
  <div id="footer">
    <div id="made-by">
      Made by t0dd with Vue
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
  #footer {
    width: 100%;
    height: 100px;
    background-color: #474747;
    color: #fff;
    font-weight: 300;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;

    & #made-by {
      font-size: 14px;
    }
  }
</style>