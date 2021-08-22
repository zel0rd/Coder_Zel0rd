
<template>
    <div id="wrapper">
        <div class="postBtn" @click="$router.push('/post')">POST</div>
        <div class="container">
            <div class="row" v-for="row in lineCount" :key="row">
                <div class="article" v-for="(article, idx) in articles.filter( (v, i) => (i % lineCount) + 1 == row)" :key="idx" @click="$router.push(`/edit/${article._id}`)" @contextmenu="test(article._id)">
                        <div class="title">{{ article.title }}</div>
                        <div class="author">{{ article.author }}</div>
                        <div class="content">{{ article.content }}</div>
                        <div class="like__wrapper">
                            <div class="like">아이콘 {{ article.like }}</div>
                            <div class="dislike">아이콘 {{ article.dislike }}</div>
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data: function () { 
            return {
                articles: [],
                lineCount: 4,
            }
        },
        beforeCreate() {
            axios.get("https://api.t0dd.kr/v0/articles")
            .then((response) => {
                this.articles = response.data.articles
            })
        },
        methods : {
            async test(id) {
                if(confirm("삭제하시겠습니까??")){
                    console.log("삭제")
                    await axios.delete(`https://api.t0dd.kr/v0/article/${id}`);
                    
                    
                    await axios.get("https://api.t0dd.kr/v0/articles")
                    .then((response) => {
                        this.articles = response.data.articles
                    })
                } else {
                    console.log("취소")
                }
            }   
        }
    }
</script>

<style lang="scss" scoped>
@import url('https://cdn.rawgit.com/innks/NanumSquareRound/master/nanumsquareround.min.css');
$main-margin: 15px;

* {
    font-family: 'NanumSquareRound',sans-serif;
    font-weight: 700;
}
#wrapper {
    width: 1000px;
}
.container {
    width: 100%;
    display:flex;
    justify-content: space-between;
}
.row {
    width: 200px;
    display:flex;
    flex-flow:column;
    // background: linear-gradient(145deg, #FEFFFF, #AEB9CF);
}

.row > div {
    // width: 150px;
    border: 1px solid rgba(0,0,0,.1);
    box-shadow: 1px black;
    // background-color: lightgray;
    margin: 10px 0;
}

.title {
    font-size: 24px;
    margin: $main-margin;
}

.author {
    font-size: 18px;
    text-align: right;
    margin-right: $main-margin;
}

.content {
    font-size: 14px;
    margin: $main-margin*2 $main-margin;
}

.article {
    color:white;
    
    background: #26ADE2;
    border-radius: 3%;
    box-shadow: 0.3px 0.3px 26px #7D8CA8, -0.3px -0.3px 26px #DFF8FF;
}

.like__wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: $main-margin $main-margin;
}

.like, .dislike {
    padding: 5px;
    border: 1px solid grey;
    border-radius: 10px;
    box-shadow: 10px 5px 5px rgba(0,0,0,.5);
}

.postBtn {
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    
    color:white;

    background-color : rgba(0,0,0,.3);
    border-radius: 5px;
}       
</style>