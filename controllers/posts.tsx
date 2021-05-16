import axios from "axios";

export function getPosts(){
    return axios.post(process.env.REACT_APP_API_URL+"/v1/timeline/getPosts", {
        listBlock: 12,
        page: 1,
        searchByAdmin: 1,
        postType: 2
    }).then(res=>res.data)
}