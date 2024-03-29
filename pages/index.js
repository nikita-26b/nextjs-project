import axios from "axios";
import HomeHeader from "../components/HomeHeader";
import HomeLatestPost from "../components/HomeLatestPost";
import HomePageSection from "../components/HomePageSection";
import HomeSlider from "../components/HomeSlider";
import NavBar from "../components/NavBar";
import Link from "next/link";
import Head from "next/head";

export default function Home({ posts, homeSection, homeSlider, navBar }) {
  return (
    <div>
      <Head>
        <title>Next Blog</title>
        {/* {console.log(posts)} */}
        {/* {posts.data.map((elem) => {
          const seoInformation = elem.attributes.seoInfo;
          return (
            <>
              {seoInformation.map((ele) => {
                return (
                  <>
                    <meta title={ele.metaTitle} />
                    <meta description={ele.metaDescription} />
                  </>
                );
              })}
            </>
          );
        })} */}
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* {console.log(posts.data[0].attributes.seoInfo[0].metaTitle)} */}
      <NavBar props={navBar.data} />
      <HomeSlider props={homeSlider.data} />

      <div className="container">
        <HomePageSection props={homeSection.data} />
        <HomeHeader />
        <HomeLatestPost props={posts.data} />
        {/* {console.log(homeSection.data[0].attributes.homepageimages)} */}
        {/* {console.log(posts.data)}; */}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const postsRes = await axios.get(
    "http://localhost:1337/api/posts?populate=*"
  );
  const homeSectionRes = await axios.get(
    "http://localhost:1337/api/homepage-sections?populate=*"
  );
  const homeSliderRes = await axios.get(
    "http://localhost:1337/api/home-sliders?populate=*"
  );
  const navBarRes = await axios.get("http://localhost:1337/api/nav?populate=*");

  return {
    props: {
      posts: postsRes.data,
      homeSection: homeSectionRes.data,
      homeSlider: homeSliderRes.data,
      navBar: navBarRes.data,
    },
  };
}
