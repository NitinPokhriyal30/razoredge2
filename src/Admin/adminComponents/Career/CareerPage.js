// import React, { useEffect, useState } from "react";
// import Axios from "axios";
// import { useNavigate } from "react-router-dom";
// import CareerGallery from "./CareerGallery";
// import CareerBenefits from "./CareerBenefits";

// import { EditorState } from "draft-js"; 
// import { Editor } from "react-draft-wysiwyg";
// import { convertToHTML } from "draft-convert"; 
// import parse from "html-react-parser";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

// const CareerPage = (props) => {
//   const [editorState, setEditorState] = useState(() =>
//     EditorState.createEmpty()
//   );
//   const [convertedContent, setConvertedContent] = useState(null);
//   const handleEditorChange = (state) => {
//     setEditorState(state); 
//     convertContentToHTML();
//   };
//   const convertContentToHTML = () => {
//     let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
//     setConvertedContent(currentContentAsHTML);
//   };

//   const navigate = useNavigate();
//   const [development, setDevelopment] = useState([]);
//   const [management, setManagement] = useState([]);
//   const [operation, setOperation] = useState([]);
//   const [sec1heading1, setSec1heading] = useState('');
//   const [sec1subheading1, setSec1subheading] = useState('');
//   const [sec1img1, setSec1img] = useState('');
//   const [sec1btntxt1, setSec1btntxt] = useState('');

//   const [sec2heading1, setSec2heading] = useState("");
//   const [sec2pera1, setSec2pera] = useState("");

//   const [sec3heading1, setSec3heading] = useState('');
//   const [sec3subheading1, setSec3subheading] = useState('');

//   const [sec4heading1, setSec4heading] = useState('');
//   const [sec4subheading1, setSec4subheading] = useState('');

//   const [update, setupdate] = useState(false);

//   // console.log(convertedContent);

//   useEffect(() => {
//     const get = async () => {
//       // navigate("/admin-career");

//       await Axios.get(
//         "http://localhost:5000/development-jobs"
//       ).then((res) => setDevelopment(res.data));

//       await Axios.get(
//         "http://localhost:5000/management-jobs"
//       ).then((res) => setManagement(res.data));

//       await Axios.get(
//         "http://localhost:5000/operation-jobs"
//       ).then((res) => setOperation(res.data));

//       // Axios.get("http://localhost:5000/career").then((res) =>
//       //   res.data.map((value) => {
//       //     setSec2heading(value.Sec2.heading);
//       //     setSec2pera(value.Sec2.pera);

//       //     setSec1heading(value.Sec2.sec1heading);
//       //     setSec1subheading(value.Sec2.sec1subheading);
//       //     setSec1img(value.Sec2.sec1img);
//       //     setSec1btntxt(value.Sec2.sec1btntxt);
//       //   })
//       //   );
//       //   console.log(res.data);

//       const res = await Axios.get(
//         "http://localhost:5000/career"
//       );
//       res.data.map((value) => {
//         setSec1heading(value.Sec1.heading);
//         setSec1subheading(value.Sec1.subheading);
//         setSec1img(value.Sec1.img);
//         setSec1btntxt(value.Sec1.btntxt);

//         setSec2heading(value.Sec2.heading);
//         setSec2pera(value.Sec2.pera);

//         setSec3heading(value.Sec3.heading);
//         setSec3subheading(value.Sec3.subheading);

//         setSec4heading(value.sec4.heading);
//         setSec4subheading(value.sec4.subheading);
//       });
//     };

//     get();
//   }, []);

//   const updateData = async (e) => { 
//     // e.preventdefault()
//     const formData = new FormData();

//     formData.append("sec1heading", sec1heading1); 
//     formData.append("sec1subheading", sec1subheading1);
//     formData.append("sec1btntxt", sec1btntxt1);
//     formData.append("sec2heading", sec2heading1);
//     formData.append("sec2pera", convertedContent);
//     // formData.append("sec2pera", sec2pera1);
//     formData.append("sec3heading", sec3heading1);
//     formData.append("sec3subheading", sec3subheading1);
//     formData.append("sec4heading", sec4heading1);
//     formData.append("sec4subheading", sec4subheading1);
//     formData.append("img", sec1img1);
//     formData.append("imgFilename", sec1img1.name);
//     formData.append("id", props.id); 

//     await Axios.put("http://localhost:5000/career", formData);
//     navigate("/admin-career");
//     // window.location.reload();
//   };

//   const addOperation = () => {
//     navigate("/admin-career/operation/add");
//   };

//   const addManagement = () => {
//     navigate("/admin-career/management/add");
//   };

//   const addDevelopment = () => {
//     navigate("/admin-career/development/add");
//   };

//   return (
//     <>
//       <form encType="multipart/form-data">
//         <div className="career-sec">
//           <div className="container">
//             <div className="row">
//               <div className="career-txt-container">
//                 <div className="our-solution-head pb-5">
//                   <h3>
//                     {update ? (
//                       <textarea
//                         className="form-control"
//                         value={sec1subheading1}
//                         onChange={(e) => setSec1subheading(e.target.value)}
//                       ></textarea>
//                     ) : (
//                       sec1subheading1
//                     )}
//                   </h3>
//                   <h2>
//                     {update ? (
//                       <textarea
//                         className="form-control"
//                         value={sec1heading1}
//                         onChange={(e) => setSec1heading(e.target.value)}
//                       ></textarea>
//                     ) : (
//                       sec1heading1
//                     )}
//                   </h2>
//                   <button>
//                     {update ? (
//                       <textarea
//                         className="form-control"
//                         value={sec1btntxt1}
//                         onChange={(e) => setSec1btntxt(e.target.value)}
//                       ></textarea>
//                     ) : (
//                       sec1btntxt1
//                     )}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="career-img-container">
//           {update ? (
//             <input
//               className="form-control"
//               type="file"
//               name="img"
//               onChange={(e) => setSec1img(e.target.files[0])}
//             />
//           ) : (
//             <img
//               src={`http://localhost:5000/images/${sec1img1}`}
//               className="career-img"
//               alt="Intersection"
//             />
//           )}
//         </div>
//         <div className="career-empty-container"></div>

//         <div className="people-behind-sec">
//           <div className="container">
//             <div className="our-solution-head pb-5">
//               <h2>
//                 {update ? (
//                   <textarea
//                     className="form-control"
//                     value={sec2heading1}
//                     onChange={(e) => setSec2heading(e.target.value)}
//                   ></textarea>
//                 ) : (
//                   sec2heading1
//                 )}
//               </h2>
//               {/* <p>
//                 {update ? (
//                   <textarea
//                     className="form-control"
//                     value={sec2pera1}
//                     onChange={(e) => setSec2pera(e.target.value)}
//                   ></textarea>
//                 ) : (
//                   sec2pera1
//                 )}
//               </p> */}

//               {update ? (
//                 <>
//                   <Editor
//                     editorState={editorState}
//                     onEditorStateChange={handleEditorChange}
//                     wrapperClassName="wrapper-class"
//                     editorClassName="editor-class"
//                     toolbarClassName="toolbar-class"
//                   />
//                   {parse(sec2pera1)}
//                 </>
//               ) : (
//                 parse(sec2pera1)
//               )}
//             </div>
//             <div className="poeple-img-container">
//               <div className="container">
//                 <CareerGallery />
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="banefits-sec">
//           <div className="container">
//             <div className="our-solution-head pb-5">
//               <h3>
//                 {update ? (
//                   <textarea
//                     value={sec3subheading1}
//                     onChange={(e) => setSec3subheading(e.target.value)}
//                   ></textarea>
//                 ) : (
//                   sec3subheading1
//                 )}
//               </h3>
//               <h2>
//                 {update ? (
//                   <textarea
//                     value={sec3heading1}
//                     onChange={(e) => setSec3heading(e.target.value)}
//                   ></textarea>
//                 ) : (
//                   sec3heading1
//                 )}
//               </h2>
//             </div>
//             <div className="row banefits-rw">
//               <CareerBenefits />
//             </div>
//           </div>
//         </div>

//         <div className="open-position-sec">
//           <div className="our-solution-head pb-4">
//             <h3>
//               {update ? (
//                 <textarea
//                   value={sec4subheading1}
//                   onChange={(e) => setSec4subheading(e.target.value)}
//                 ></textarea>
//               ) : (
//                 sec4subheading1
//               )}
//             </h3>
//             <h2>
//               {update ? (
//                 <textarea
//                   value={sec4heading1}
//                   onChange={(e) => setSec4heading(e.target.value)}
//                 ></textarea>
//               ) : (
//                 sec4heading1
//               )}
//             </h2>
//           </div>
//           <div className="container">
//             <div className="row">
//               <div className="col-md-4"></div>
//               <div className="col-md-4">
//                 <div className="our-solution-head pb-3">
//                   <span>Development</span>
//                 </div>
//               </div>
//               <div className="col-md-4">
//                 <button
//                   type="button"
//                   className="btn btn-primary float-end"
//                   onClick={addDevelopment}
//                 >
//                   Add New
//                 </button>
//               </div>
//             </div>
//             {development.map((value, index) => (
//               <div className="row marketing-manager-row" key={index}>
//                 <div className="col-md-4 my-2">
//                   <div className="marketing-inner-col">
//                     <strong>{value.title}</strong>
//                   </div>
//                 </div>
//                 <div className="col-md-4 my-2">
//                   <div className="marketing-inner-col">
//                     <span>{value.location}</span>
//                   </div>
//                 </div>
//                 <div className="col-md-4 my-2">
//                   <div className="marketing-inner-col">
//                     <button
//                       type="button"
//                       onClick={(e) => {
//                         navigate(`/admin-career/development/${value._id}`);
//                       }}
//                     >
//                       Edit
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//             <div className="row">
//               <div className="col-md-4"></div>
//               <div className="col-md-4">
//                 <div className="our-solution-head pb-3">
//                   <span>Operation</span>
//                 </div>
//               </div>
//               <div className="col-md-4">
//                 <button
//                   type="button"
//                   className="btn btn-primary float-end"
//                   onClick={addOperation}
//                 >
//                   Add New
//                 </button>
//               </div>
//             </div>
//             {operation.map((value, index) => (
//               <div className="row marketing-manager-row" key={index}>
//                 <div className="col-md-4 my-2">
//                   <div className="marketing-inner-col">
//                     <strong>{value.title}</strong>
//                   </div>
//                 </div>
//                 <div className="col-md-4 my-2">
//                   <div className="marketing-inner-col">
//                     <span>{value.location}</span>
//                   </div>
//                 </div>
//                 <div className="col-md-4 my-2">
//                   <div className="marketing-inner-col">
//                     <button
//                       type="button"
//                       onClick={(e) => {
//                         navigate(`/admin-career/operation/${value._id}`);
//                       }}
//                     >
//                       Edit
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//             <div className="row">
//               <div className="col-md-4"></div>
//               <div className="col-md-4">
//                 <div className="our-solution-head pb-3">
//                   <span>Management</span>
//                 </div>
//               </div>
//               <div className="col-md-4">
//                 <button
//                   type="button"
//                   className="btn btn-primary float-end"
//                   onClick={addManagement}
//                 >
//                   Add New
//                 </button>
//               </div>
//             </div>
//             {management.map((value, index) => (
//               <div className="row marketing-manager-row" key={index}>
//                 <div className="col-md-4 my-2">
//                   <div className="marketing-inner-col">
//                     <strong>{value.title}</strong>
//                   </div>
//                 </div>
//                 <div className="col-md-4 my-2">
//                   <div className="marketing-inner-col">
//                     <span>{value.location}</span>
//                   </div>
//                 </div>
//                 <div className="col-md-4 my-2">
//                   <div className="marketing-inner-col">
//                     <button
//                       type="button"
//                       onClick={(e) => {
//                         navigate(`/admin-career/management/${value._id}`);
//                       }}
//                     >
//                       Edit
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {update ? (
//           <button
//             type="button"
//             onClick={updateData}
//             className="why-razor-fix-update-btn"
//           >
//             Update Page
//             <i className="fa-solid fa-repeat "></i>
//           </button>
//         ) : (
//           ""
//         )}
//       </form>

//       <button
//         onClick={() => setupdate(true)}
//         className="why-razor-fix-edit-btn"
//       >
//         Edit Page
//         <i className="fa-solid fa-pen-to-square ps-2"></i>
//       </button>
//     </>
//   );
// };

// export default CareerPage;
