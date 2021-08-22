<template>
    <div>
        <h1 @click="increase">{{count}}asdlfjl</h1>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                count:0
            }
        },
        methods: {
            increase() {
                this.count += 1
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>