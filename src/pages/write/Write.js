import axios, { Axios } from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import "./write.css";
import { Editor } from "@tinymce/tinymce-react";
import { Context } from "../../context/Context";
import { toast } from "react-toastify";

const Write = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [thumbnailImage, setThumbnailImage] = useState("");
  const { user } = useContext(Context);
  const [cat, setCat] = useState("");
  const editorRef = useRef(null);

  const handleImageChange = (e) => {
    e.preventDefault();
    const img = e.target.files[0];
    console.log(img);
    const formData = new FormData();
    formData.append("thumbnailImage", img);
    console.log(formData);
    axios.post("/upload", formData).then(function (res) {
      console.log(res.data.location);
      setThumbnailImage(res.data.location);
    });
  };

  // const log = () => {
  //     if (editorRef.current) {
  //         console.log(editorRef.current.getContent());
  //     }
  // };

  const handleSubmit = (e) => {

    e.preventDefault();
    console.log(cat);
    const content = editorRef.current.getContent();
    const newPost = {
      username: user.username,
      title: title,
      desc: desc,
      thumbnailImage: thumbnailImage,
      content: content,
      categories:[cat],
    };

    axios.post("/posts", newPost)
      .then((res) => {
        window.location.replace("/post/" + res.data._id);
      });
    
    axios.post("/categories", { name: cat })
      .then((res) => {
      console.log(res);
    })
  };
  return (
    <div className="write">
      {thumbnailImage && (
        <img className="writeImg" src={thumbnailImage} alt="" />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            id="fileInput"
            onChange={handleImageChange}
            name="thumbnail-image"
            type="file"
            style={{ display: "none" }}
          />
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Why this content..."
            type="text"
            autoFocus={true}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
        </div>
        <div className="writeFormGroup" style={{marginBottom : "100px"}} >
          <label htmlFor="cat">Select categories</label>
          <select name="cat-name" id="cat" onChange={e => setCat(e.target.value)}>
            <option value="hide">Please select a catagory</option>
            <option value="announcement">Announcement</option>
            <option value="contest">Contest</option>
            <option value="job">Job</option>
            <option value="notice">Notice</option>
            <option value="seminar">Seminar</option>
            <option value="programming">Programming</option>
            <option value="development">Development</option>
          </select>
        </div>
        <div className="writeFormGroup">
          <Editor
            apiKey="qwsfhyvb3ckncskkclp530zzmw0lyhtcwujjm876aww7y2wi"
            onInit={(evt, editor) => (editorRef.current = editor)}
            initialValue="<p>Enter your blog details</p>"
            init={{
              height: 300,
              menubar: false,
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "table",
                "media",
                "code",
                "help",
                "wordcount",
                "image",
                "save",
              ],
              toolbar:
                "undo redo | blocks | " +
                "bold italic forecolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | image " +
                "media" +
                "| table |",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px}",
              name: "tiny-mce",
              media_live_embeds: true,
              automatic_uploads: true,
              images_upload_url: "/contentPhoto",
            }}
          />
        </div>

        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
};

export default Write;
