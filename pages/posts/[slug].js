import { useRouter } from "next/router";
import * as S from "../../public/styles/Slug";
import Container from "../../Components/slug/Container";
import Footer from "../../Components/slug/Footer";
import Layout from "../../Components/slug/Layout";
import { getAllPosts, getPostBySlug } from "../../Lib/Projects";
import markdownToHtml from "../../Lib/markdownToHtml";
import Article from "../../Components/slug/Article";
import CoverImage from "../../Components/slug/CoverImages";
import Header from "../../Components/slug/Header";
export default function Post({ post }) {
  const router = useRouter();
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
                slug={post.slug}
                height={600}
                width={1000}
              ></CoverImage>
            </S.Image>
            <Container>
              <Article content={post.content} />
            </Container>
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
    "author",
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
