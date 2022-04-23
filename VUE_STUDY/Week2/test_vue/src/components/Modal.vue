<template>
    <div class="modal" v-show="isModalActive">
        <div class="modalContents">
            <span class="material-icons closeBtn" @click="update">close</span>
            <h1> 안녕하세요 모달입니다.</h1>
        </div>
        <link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet">
    </div>
</template>

<script>
    export default {
        props: ['isModalActive'],
        methods : {
            update() {
                this.$emit('toggleModal', !this.isModalActive)
            }
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

.closeBtn {
    width: 25px;
    background-color: #dadada;
    position: absolute;
    top: 300px;
    right: 625px;
    cursor: pointer;
}

.modalContents {
    background-color: white;
    width:700px;
    height: 300px;
    margin:auto;
    margin-top: 15%;
    text-align: center;
    line-height: 300px;
}

.modalContent {
    width: 700px;
    height: 100px;
    background-color:white;
    margin:auto;
}
</style>