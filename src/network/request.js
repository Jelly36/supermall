import axios from "axios";

export function request(config) {
    const instance = axios.create({
        baseURL: "http://123.207.32.32:8000"
    });

    instance.interceptors.response.use(function(res){
        return res.data;
    })
    return instance(config);
}

export function request2(config) {
    const instance2 = axios.create({
        baseURL: "http://152.136.185.210:8000/api/n3"
    });

    instance2.interceptors.response.use(function(res){
        return res.data;
    })
    return instance2(config);
}
