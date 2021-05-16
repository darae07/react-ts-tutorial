import axios from "axios";

export function getPosts(){
    return axios.post(process.env.NEXT_PUBLIC_API_URL+"/v1/timeline/getPosts", {
        listBlock: 12,
        page: 1,
        searchByAdmin: 1,
        postType: 2
    }).then(res=>res.data)
}