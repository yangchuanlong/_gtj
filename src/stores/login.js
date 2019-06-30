
import {request} from "../utils/util";
import Cookies from 'js-cookie';
import router from '../router';
import {Notification} from 'element-ui'

export default {
    namespaced: true,
    state: {
        loading: false
    },
    mutations: {
        setLogining(state, loading){
            state.loading = loading;
        }
    },
    actions: {
        login: async function (store, payload) {
            store.commit('setLogining', true);
            try{
                const {code, data} = await request('/login', {
                    ...payload,
                    method: 'POST',
                    mode: 'no-cors', // no-cors
                });
                Cookies.set('auth', 'logined', { expires: 1 });
                router.push('/home')
            }catch (e) {
                console.log(e)
                Notification({
                    title: '',
                    message: "服务器开小差",
                    type: 'error'
                })
            }
            store.commit('setLogining', false)
        }
    }
}
