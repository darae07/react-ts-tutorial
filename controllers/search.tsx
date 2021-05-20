import axios from "axios";

export function getSearch(params) {
  const { pageParam, queryKey } = params
  const query = queryKey[1]
  if (!query) return
  return axios.get(process.env.NEXT_PUBLIC_GOOGLE_SEARCH_URL + query).then(res => res.data)
}