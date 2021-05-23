import { GetStaticProps, GetStaticPaths } from "next";
import {useRouter} from "next/router";
import { useQueryClient, useQuery } from 'react-query'
import {getSearch} from "controllers/search";

export default function Search(){
  const router = useRouter();
  const {param, cacheId} = router.query;

  
  const searchQueryData = useQuery(['search', param], getSearch);

  const searchData = searchQueryData.data && searchQueryData.data.items ?
    searchQueryData.data.items.find(item => item.cacheId === cacheId)
    : null

  return(
    <div>
      <p>{cacheId}</p>
      {searchData && <div>
        <p>{searchData.title}</p>
        </div>}
      {/* {searchData && <p>{searchData.title}</p>} */}
      {/* {searchData && searchData.items} */}
    </div>
  )
}

