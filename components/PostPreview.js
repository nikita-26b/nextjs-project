import React from "react";

function PostPreview(post) {
  return (
    <>
      <h3>{post.post.attributes.title}</h3>
      <p>{post.post.attributes.description}</p>
      {/* {console.log(post.post.attributes.title)} */}
    </>
  );
}

export default PostPreview;
