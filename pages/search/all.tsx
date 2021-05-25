import {useRouter} from "next/router";
import { useQueryClient, useQuery } from 'react-query'
import {getSearch} from "controllers/search";
import styles from "./[param].module.css";

export default function All() {
  const router = useRouter();
  const { param, cacheId } = router.query;

  const searchQueryData = useQuery(['search', param], getSearch);
  const searchData = searchQueryData.data && searchQueryData.data.items ?
    searchQueryData.data.items.find(item => item.cacheId === cacheId)
    : null

  return (
    <div>
      <h3>통합검색</h3>
      {searchData && <div className={styles.wrap_cntt}>
        {searchData.pagemap.cse_thumbnail &&
          <img src={searchData.pagemap.cse_thumbnail[0].src} alt="" />}
        <div className={styles.atist_dtl_info}>
          <div className={styles.info_01}>
            <span className={styles.d_artist_list}>{searchData.title}</span>
          </div>
          <div className={styles.info_02}>
            <p>{searchData.snippet}</p>
          </div>
        </div>
      </div>}
    </div>
  )
}