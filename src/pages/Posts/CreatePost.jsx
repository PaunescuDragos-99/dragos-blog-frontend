import { useState } from "react";
import ReactQuill from "react-quill";
import { Navigate } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
};
const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false);

  async function createNewPost(e) {
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("file", files[0]);
    e.preventDefault();
    const response = await fetch(process.env.REACT_APP_URL_ADRESS + "/post", {
      method: "POST",
      body: data,
      credentials: "include",
    });
    if (response.ok) {
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="form-container">
      <form onSubmit={createNewPost}>
        <input
          type="text"
          name="title"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          name="summary"
          placeholder="summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        />
        <input
          type="file"
          name="file"
          placeholder="image"
          onChange={(e) => setFiles(e.target.files)}
        />
        <div className="textarea-container">
          <ReactQuill
            theme="snow"
            modules={modules}
            formats={formats}
            value={content}
            onChange={(newValue) => setContent(newValue)}
          />
        </div>
        <button>submit</button>
      </form>
    </div>
  );
}
