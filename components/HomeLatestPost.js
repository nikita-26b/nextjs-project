import React, { useEffect, useState } from "react";
import PostPreview from "./PostPreview";

function HomeLatestPost(props) {
  const [latestPosts, setLatestPosts] = useState([]);

  useEffect(() => {
    setLatestPosts(props.props.slice(0, 5));
  }, [props]);

  function renderPostPreviews() {
    return latestPosts.map((post) => {
      return <PostPreview post={post} key={post.id} />;
    });
  }
  // <PostPreview post={post} map={post.props[0].id}

  return (
    <>
      <h2>Latest Post</h2>
      {renderPostPreviews()}
      {/* {console.log(props.props[0].id)} */}
    </>
  );
}

export default HomeLatestPost;
