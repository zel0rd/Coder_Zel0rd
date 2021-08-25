<template>
    <div>
        <div>
            <button @click="add">클릭</button>
            <h1 v-once>
                v-once 적용 : {{ msg }}
            </h1>
            <h1>
                v-once 미적용 : {{ msg }}
            </h1>
        </div>
        <p>이중 중괄호(Mustaches) 사용: {{ rawHtml }} </p>
        <p>v-html 디렉티브 사용(원시 HTML): <span v-html="rawHtml"></span></p>
        <div>
            <button @click="changeStatus">상태 바꾸기</button>
            <button @[event]="changeStatus">동적전달 인자로 상태 바꾸기</button>
            <div :class="status">여기는 v-bind : {{ status }}</div>
            <div :[attr]="status">attr 적용하기 : {{ status }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: "Hello world",
                rawHtml: "<div style='background-color:red'>test</div>",
                status: "active",
                attr: 'class',
                event: 'click',
            }
        },
        methods: {
            add() {
                this.msg += "!"
            },
            changeStatus() {
                this.status = this.status !== 'active' ? 'active' : 'deactive'
            }
        }
        
    }
</script>

<style lang="scss" scoped>
h1, div, p {
    padding: 20px 0;
}
.active {
    color: blue;
}

.deactive {
    color: red;
}
</style>