import React, { useEffect, useState } from "react";

function HomePageSection(props) {
  return (
    <>
      {/* <h2>{props.props[0].attributes.title}</h2>
      <img
        src={`http://localhost:1337${props.props[0].attributes.homepageimages.data[0].attributes.formats.thumbnail.url}`}
      /> */}
      {props.props.map((post) => {
        const imgUrl = post.attributes.homepageimages.data;
        return (
          <div className="home-page">
            <div className="home-page-title" key={post.id}>
              <h2>{post.attributes.title}</h2>
              {/* <img
              src={`http://localhost:1337${post.attributes.homepageimages.data[0].attributes.formats.thumbnail.url}`}
            /> */}
              {imgUrl.map((postimg) => {
                return (
                  <>
                    <img
                      key={postimg.id}
                      src={`http://localhost:1337${postimg.attributes.url}`}
                    />
                  </>
                );
              })}
              {/* {console.log(postimg.attributes.formats.thumbnail.url)} */}
              {/* {console.log(imgUrl)} */}
              {/* {console.log(
              post.attributes.homepageimages.data[0].attributes.formats
                .thumbnail.url
            )} */}
            </div>
          </div>
        );
      })}

      {/* {renderPostPreviews()} */}
      {/* {console.log(props.props[0].attributes.title)} */}
    </>
  );
}

export default HomePageSection;
