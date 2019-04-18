
import {request} from "../utils/util";
import Cookies from 'js-cookie';
import router from '../router';

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
                await request('/login', {
                    ...payload,
                    method: 'POST',
                    mode: 'no-cors', // no-cors
                });
                Cookies.set('auth', 'logined', { expires: 1 });
                router.push('/home')
            }catch (e) {
            }
            store.commit('setLogining', false)
        }
    }
}
