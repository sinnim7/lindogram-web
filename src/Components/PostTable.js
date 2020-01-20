import React from "react";
import styled from "styled-components";
import "./postTable.css";

const sharp = "#";

const PostTableDiv = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-color: #f8f9fa;
`;

const PostTable = props => {
  window.onload = function() {
    const followBtn = document.querySelector(".feed-user-profile button");
    const likeBtn = document.querySelector(".feed-footer button:first-child");
    const commentBtn = document.querySelector(
      ".feed-footer button:nth-child(2)"
    );
    const feedComment = document.querySelector(".feed-comment");
    followBtn.addEventListener("click", function() {
      if (this.following) {
        this.innerHTML = "Follow";
        this.classList.remove("following");
      } else {
        this.innerHTML = "Following";
        this.classList.add("following");
      }
      this.following = !this.following;
    });
    followBtn.following = false;
    likeBtn.addEventListener("click", function() {
      if (this.following) {
        this.innerHTML = "10 Likes";
        this.classList.remove("active");
      } else {
        this.innerHTML = "11 Likes";
        this.classList.add("active");
      }
      this.following = !this.following;
    });
    likeBtn.following = false;
    commentBtn.addEventListener("click", function() {
      if (this.active) {
        feedComment.classList.remove("active");
      } else {
        feedComment.classList.add("active");
      }
      this.active = !this.active;
    });
    commentBtn.active = false;
  };

  return (
    <PostTableDiv>
      {props.posts.length > 0 ? (
        props.posts.map(post => (
          <article className="feed">
            {/* <span>{post.id}</span> */}
            {/* <h1>A Tweet from 김익명</h1> */}
            <header className="feed-user-profile">
              <a href={sharp}>
                <img src="/images/me.jpg" alt="김익명" />
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
                <button className="feed-user-profile-followbtn" type="button">
                  Follow
                </button>
              </dl>
            </header>
            <div className="feed-content">
              <div>
                <img src={post.images} alt=""></img>
              </div>
              <p>{post.contents}</p>
            </div>
            <footer className="feed-footer">
              <button type="button">
                <span>10 Likes</span>
              </button>
              <button type="button">
                <span>0 Comments</span>
              </button>
              <button onClick={() => props.editRow(post)} type="button">
                Edit
              </button>
              <button onClick={() => props.deletePost(post.id)} type="button">
                Delete
              </button>
            </footer>
            <form action="" method="#" class="feed-comment">
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
