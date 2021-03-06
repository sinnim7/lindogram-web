import React, { useState } from "react";
import PostTable from "./PostTable";
import AddPostForm from "../forms/AddPostForm";
import EditPostForm from "../forms/EditPostForm";
import user from "../images/user.png";
import img01 from "../images/img01.jpg";
import img02 from "../images/img02.jpg";
import img03 from "../images/img03.jpg";

const Post = () => {
  let itemsArray = localStorage.getItem("items")
    ? JSON.parse(localStorage.getItem("items"))
    : [
        {
          id: 1,
          useravatar: { user },
          contents: "페루 쿠스코 아르마스 광장(Plaza de Armas) ",
          posted: `${new Date().getMinutes()}`,
          images: img01,
          addFollow: false,
          addLike: false
        },
        {
          id: 2,
          useravatar: "/..images/user.png",
          contents: "마추픽추, 그 큰 돌을 어떻게 옮겼을까?",
          posted: `${new Date().getMinutes()}`,
          images: img02,
          addFollow: false,
          addLike: false
        },
        {
          id: 3,
          useravatar: "../images/user.png",
          contents: "브라질 리우 Praia de Copacabana",
          posted: `${new Date().getMinutes()}`,
          images: img03,
          addFollow: false,
          addLike: false
        }
      ];

  localStorage.setItem("items", JSON.stringify(itemsArray));

  const postsData = JSON.parse(localStorage.getItem("items"));

  const [posts, setPosts] = useState(postsData);

  const addPost = post => {
    post.id = posts.length + 1;
    setPosts([...posts, post]);
    itemsArray.push(post);
    localStorage.setItem("items", JSON.stringify(itemsArray));
  };

  const deletePost = id => {
    setPosts(posts.filter(post => post.id !== id));

    itemsArray = posts.filter(post => post.id !== id);
    localStorage.setItem("items", JSON.stringify(itemsArray));
  };

  const [editing, setEditing] = useState(false);

  const initialFormState = {
    id: null,
    name: "",
    useravatar: "",
    contents: "",
    posted: ""
  };

  let [currentPost, setCurrentPost] = useState(initialFormState);

  const editRow = post => {
    setEditing(true);
    setCurrentPost({
      id: post.id,
      useravatar: post.useravatar,
      contents: post.contents,
      posted: post.posted
    });
  };

  const updatePost = (id, updatePost) => {
    setEditing(false);
    setPosts(posts.map(post => (post.id === id ? updatePost : post)));
    currentPost = posts.map(post => (post.id === id ? updatePost : post));
    localStorage.setItem("items", JSON.stringify(currentPost));
  };

  return (
    <div>
      <section>
        <div>
          {editing ? (
            <EditPostForm
              editing={editing}
              setEditing={setEditing}
              currentPost={currentPost}
              updatePost={updatePost}
            />
          ) : (
            <AddPostForm addPost={addPost} />
          )}
        </div>
      </section>
      <section>
        <PostTable
          posts={posts}
          deletePost={deletePost}
          editRow={editRow}
        ></PostTable>
      </section>
    </div>
  );
};

export default Post;
