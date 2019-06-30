
import {request} from "../utils/util";
import Cookies from 'js-cookie';
import router from '../router';
import {Notification} from 'element-ui'


export default {
    namespaced: true,
    state: {
        currPath: ''
    },
    mutations: {
        setCurrPath(state, currPath){
            console.log("home's mutations setCurrPath is invoked");
            state.currPath = currPath;
        }
    },
    actions: {

    }
}