<template>
    <div id="wrapper">
        <input v-model="title" class="inputBox title" placeholder="Title" />
        <input v-model="author" class="inputBox author" placeholder="Author" />
        <textarea v-model="content" class="inputBox content"  placeholder="Content"></textarea>
        <div class="postBtn" @click="edit" v-if="$route.params.id">EDIT</div>
        <div class="postBtn" @click="post" v-else>POST</div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data: function () { 
            return {
                title: '',
                author: '',
                content: ''
            }
        },
        methods: {
            post () {
                axios.post("https://api.t0dd.kr/v0/article",{
                    title: this.title,
                    author: this.author,
                    content: this.content,
                })
                .then(() => {
                    this.$router.push('/')
                })
                ;
            },
            edit() {
                axios.put(`https://api.t0dd.kr/v0/article/${this.$route.params.id}`,{
                    title: this.title,
                    author: this.author,
                    content: this.content,
                    },
                ).then(() => {
                    this.$router.push('/')
                })
            }
        },
        beforeCreate() {
            if(this.$route.params.id) {
                let id = this.$route.params.id
                axios.get(`https://api.t0dd.kr/v0/article/${id}`)
                .then((res) => {
                    this.title = res.data.title
                    this.author = res.data.author
                    this.content = res.data.content
                })
            }

        },
    }
</script>

<style lang="scss" scoped>
$main-margin: 15px;

* {
    font-family: 'NanumSquareRound',sans-serif;
    font-weight: 700;
    height: 100vh;
}



#wrapper {
    width: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

input, textarea {
    outline: none;
}

.inputBox {
    font-size: 20px;
    margin: 10px 0;
    padding-left: 10px;
}

.title {
    height: 50px;
}

.author {
    height: 50px;
}

.content {
    height: 300px;
    line-height: 50px;
}

.postBtn {
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    
    color:white;

    background-color : black;
    border-radius: 5px;
}       


</style>