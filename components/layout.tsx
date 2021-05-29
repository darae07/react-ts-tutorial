import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import SearchForm from "./searchForm"

const name = '멜론 클론코딩'
export const siteTitle = '멜론 클론코딩'

export default function Layout({ children, home, param }: {
  children: React.ReactNode,
  home?: boolean,
  param?: string,
}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <div className={styles.header_wrap}>
          <div className={styles.gnb}>
            <div className={styles.util_menu}>
              <div className={styles.top_left}>
                <ul>
                  <li><a><span>멜론 티켓</span></a></li>
                </ul>
              </div>
              <div className={styles.top_right}>
                <ul>
                  <li><a><span>이용권구매</span></a></li>
                  <li><a><span>멜론혜택관</span></a></li>
                  <li><a><span>이벤트</span></a></li>
                  <li><a><span>공지사항</span></a></li>
                </ul>
              </div>
            </div>
            <div className={styles.util_cont}>
              {!home ? (
                <div>
                  <Link href="/">
                    <img src="/images/logo_melon142x99.png" alt="logo" />
                  </Link>
                </div>
              ) :
                <img src="/images/logo_melon142x99.png" alt="logo" />
              }
              <SearchForm param={param} />
              <div><span>급상승</span></div>
              <div><span>배너영역</span></div>
            </div>

          </div>
          <div className={styles.gnb_menu} id="gnb_menu">
            <ul>
              <li><a>멜론차트</a></li>
              <li><a>최신음악</a></li>
              <li><a>장르음악</a></li>
              <li><a>멜론DJ</a></li>
              <li><a>멜론TV</a></li>
              <li><a>스타포스트</a></li>
              <li><a>매거진</a></li>
              <li><a>뮤직어워드</a></li>
            </ul>
            <ul>
              <li><a>마이뮤직</a></li>
            </ul>
          </div>

        </div>
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
