<template>
    <div class='FooterGuide'>
        <router-link to='/msite'>
            <i :class="['iconfont icon-icon-test',{'on':'/msite'===$route.path}]"></i>
        </router-link>
        <router-link to='/order'>
            <i :class="['iconfont icon-icon-test',{'on':'/order'===$route.path}]"></i>
        </router-link>
        <router-link to='/message'>
            <i :class="['iconfont icon-icon-test',{'on':'/message'===$route.path}]"></i>
        </router-link>
        <router-link to='/profile'>
            <i :class="['iconfont icon-icon-test',{'on':'/profile'===$route.path}]"></i>
        </router-link>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{

    }
}
</script>
<style lang='scss' spoced>
@import '../../../public/css/myStyle.scss';
.FooterGuide{
    display: flex;
    height: 3rem;
    line-height: 3rem;
    bottom: 0;
    position: fixed;
    justify-content: center;
    align-items: center;
    width: 100%;
    z-index: 100;
    background: #fff;
    border-top:1px solid #ccc ;
    a{
        flex: 1;
        text-align: center;
        text-decoration: none;
        color: red;
        .on{
            color: $oc;
        }
    }
}

</style>