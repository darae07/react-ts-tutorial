import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../components/layout.module.css'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'
import { QueryClient, useQuery } from 'react-query'
import { dehydrate } from 'react-query/hydration'
import { getPosts } from "../controllers/posts";
import {NewAlbum, Events, LoginWrap, HotIssue, Chart} from "../components/main";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */

export default function Home({history}) {
  // const { data } = useQuery('posts', getPosts)

  return (
    <Layout home>
      <Head>
        <script src="https://use.fontawesome.com/releases/v5.2.0/js/all.js"></script>
        <title>{siteTitle}</title>
      </Head>
      <section className={styles.conts_section}>
        <div className={styles.conts}>
        <NewAlbum/>
        <Events/>
        <LoginWrap/>
        <HotIssue/>
        <Chart/>
        </div>
      </section>
    </Layout>
  )
}

// This function gets called at build time
export const getStaticProps: GetStaticProps = async () => {
  // Call an external API endpoint to get data

  const queryClient = new QueryClient();
  // let a = await queryClient.prefetchQuery('posts', getPosts)

   return {
     props: {
       dehydratedState: dehydrate(queryClient),
     }
   }
}
