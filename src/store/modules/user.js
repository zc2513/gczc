// import { login, logout, getInfo } from '@/api/user'
// eslint-disable-next-line no-unused-vars
import { getToken, setToken, removeToken } from '@/utils/auth'
// import { resetRouter } from '@/router'

const state = {
    token: getToken(),
    name: '',
    avatar: ''
}

const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token
    },
    SET_NAME: (state, name) => {
        state.name = name
    },
    SET_AVATAR: (state, avatar) => {
        state.avatar = avatar
    }
}

const actions = {
    // user login
    login({ commit }, userInfo) {
        // const { username, password } = userInfo
        return new Promise((resolve, reject) => {
            alert('缺少登录接口')
            resolve()
            // login({ username: username.trim(), password: password }).then(response => {
            //     const { data } = response
            //     commit('SET_TOKEN', data.token)
            //     setToken(data.token)
            //     resolve()
            // }).catch(error => {
            //     reject(error)
            // })
        })
    },

    // get user info
    getInfo({ commit, state }) {
        return new Promise((resolve, reject) => {
            alert('缺少信息拉去接口')
            resolve()
            // getInfo(state.token).then(response => {
            //     const { data } = response

            //     if (!data) {
            //         reject('获取用户信息失败，请重新登录')
            //     }

            //     const { name, avatar } = data
            //     commit('SET_NAME', name)
            //     commit('SET_AVATAR', avatar)
            //     resolve(data)
            // }).catch(error => {
            //     reject(error)
            // })
        })
    },

    // user logout
    logout({ commit, state }) {
        return new Promise((resolve, reject) => {
            alert('缺少退出接口')
            resolve()
            // logout(state.token).then(() => {
            //     commit('SET_TOKEN', '')
            //     removeToken()
            //     resetRouter()
            //     resolve()
            // }).catch(error => {
            //     reject(error)
            // })
        })
    },

    // remove token
    resetToken({ commit }) {
        return new Promise(resolve => {
            commit('SET_TOKEN', '')
            removeToken()
            resolve()
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}

