import React, { useState } from "react";
import styled from "styled-components";
import "./postTable.css";
import me from "../images/me.jpg";
import loading from "../images/loading.gif";

const sharp = "#";

const PostTableDiv = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 10px auto;
  background-color: #f8f9fa;
`;

const PostTable = props => {
  const [comment, isHidden] = useState(false);
  let [follow, isFollowing] = useState(props.posts.addFollow);
  let [like, isLiking] = useState(props.posts.addLike);

  return (
    <PostTableDiv>
      {props.posts.length > 0 ? (
        props.posts.map(post => (
          <article className="feed">
            <header className="feed-user-profile">
              <a href={sharp}>
                <img src={me} alt="누군가" />
              </a>
              <dl>
                <div>
                  <h1>
                    <a href={sharp}>sinnim</a>
                  </h1>
                  <span aria-label="Posted 10 minutes ago">
                    {new Date().getMinutes()} min
                  </span>
                </div>
                <button
                  className={follow ? "following" : "button"}
                  onClick={() => {
                    isFollowing(!follow);
                  }}
                  type="button"
                >
                  {follow ? "Following" : "Follow"}
                </button>
              </dl>
            </header>
            <div className="feed-content">
              <div>
                <img src={post.images} alt={loading}></img>
              </div>
              <p>{post.contents}</p>
            </div>
            <footer className="feed-footer">
              <button
                onClick={() => {
                  isLiking(!like);
                }}
                type="button"
              >
                <span>{like ? <strong>11</strong> : 10} Likes</span>
              </button>
              <button
                onClick={() => {
                  isHidden(!comment);
                }}
                type="button"
              >
                <span>0 Comments</span>
              </button>
              <button onClick={() => props.editRow(post)} type="button">
                Edit
              </button>
              <button onClick={() => props.deletePost(post.id)} type="button">
                Delete
              </button>
            </footer>
            <form
              action=""
              method="#"
              className={`${comment ? "feed-comment-form" : "isHidden"}`}
            >
              <textarea placeholder="Write a comment"></textarea>
              <button type="submit">Submit</button>
            </form>
          </article>
        ))
      ) : (
        <span>No Posts</span>
      )}
    </PostTableDiv>
  );
};

export default PostTable;
