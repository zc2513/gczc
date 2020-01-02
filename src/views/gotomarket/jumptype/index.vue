<template>
  <div class="jumptype-box">
    <div v-for="(item,index) in list" :key="index" class="row">
      <div v-if="index<3" style="cursor: pointer;" @click="goto">
        <img :src="require(`../../../assets/imgs/jump/${item.src}.jpg`)" alt="">
      </div>
      <div v-else class="row6">
        <div v-for="(val,key) in item.data" :key="key" @click="goto">
          <img :src="require(`../../../assets/imgs/jump/${val.src}.jpg`)" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'JumpType',
    data() {
        return {
            list: [
                { name: '找企业', src: 1 },
                { name: '找团队', src: 2 },
                { name: '找业绩', src: 3 },
                {
                    data: [
                        {
                            name: '名字一',
                            src: 4
                        },
                        {
                            name: '名字二',
                            src: 5
                        }
                    ]
                },
                {
                    data: [
                        {
                            name: '名字一',
                            src: 6
                        },
                        {
                            name: '名字二',
                            src: 7
                        }
                    ]
                },
                {
                    data: [
                        {
                            name: '名字一',
                            src: 8

                        },
                        {
                            name: '名字二',
                            src: 9
                        }
                    ]
                },
                {
                    data: [
                        {
                            name: '名字一',
                            src: 10
                        },
                        {
                            name: '名字二',
                            src: 11
                        }
                    ]
                },
                {
                    data: [
                        {
                            name: '名字一',
                            src: 12
                        },
                        {
                            name: '名字二',
                            src: 13
                        }
                    ]
                },
                {
                    data: [
                        {
                            name: '名字一',
                            src: 14
                        },
                        {
                            name: '名字二',
                            src: 15
                        }
                    ]
                }

            ]
        }
    },
    methods: {
        goto() {
            this.$router.push({
                path: 'jump'
            })
        }
    }
}
</script>

<style lang="scss" scoped>

.jumptype-box{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .row{
        box-sizing: border-box;
        text-align: center;
        >div{
            width: 32%;
            min-width: 416px;
            height: 130px;
            margin-top: 15px;
            border-radius: 10px;
        }
        .row6{
            display: flex;
            justify-content: space-between;
            >div{
                cursor: pointer;
                width: 48%;
                height: 100%;
                min-width: 200px;
                border-radius: 10px;
                height: 100%;
            }
        }
    }

}
</style>
