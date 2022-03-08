import { Head } from "next/document";
import { useRouter } from "next/router";
import PostBody from "../../Components/project/ProjectBody";
import PostHeader from "../../Components/project/ProjectHead";
import {getAllPosts,getPostBySlug} from '../../Lib/Projects'
import markdownToHtml from '../../Lib/markdownToHtml'
export default function Posts ({post,morePosts,preview}){
    const router = useRouter()
    if(!router.isFallback && !post?.slug){
        return 'Deu Ruim'
    }

    return(
        <div>
            {router.isFallback?(
                <h1>Carregando</h1>
            ):(
                <>
                <article>
                    <Head>
                        <title>
                            {post.title }| Blog Next Portfólio
                        </title>
                        <meta property="og:image"></meta>
                    </Head>
                    <PostHeader
                    title={post.title}
                    coverImage={post.coverImage}
                    date={post.date}
                    author={post.author}
                    />
                    <PostBody content={post.content}/>
                </article>
                </>
            )}
        </div>
    )
}
export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
