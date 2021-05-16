import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import { GetStaticPaths, GetStaticProps } from 'next'
import { QueryClient, useQuery } from 'react-query'
import { dehydrate } from 'react-query/hydration'

interface Content{
  contentKey: Number,
  contentTagType: Number,
  contentType: Number,
  contentBody: String,
  contentBody2: String,
  contentText: String,
  contentImage: String,
  contentFile: String
}

export default function Post({ postData }: {
  postData: {
    id: Number,
    user?: {
      userName: String,
    },
    contents? : Array<Content>,
  }
}) {
  return (
    <Layout>
      <Head>
        <title>{postData.user.userName}</title>
      </Head>
      <article>
        <h3>{postData.user.userName}</h3>
        {postData.contents && postData.contents.map(content => {
          if (content.contentType === 1) return <div key={String(content.contentKey)}>{content.contentText}</div>
          if (content.contentType === 2) return <div key={String(content.contentKey)}>
            <img src={String(content.contentImage)}></img>
          </div>
        })}
        {/* <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} /> */}
      </article>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let postData = await getPostData(params.id)
  console.log(postData)
  return {
    props: {
      postData: postData,
    }
  }
}
