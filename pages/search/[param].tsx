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

export default function Search(){
  const router = useRouter();
  const {param, cacheId, tab} = router.query;
  const {asPath} = router;

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.gnb}>
          <div className={styles.gnb_mini_menu}>
            <div className={styles.wrap_gnb_more}>
              <ul>
                <li>멜론차트</li>
                <li>최신음악</li>
                <li>장르음악</li>
                <li>멜론DJ</li>
                <li>멜론TV</li>
                <li>스타포스트</li>
                <li>매거진</li>
                <li>마이뮤직</li>
              </ul>
            </div>
            <div className={styles.header_login}>
              <span>로그인</span>
            </div>
          </div>
        </div>
        <div className={styles.util_cont}>
          <Link href="/">
            <Image
              src="/images/logo_melon142x99.png"
              height={99}
              width={142}
            />
          </Link>
          <SearchForm param={typeof param === 'string' ? param : ''} />
        </div>
      </header>

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
  )
}

const searchData =  {
  "kind": "customsearch#result",
  "title": "홀로",
  "htmlTitle": "홀로",
  "link": "https://www.melon.com/album/detail.htm?albumId=10465994",
  "displayLink": "www.melon.com",
  "snippet": "2020년 7월 23일 ... '홀로'는 이하이가 AOMG 입단 후 처음으로 발매하는 싱글로, '손잡아 줘요'에서 좋은 \n합을 보여줬던 바버렛츠의 안신애가 작사, 작곡을 맡았으며, 홀로 ...",
  "htmlSnippet": "2020년 7월 23일 \u003cb\u003e...\u003c/b\u003e &#39;홀로&#39;는 \u003cb\u003e이하이\u003c/b\u003e가 AOMG 입단 후 처음으로 발매하는 싱글로, &#39;손잡아 줘요&#39;에서 좋은 \u003cbr\u003e\n합을 보여줬던 바버렛츠의 안신애가 작사, 작곡을 맡았으며, 홀로&nbsp;...",
  "cacheId": "GC1GtrBpv6MJ",
  "formattedUrl": "https://www.melon.com/album/detail.htm?albumId=10465994",
  "htmlFormattedUrl": "https://www.melon.com/album/detail.htm?albumId=10465994",
  "pagemap": {
    "cse_thumbnail": [
      {
        "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSBCVxX59r_ohwLu3adE-tf8X0yPBd-1qXHaPvD2EPZYux_MbxYaaznEE",
        "width": "225",
        "height": "225"
      }
    ],
    "metatags": [
      {
        "og:image": "https://cdnimg.melon.co.kr/cm2/album/images/104/65/994/10465994_20200723160043_500.jpg?8db1857c022f2f71eedcb170efbcc16d",
        "fb:app_id": "357952407588971",
        "og:type": "website",
        "naver-site-verification": "e2b43191afa0f1d2deb8e2cda8f45ee1408c44a1",
        "viewport": "width=device-width",
        "og:title": "홀로",
        "og:url": "http://www.melon.com/album/detail.htm?albumId=10465994",
        "og:description": "음악이 필요한 순간, 멜론"
      }
    ],
    "cse_image": [
      {
        "src": "https://cdnimg.melon.co.kr/cm2/album/images/104/65/994/10465994_20200723160043_500.jpg?8db1857c022f2f71eedcb170efbcc16d"
      }
    ]
  }
};