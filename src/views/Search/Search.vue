<template>
    <div class='search'>
        <nut-searchbar
            placeText="搜索帖子或商品"
            :hasIcon="true"
            :hasTextButton="true"
            textInfo="搜索"
            customClass="searchpage"
            ref="searchText"
            @submit='submitFun'
            @input='inputFun'
        ></nut-searchbar>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    mounted(){
        // 获取焦点
        this.$nextTick(function(){
            this.$refs.searchText.focus()
        })
    },
    methods:{
        submitFun(value) {
            console.log(value);
            console.log('默认提交操作！');
        },
        inputFun(value) {
            console.log(value);
            console.log('您正在输入...');
        },
        blurFun(value) {
            console.log(value);
            console.log('您已失去焦点！');
        },
    }
}
</script>
<style lang='scss' scoped>
.search{
    background: #fff;
    height: 100%;
    .searchpage{
        padding: 0.5rem;
    }
}
</style>