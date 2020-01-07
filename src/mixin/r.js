/**
 * @description 主要拦截处理在生产环境下，跳转到老版路由
 * */
export const routReset = {
    beforeRouteEnter(to, from, next) {
        switch (to.path) {
            case '/home/index' :
                location.href = '/'
                break
            case '/crowdsourcing/index' :
                location.href = '/Bim/Index'
                break
            case '/oncall/index' :
                location.href = '/Tender/Index'
                break
            case '/entrust/index' :
                location.href = '/Entrust/Index'
                break
        }
        next(false)
    }
}
