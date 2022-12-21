import Navbar from "../components/NavBar";

export default function NavLayout({ posts }) {
  return (
    <>
      <h1>hi nav</h1>
      <Navbar props={posts} />
      {/* {console.log(posts.data)} */}
    </>
  );
}
export async function getStaticProps() {
  const res = await fetch("http://localhost:1337/api/nav?populate=*");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
