import axios from 'axios'
import config from './config';
var querystring=require("querystring")

const server = config.ip+config.port;

const connection = {
    get:function(req,object){
        let url = server + req;
        return axios.get(url, {
            params: object
        })
    },

    post:function(req,object){
        let url = server + req;
        // return axios.post(url, object);
        return axios.post(url, querystring.stringify(object));
    }
}

export default connection