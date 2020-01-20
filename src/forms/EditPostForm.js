import React, { useState, useEffect } from "react";
import styled from "styled-components";

const EditPostFormDiv = styled.div`
  display: flex-box;
  border: 1px solid #ddd;
  width: 520px;
  height: 500%;
  margin: 400px auto;
  padding: 20px;
`;

const Textarea = styled.textarea`
  display: flex;
  justify-content: flex-end;
  border: none;
  font: inherit;
  vertical-align: baseline;
  resize: none;
  width: 100%;
  height: 24.938px;
  outline: none;
  line-height: 1.5;
  padding: 10px 0;
`;

const BtnDiv = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

const Btn = styled.button`
  height: 32px;
  padding: 0 16px;
  border-radius: 15px;
  transition: background-color 100ms;
  background-color: #0081ff;
  color: #fff;
  &:hover {
    background-color: #006ffe;
  }
`;

const EditPostForm = props => {
  const [post, setPost] = useState(props.currentPost);

  useEffect(() => {
    setPost(props.currentPost);
  }, [props]);

  const handleTextAreaChange = event => {
    const { name, value } = event.target;
    setPost({ ...post, [name]: value });
  };

  document.body.scrollTop = document.body.scrollHeight;
  window.scrollTo(0, 0);
  document.body.scrollTop = 0;

  return (
    <EditPostFormDiv>
      <form
        onSubmit={event => {
          event.preventDefault();
          props.updatePost(post.id, post);
        }}
      >
        <div>
          <Textarea
            type="text"
            name="contents"
            value={post.contents}
            onChange={handleTextAreaChange}
            placeholder="What's happening?"
          />
        </div>
        <BtnDiv>
          <Btn onClick={() => props.setEditing(false)}>Cancel</Btn>
          <Btn type="submit">Submit</Btn>
        </BtnDiv>
      </form>
    </EditPostFormDiv>
  );
};

export default EditPostForm;
