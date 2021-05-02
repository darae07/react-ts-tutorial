import axios from "axios";
import {API} from "../config";

export function getPosts(){
    return axios.post(API+"/v1/timeline/getPosts", {
        listBlock: 12,
        page: 1,
        searchByAdmin: 1,
        postType: 2
    }).then(res=>res.data)
}