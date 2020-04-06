import axios from 'axios';
export default function ajax(url , data={} , type='GET' ){
    return new Promise( function (resolve , reject) {
        //执行异步操作
        let promise
        if(type==='GET'){
            //拼接数据
            let dataStr = '';
            Object.keys(data).forEach(key => {
                dataStr += key + '=' + data[key] + '&'
            })
            if(dataStr !== ''){
                dataStr = dataStr.substring(0,dataStr.lastIndexOf('&'))
                url = url + '?' + dataStr;
            }
            // 发送Get请求
            promise = axios.get(url);
        }else{
            // 发送psot请求
            promise = axios.post(url,data);
        }
        promise.then(function(response){
            resolve(response.data);
        }).catch(function(error){
            reject(error);
        })
    })
}