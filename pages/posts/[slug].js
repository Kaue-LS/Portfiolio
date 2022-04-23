import { useRouter } from "next/router";
import * as S from "../../public/assets/styles/Slug.style";
import Footer from "../../Components/slug/Footer";
import Layout from "../../Components/slug/Layout";
import { getAllPosts, getPostBySlug } from "../../Lib/Projects";
import markdownToHtml from "../../Lib/markdownToHtml";
import Article from "../../Components/slug/Article";
import CoverImage from "../../Components/Global/CoverImages";
import Header from "../../Components/slug/Header";
export default function Post({ post }) {
  const router = useRouter();
  // console.log(router)
  if (!router.isFallback && !post?.slug) {
    return <h1>Deu ruim</h1>;
  }

  return (
    <S.Slug>
      <Header post={post.title}/>
      <Layout post={post.title}>
        {router.isFallback ? (
          <h2>Loading…</h2>
        ) : (
          <S.Post>
            <S.Image>
              <CoverImage
                src={post.coverImage}
                alt={post.title}
                height={600}
                width={1200}
              ></CoverImage>
            </S.Image>
            <S.Data>
              <div>
              <p>Feito em:</p> 
              <span>{post.tools}</span>
              </div>
              <div>
              <p>Link do projeto: </p> {post.projectUrl?(<a target="_blank" rel="noopener noreferrer"  href={post.projectUrl}>Aqui</a>):(<span>Sem link  <img src="https://img.icons8.com/windows/32/000000/oops.png"/></span>)}
              </div>
            </S.Data>
              <Article content={post.content} />
          </S.Post>
        )}
      </Layout>
      <Footer />
    </S.Slug>
  );
}
export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "tools",
    "projectUrl",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");
  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
