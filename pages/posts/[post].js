// import { useRouter } from 'next/router';

import styled from 'styled-components';

const TestStyle = styled.div`
  h1 {
    color: red;
  }
`;

export default function Post({ post }) {
  // const router = useRouter();
  // if (router.isFallback) {
  //   return <h1>Loading...</h1>;
  // }
  return (
    <TestStyle>
      <h1 className="text-3xl">POST(投稿){post.id}</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </TestStyle>
  );
}

// getStaticPaths fallback:trueの場合
// export async function getStaticPaths() {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const posts = await res.json();
//   const paths = posts.map(post => `/posts/${post.id}`);
//   return {
//     paths,
//     fallback: true
//   };
// }

// getStaticPaths fallback:falseの場合
export async function getStaticPaths() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();
  const paths = posts.map(post => `/posts/${post.id}`);
  return {
    paths,
    fallback: false
  };
}
// getStaticProps
export async function getStaticProps({ params }) {
  const id = params.post;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();
  // 対象postにobjectが入っていない時
  if (!Object.keys(post).length) {
    return {
      notFound: true
    };
  }
  return { props: { post } };
}

// getServerSideProps
// export async function getServerSideProps({ params }) {
//   const id = params.post;
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//   const post = await res.json();
//   // 対象postにobjectが入っていない時
//   if (!Object.keys(post).length) {
//     return {
//       notFound: true
//     };
//   }
//   return { props: { post } };
// }
