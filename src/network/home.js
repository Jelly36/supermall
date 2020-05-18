import {request} from "./request"
console.log(request)
export function getHomeMultidata(){
    console.log()
    return request({
        url:'/home/multidata'
    });
} 