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

