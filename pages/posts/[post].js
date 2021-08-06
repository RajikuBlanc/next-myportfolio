export default function Post({ post }) {
  return (
    <div>
      <h1>POST(投稿){post.id}</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}

export async function getServerSideProps({ params }) {
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
