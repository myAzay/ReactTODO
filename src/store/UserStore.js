import {makeAutoObservable} from 'mobx';
import jwtDecode from 'jwt-decode';

export default class UserStore {
    constructor(){
        this._isAuth = false;
        this._user = {};
        if(localStorage.getItem('token')) {
            const decode = jwtDecode(localStorage.getItem('token'));
            this._user = localStorage.getItem('token') ? {userName: decode.unique_name, id: decode.nameid} : {};
        }
        makeAutoObservable(this);
    }

    setIsAuth(bool) {
        this._isAuth = bool;
    }

    get isAuth() {
        return this._isAuth;
    }

    setUser(user) {
        this._user = user;
    }

    get user() {
        return this._user;
    }
}