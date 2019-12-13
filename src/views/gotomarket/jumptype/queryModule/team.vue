<template>
    <div class="team-box">
        <div class="title"> 优秀团队推荐 </div>
        <ul>
            <li class="elps" v-for="(item,index) in 10" :key="index">工程造价咨询工作室</li> 
        </ul>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.team-box{
    margin-top: 20px;
    width: 100%;
    border: 1px solid #e5e5e5; 
    padding: 15px; 
    .title{  
        color: #333;
        font-size: 16px;
        padding-left: 6px;
        border-left: 2px solid #21a0f5; 
    }  
    ul{
        font-size: 14px;
        color: #666;
        max-height: 450px;
        li{
            height: 40px;
            line-height: 40px;
            border-bottom: 1px dashed #e5e5e5;
            cursor: pointer;
            &:hover{
                color: #f60;
            }
        }
    }
}
</style>