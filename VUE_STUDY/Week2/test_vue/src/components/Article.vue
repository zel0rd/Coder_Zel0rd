<template>
    <div>
        <div class="title">{{ article.title }}</div>
        <div class="author">{{ article.author }}</div>
        <div class="content">{{ article.content }}</div>
        <div class="like__wrapper">
            <div class="like">아이콘 {{ article.like }}</div>
            <div class="dislike">아이콘 {{ article.dislike }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['article'],
    }
</script>

<style lang="scss" scoped>
$main-margin: 15px;


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

</style>