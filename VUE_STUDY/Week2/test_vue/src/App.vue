<template>
  <div class="align-center">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss">
@import url('https://cdn.rawgit.com/innks/NanumSquareRound/master/nanumsquareround.min.css');

* {
    font-family: 'NanumSquareRound',sans-serif;
    font-weight: 700;
}

body {
  margin: 0;
}


.align-center {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e6e5ff;
}

.container, .row {
  background-color: #e6e5ff;

}

</style>