<template>
    <div id="header">
        <div class="btn-menu">
            <img src="@/assets/logo.png" alt="메뉴">
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    #header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.16);
    display: flex;
    justify-content: flex-start;
    padding: 0 20px;
    box-sizing: border-box;
    align-items: center;

    & .btn-menu {
      cursor: pointer;
    }
  }
</style>