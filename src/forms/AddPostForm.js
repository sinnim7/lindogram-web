import React, { useState } from "react";
import styled from "styled-components";
import user from "../images/user.png";
import loading from "../images/loading.gif";
import uploadIcon from "../images/uploadIcon.png";

const AddPostFormDiv = styled.div`
  box-sizing: border-box;
  border: 1px solid #ddd;
  width: 100%;
  max-width: 550px;
  margin: 50px auto;
  padding: 30px;
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  border-bottom: 1px solid #ddd;
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
  background-color: #fafafa;
`;

const Useravatar = styled.img`
  display: flex;
  justify-content: flex-start;
  width: 49px;
  height: 49px;
  border-radius: 32px;
  padding: 10px 0;
`;

const FormFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Uploadbtn = styled.div`
  display: flex;
  justify-content: center;
  height: 32px;
  margin: 0 5px;
  padding: 0 16px;
  border-radius: 4px;
`;

const FormSubmitBtn = styled.button`
  display: flex;
  justify-content: center;
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

const AddPostForm = props => {
  const initialFormState = {
    id: null,
    name: "",
    useravatar: user,
    contents: "",
    posted: "",
    images: loading,
    follows: "Follow"
  };

  const [post, setPost] = useState(initialFormState);

  const handleTextareaChange = event => {
    const { name, value } = event.target;
    setPost({ ...post, [name]: value });
    localStorage.setItem(name, value);
  };

  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);

  const handleImageUpload = e => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = e => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  // const ScrollDown = () => {
  //   window.scrollBy(0, 1055000000);
  // };
  return (
    <AddPostFormDiv>
      <form
        onSubmit={event => {
          event.preventDefault();
          props.addPost(post);
          setPost(initialFormState);
        }}
      >
        <div>
          <Useravatar src={post.useravatar} alt="@sinnim" />
          <Textarea
            name="contents"
            value={post.contents}
            onChange={handleTextareaChange}
            placeholder="What's happening?"
          ></Textarea>
        </div>
        <FormFooter>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            ref={imageUploader}
            style={{
              display: "none"
            }}
          />
          <Uploadbtn
            style={{
              height: "32px",
              width: "15px"
            }}
            onClick={() => imageUploader.current.click()}
          >
            <img
              ref={uploadedImage}
              style={{
                marginTop: "2px",
                height: "32px",
                width: "15px"
              }}
              src={uploadIcon}
              alt="lindo"
            />
          </Uploadbtn>
          <FormSubmitBtn type="submit">Submit</FormSubmitBtn>
        </FormFooter>
      </form>
    </AddPostFormDiv>
  );
};

export default AddPostForm;
