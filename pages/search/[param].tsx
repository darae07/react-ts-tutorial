import { GetStaticProps, GetStaticPaths } from "next";
import {useRouter} from "next/router";
import { useQueryClient, useQuery } from 'react-query'
import {getSearch} from "controllers/search";
import SearchForm from "components/searchForm";
import Image from 'next/image';
import styles from "./[param].module.css";
import Link from 'next/link'
import All from "./all";
import queryString from "query-string";
import Layout from "../../components/layout";

export default function Search(){
  const router = useRouter();
  const {param, cacheId, tab} = router.query;
  const {asPath} = router;

  return (
    <Layout param={typeof param === "string" && param}>
    <div>
      <div className={styles.cont_wrap}>
        <div className={styles.conts_section}>
          <div className={styles.conts}>
            <div className={styles.search_phrse}>
              <p><strong className={styles.fc_serch}>'{param}'</strong>에 대한 검색 결과입니다.</p>
            </div>
            <div className={styles.wrap_tab03}>
              <ul>
                <li className={tab === 'all' ? styles.on : ''}><a href={queryString.stringifyUrl({ url: asPath, query: { tab: 'all' } })}>통합검색</a></li>
                <li className={tab === 'artist' ? styles.on : ''}><a href={queryString.stringifyUrl({ url: asPath, query: { tab: 'artist' } })}>아티스트</a></li>
                <li className={tab === 'song' ? styles.on : ''}><a href={queryString.stringifyUrl({ url: asPath, query: { tab: 'song' } })}>곡</a></li>
                <li className={tab === 'album' ? styles.on : ''}><a href={queryString.stringifyUrl({ url: asPath, query: { tab: 'album' } })}>앨범</a></li>
                <li className={tab === 'video' ? styles.on : ''}><a href={queryString.stringifyUrl({ url: asPath, query: { tab: 'video' } })}>영상</a></li>
                <li className={tab === 'lyric' ? styles.on : ''}><a href={queryString.stringifyUrl({ url: asPath, query: { tab: 'lyric' } })}>가사</a></li>
                <li className={tab === 'dj' ? styles.on : ''}><a href={queryString.stringifyUrl({ url: asPath, query: { tab: 'dj' } })}>DJ플레이리스트</a></li>
                <li className={tab === 'mag' ? styles.on : ''}><a href={queryString.stringifyUrl({ url: asPath, query: { tab: 'mag' } })}>멜론매거진</a></li>
                <li className={tab === 'cs' ? styles.on : ''}><a href={queryString.stringifyUrl({ url: asPath, query: { tab: 'cs' } })}>고객지원</a></li>
              </ul>
            </div>

            <section className={styles.section}>
             {tab === "all" && <All/>}

            </section>
          </div>
        </div>
      </div>
    </div>
  </Layout>

  )
}

