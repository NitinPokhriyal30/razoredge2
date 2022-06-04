import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { convertToHTML } from "draft-convert";
import parse from "html-react-parser";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const AdminSingleNewsPage = () => {

   const [editorState, setEditorState] = useState(() =>
     EditorState.createEmpty()
   );
   const [convertedContent, setConvertedContent] = useState(null);
   const handleEditorChange = (state) => {
     setEditorState(state);
     convertContentToHTML();
   };
   const convertContentToHTML = () => {
     let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
     setConvertedContent(currentContentAsHTML);
   };

  const { id } = useParams();
  const navigate = useNavigate();

  const [news, setNews] = useState({});
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");
  // const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getNews = async () => {
      const res = await Axios.get("http://localhost:5000/news-get/" + id);
      setNews(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
      setImg(res.data.img);
    };
    getNews();
  }, [id]);

  const onChangeFile = (e) => {
    setImg(e.target.files[0]);
  };

  const updateData = async () => {
    const formData = new FormData();

    formData.append("title", title);
    formData.append("desc", convertedContent);
    // formData.append("desc", desc);
    formData.append("img", img);
    formData.append("imgFilename", img.name);

    Axios.put(`http://localhost:5000/news-get/${news._id}`, formData);
    navigate("/admin-news");
  };

  const deleteNews = () => {
    Axios.delete(`http://localhost:5000/news-get/${news._id}`).then((res) =>
      navigate("/admin-news")
    );
  };

  const addNews = () => {
    navigate("/admin-news-add");
  };

  return (
    <>
      <div className="add-new-post-sec pb-5">
        <div className="add-new-heading">
          <h2>Update News</h2>
        </div>
        <div className="container">
          <div className="row add-new-post-rw">
            <div className="col-xl-10 col-lg-10 col-md-10">
              <form onSubmit={updateData} encType="multipart/form-data">
                <div className="mb-3 row add-new-post-sub-row">
                  <div className="col-md-2 text-end ">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Title
                    </label>
                  </div>
                  <div className="col-md-8">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                </div>
                <div className="mb-3 row add-new-post-sub-row">
                  <div className="col-md-2 text-end">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Image
                    </label>
                  </div>
                  <div className="col-md-8">
                    <input
                      type="file"
                      filename="img"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder={img}
                      onChange={onChangeFile}
                    />
                  </div>
                </div>
                <div className="mb-3 row add-new-post-sub-row">
                  <div className="col-md-2 text-end">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Description
                    </label>
                  </div>
                  <div className="col-md-8">
                    {/* <div className="editor">
                      <CKEditor
                        editor={ClassicEditor}
                        data={desc}
                        onChange={(event, editor) => {
                          const data = editor.getData();
                          setDesc(data);
                        }}
                      />
                    </div> */}
                    {/* <textarea
                      type="text" 
                      className="form-control txtarea"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      onChange={(e) => setDesc(e.target.value)}
                      value={desc}
                    ></textarea> */}
                    <Editor
                      editorState={editorState}
                      onEditorStateChange={handleEditorChange}
                      wrapperClassName="wrapper-class"
                      editorClassName="editor-class"
                      toolbarClassName="toolbar-class"
                    />
                    {parse(desc)}
                    <div className="login-submit-btn">
                      <button type="submit" className="btn btn-primary">
                        UPDATE
                      </button>
                      <button
                        type="submit"
                        onClick={deleteNews}
                        className="btn btn-danger mx-3"
                      >
                        DELETE
                      </button>
                      <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={addNews}
                      >
                        Add New
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSingleNewsPage;
