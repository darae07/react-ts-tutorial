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

export default function Home() {
  const { data } = useQuery('posts', getPosts)
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>함께앳홈 타임라인</p>
        {data.posts && data.posts.map(post => <div className={utilStyles.post} key={post.postKey}>
          <p className={utilStyles.username}>{post.user.userName}</p>
          {post.contents && post.contents.map(content => {
            if (content.contentType === 1) {
              return <p key={content.contentKey}>{content.contentText}</p>
            }
          })}
        </div>)}
      </section>
    </Layout>
  )
}

// This function gets called at build time
export const getStaticProps: GetStaticProps = async () => {
  // Call an external API endpoint to get data

  const queryClient = new QueryClient();
  let a = await queryClient.prefetchQuery('posts', getPosts)
  console.log(a)

   return {
     props: {
       dehydratedState: dehydrate(queryClient),
     }
   }
}
