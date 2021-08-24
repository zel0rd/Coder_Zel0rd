<template>
    <div>
        <div class="title">aa{{ isModalActive }}</div>
        <div class="test"><h1> asdfasd{{ isModalActive }} 테스트입니다</h1></div>
    </div>
</template>

<script>
    export default {
        props: ['isModalActive'],
        beforeCreate () {
            console.log("TEST")
        }
    }
</script>

<style lang="scss" scoped>

.modal {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    background-color: rgba(0,0,0,0.5);
}

.modalContent {
    width: 700px;
    height: 100px;
    background-color:white;
    margin:auto;
}
</style>