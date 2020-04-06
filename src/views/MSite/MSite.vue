<template>
    <div class='MSite'>
        <nut-swiper
            direction="horizontal"
            :loop="true"
            :swiperData="dataItem"
            :canDragging="false"
            :paginationVisible="true"
            :autoPlay='4000'
        >
            <div  v-for="(item,index) in dataItem" :key="index"  class="nut-swiper-slide" @click="imgClick(item.name)">
                <img class="img" :src="item.url" :alt="item.name">
            </div>
        </nut-swiper>
    </div>
</template>
<script>
import {reqTrendsList} from '../../api/index.js'
export default {
    data(){
        return{
            dataItem:[{name:'1',url:require('../../../public/images/01.png')},{name:'2',url:require('../../../public/images/02.jpg')}]
        }
    },
    methods:{
        imgClick(name){
            console.log(name);
            this.$router.push({
                path:'/MonentDetail',
                query:{id:name}
            })
        }
    },
    created(){
        reqTrendsList().then((res)=>{
            console.log(res.res)
        })
    }
}
</script>
<style lang='scss' scoped>
.MSite{
    .nut-swiper-slide{
        box-sizing: border-box;
        padding: 0.5rem;
    }
}

</style>