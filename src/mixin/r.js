/**
 * @description 处理当前项目与老版页面跳转
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
