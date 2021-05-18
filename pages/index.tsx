import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'
import { QueryClient, useQuery } from 'react-query'
import { dehydrate } from 'react-query/hydration'
import { getPosts } from "../controllers/posts";

export default function Home({history}) {
  // const { data } = useQuery('posts', getPosts)

  return (
    <Layout home>
      <Head>
        <script src="https://use.fontawesome.com/releases/v5.2.0/js/all.js"></script>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>함께앳홈 타임라인</p>
        {/* {data.posts && data.posts.map(post => <Link href={`posts/${encodeURIComponent(post.postKey)}`} key={post.postKey}>
          <div className={utilStyles.post}>
          <p className={utilStyles.username}>{post.user.userName}</p>
          {post.contents && post.contents.map(content => {
            if (content.contentType === 1) {
              return <p key={content.contentKey}>{content.contentText}</p>
            }
          })}
          </div>
        </Link>)} */}
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
