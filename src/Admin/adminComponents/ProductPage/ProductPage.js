// import React, { useEffect, useState } from "react";
// import Axios from "axios";
// import { Link } from "react-router-dom";
// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import { useNavigate } from "react-router-dom";

// const ProductPage = (props) => {
//   const navigate = useNavigate();
//   const [proSecondBullets1, setproSecondBullets] = useState(
//     props.proSecondBullets
//   );
//   const [proThirdAccordia1, setproThirdAccordia] = useState(
//     props.proThirdAccordia
//   );
//   const [proFirstHeading1, setProFirstHeading] = useState(
//     props.proFirstHeading
//   );
//   const [proFirstImage1, setProFirstImage] = useState(props.proFirstImage);
//   const [proFirstPera1, setProFirstPera] = useState(props.proFirstPera);
//   const [proFirstSubHeading1, setProFirstSubHeading] = useState(
//     props.proFirstSubHeading
//   );
//   const [proSecondHeading1, setProSecondHeading] = useState(
//     props.proSecondHeading
//   );
//   const [proSecondImage1, setProSecondImage] = useState(props.proSecondImage);
//   const [proSecondSubHeading1, setProSecondSubHeading] = useState(
//     props.proSecondSubHeading
//   );
//   const [proThirdHeading1, setProThirdHeading] = useState(
//     props.proThirdHeading
//   );
//   const [proThirdImage1, setProThirdImage] = useState(props.proThirdImage);
//   const [proThirdPera1, setProThirdPera] = useState(props.proThirdPera);
//   const [proFourthCards1img1, setproFourthCards1img] = useState(
//     props.proFourthCards1img
//   );
//   const [proFourthCards1title1, setproFourthCards1title] = useState(
//     props.proFourthCards1title
//   );
//   const [proFourthCards1desc1, setproFourthCards1desc] = useState(
//     props.proFourthCards1desc
//   );
//   const [proFourthCards2img1, setproFourthCards2img] = useState(
//     props.proFourthCards2img
//   );
//   const [proFourthCards2title1, setproFourthCards2title] = useState(
//     props.proFourthCards2title
//   );
//   const [proFourthCards2desc1, setproFourthCards2desc] = useState(
//     props.proFourthCards2desc
//   );
//   const [proFourthCards3img1, setproFourthCards3img] = useState(
//     props.proFourthCards3img
//   );
//   const [proFourthCards3title1, setproFourthCards3title] = useState(
//     props.proFourthCards3title
//   );
//   const [proFourthCards3desc1, setproFourthCards3desc] = useState(
//     props.proFourthCards3desc
//   );
//   const [proFourthCards4img1, setproFourthCards4img] = useState(
//     props.proFourthCards4img
//   );
//   const [proFourthCards4title1, setproFourthCards4title] = useState(
//     props.proFourthCards4title
//   );
//   const [proFourthCards4desc1, setproFourthCards4desc] = useState(
//     props.proFourthCards4desc
//   );

//   const [update, setupdate] = useState(false);

//   const updateData = async (e) => {
//     // e.preventdefault()
//     const formData = new FormData();

//     formData.append("proFirstHeading", proFirstHeading1);
//     formData.append("proFirstImage", proFirstImage1);
//     formData.append("proFirstImageFilename", proFirstImage1.name);
//     formData.append("proFirstPera", proFirstPera1);
//     formData.append("proFirstSubHeading", proFirstSubHeading1);
//     formData.append("proSecondHeading", proSecondHeading1);
//     formData.append("proSecondImage", proSecondImage1);
//     formData.append("proSecondImageFilename", proSecondImage1.name);
//     formData.append("proSecondSubHeading", proSecondSubHeading1);
//     formData.append("proSecondBullets", proSecondBullets1);
//     formData.append("proThirdHeading", proThirdHeading1);
//     formData.append("proThirdImage", proThirdImage1);
//     formData.append("proThirdImageFilename", proThirdImage1.name);
//     formData.append("proThirdPera", proThirdPera1);
//     formData.append("proThirdAccordia", proThirdAccordia1);
//     formData.append("proFourthCards1title", proFourthCards1title1);
//     formData.append("proFourthCards1desc", proFourthCards1desc1);
//     formData.append("proFourthCards2title", proFourthCards2title1);
//     formData.append("proFourthCards2desc", proFourthCards2desc1);
//     formData.append("proFourthCards3title", proFourthCards3title1);
//     formData.append("proFourthCards3desc", proFourthCards3desc1);
//     formData.append("proFourthCards4title", proFourthCards4title1);
//     formData.append("proFourthCards4desc", proFourthCards4desc1);
//     formData.append("proFourthCards1img", proFourthCards1img1);
//     formData.append("proFourthCards1imgFilename", proFourthCards1img1.name);
//     formData.append("proFourthCards2img", proFourthCards2img1);
//     formData.append("proFourthCards2imgFilename", proFourthCards2img1.name);
//     formData.append("proFourthCards3img", proFourthCards3img1);
//     formData.append("proFourthCards3imgFilename", proFourthCards3img1.name);
//     formData.append("proFourthCards4img", proFourthCards4img1);
//     formData.append("proFourthCards4imgFilename", proFourthCards4img1.name);
//     formData.append("id", props.id);

//     await Axios.put("http://localhost:5000/product-update", formData);
//     // navigate("/admin-product");
//     window.location.reload();
//   };

//   const deleteBullet = (e, index) => {
//     proSecondBullets1.splice(index, 1);
//     const newdata = {
//       proSecondBullets: proSecondBullets1,
//     };
//     Axios.put(`http://localhost:5000/product-update/${props.id}`, newdata).then(
//       (res) => navigate("/admin-product")
//     );
//   };

//   const deleteAccordian = (e, index) => {
//     proThirdAccordia1.splice(index, 1);
//     const newdata = {
//       proThirdAccordia: proThirdAccordia1,
//     };
//     Axios.put(`http://localhost:5000/product-update/${props.id}`, newdata).then(
//       (res) => navigate("/admin-product")
//     );
//   };

//   return (
//     <>
//       <form id="post" encType="multipart/form-data">
//         <div className="integration-hero-sec">
//           <div className="empty-div integration-empty-div"></div>
//           <div className="container ">
//             <div className="row">
//               <div className="col-lg-6 col-md-6 m-auto">
//                 <div className="integration-txt-container">
//                   <span>
//                     {update ? (
//                       <textarea
//                         className="form-control"
//                         value={proFirstSubHeading1}
//                         onChange={(e) => setProFirstSubHeading(e.target.value)}
//                       ></textarea>
//                     ) : (
//                       proFirstSubHeading1
//                     )}
//                   </span>
//                   <h2>
//                     {update ? (
//                       <textarea
//                         className="form-control"
//                         value={proFirstHeading1}
//                         onChange={(e) => setProFirstHeading(e.target.value)}
//                       ></textarea>
//                     ) : (
//                       proFirstHeading1
//                     )}
//                   </h2>
//                   <p>
//                     {update ? (
//                       <textarea
//                         className="form-control"
//                         value={proFirstPera1}
//                         onChange={(e) => setProFirstPera(e.target.value)}
//                       ></textarea>
//                     ) : (
//                       proFirstPera1
//                     )}
//                   </p>
//                 </div>
//               </div>
//               <div className="col-lg-6 col-md-6">
//                 <div className="integration-img-container">
//                   {update ? (
//                     <input
//                       className="form-control"
//                       type="file"
//                       name="proFirstImage"
//                       onChange={(e) => setProFirstImage(e.target.files[0])}
//                     />
//                   ) : (
//                     <img
//                       src={`http://localhost:5000/images/${proFirstImage1}`}
//                       className="VideoImg"
//                       alt="VideoImg"
//                     />
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="bullets-point-sec factor-edge-sec">
//           <div className="container">
//             <div className="factor-edge-heading ">
//               <h5>
//                 {update ? (
//                   <textarea
//                     className="form-control"
//                     value={proSecondSubHeading1}
//                     onChange={(e) => setProSecondSubHeading(e.target.value)}
//                   ></textarea>
//                 ) : (
//                   proSecondSubHeading1
//                 )}
//               </h5>
//               <h2>
//                 {update ? (
//                   <textarea
//                     className="form-control"
//                     value={proSecondHeading1}
//                     onChange={(e) => setProSecondHeading(e.target.value)}
//                   ></textarea>
//                 ) : (
//                   proSecondHeading1
//                 )}
//               </h2>
//             </div>
//             <div className="row">
//               <div className=" col-lg-6 col-md-6 integration-data-col">
//                 <div className="bullet-img-sec">
//                   {update ? (
//                     <input
//                       className="form-control"
//                       type="file"
//                       name="proSecondImage"
//                       onChange={(e) => setProSecondImage(e.target.files[0])}
//                     />
//                   ) : (
//                     <img
//                       src={`http://localhost:5000/images/${proSecondImage1}`}
//                       className="VideoImg"
//                       alt="VideoImg"
//                     />
//                   )}
//                 </div>
//               </div>
//               <div className=" col-lg-6 m-auto">
//                 <div className="bullet-txt-container">
//                   <ul>
//                     {proSecondBullets1.map((value, index) => (
//                       <div key={index}>
//                         <li>
//                           <div className="row">
//                             <div className="col col-md-10">{value}</div>
//                             <div className="col col-md-2">
//                               <button
//                                 type="button"
//                                 className="btn btn-danger"
//                                 onClick={(e) => deleteBullet(e, index)}
//                               >
//                                 Delete
//                               </button>
//                             </div>
//                           </div>
//                         </li>
//                       </div>
//                     ))}
//                     <Link to={`/admin-product/bullet-add/${props.id}`}>
//                       <button type="button" className="btn btn-primary">
//                         Add New
//                       </button>
//                     </Link>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="bullets-point-sec product-accor-sec">
//           <div className="container">
//             <div className="row">
//               <div className=" col-lg-6 col-md-6 pb-3 integration-data-col">
//                 <div className="bullet-img-sec">
//                   {update ? (
//                     <input
//                       className="form-control"
//                       type="file"
//                       name="proThirdImage"
//                       onChange={(e) => setProThirdImage(e.target.files[0])}
//                     />
//                   ) : (
//                     <img
//                       src={`http://localhost:5000/images/${proThirdImage1}`}
//                       className="VideoImg"
//                       alt="VideoImg"
//                     />
//                   )}
//                 </div>
//               </div>
//               <div className=" col-lg-6 m-auto">
//                 <div className="slider-txt-container product-accor">
//                   <h3>
//                     <strong>
//                       {update ? (
//                         <textarea
//                           className="form-control"
//                           value={proThirdHeading1}
//                           onChange={(e) => setProThirdHeading(e.target.value)}
//                         ></textarea>
//                       ) : (
//                         proThirdHeading1
//                       )}
//                     </strong>
//                   </h3>
//                   <p>
//                     {update ? (
//                       <textarea
//                         className="form-control"
//                         value={proThirdPera1}
//                         onChange={(e) => setProThirdPera(e.target.value)}
//                       ></textarea>
//                     ) : (
//                       proThirdPera1
//                     )}
//                   </p>
//                   <div className="accordion" id="accordionExample">
//                     {proThirdAccordia1.map((value, index) => (
//                       <div key={index}>
//                         <div className="row mt-2">
//                           <div className="col col-md-10">
//                             <Accordion key={index}>
//                               <AccordionSummary
//                                 expandIcon={<ExpandMoreIcon />}
//                                 aria-controls={`panel${index}a-content`}
//                                 id={`panel${index}a-header`}
//                               >
//                                 <Typography>{value.title}</Typography>
//                               </AccordionSummary>
//                               <AccordionDetails>
//                                 <Typography>{value.desc}</Typography>
//                               </AccordionDetails>
//                             </Accordion>
//                           </div>
//                           <div className="col col-md-2">
//                             <button
//                               type="button"
//                               className="btn btn-danger"
//                               onClick={(e) => deleteAccordian(e, index)}
//                             >
//                               Delete
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                     <Link to={`/admin-product/accordian-add/${props.id}`}>
//                       <button type="button" className="btn btn-primary mt-3">
//                         Add New
//                       </button>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* <div className="product-three-comp-sec text-center">
//           <div className="container">
//             <div className="row product-comp-rw">
//               <div className="col-md-3 py-3">
//                 <div className="product-first-img">
//                   {update ? (
//                     <input
//                       className="form-control"
//                       type="file"
//                       name="proFourthCards1img"
//                       onChange={(e) => setproFourthCards1img(e.target.files[0])}
//                     />
//                   ) : (
//                     <img
//                       src={`http://localhost:5000/images/${proFourthCards1img1}`}
//                       className={proFourthCards1img1}
//                       alt={proFourthCards1img1}
//                     />
//                   )}
//                 </div>
//                 <div className="product-first-comp">
//                   <h5>
//                     {update ? (
//                       <textarea
//                         className="form-control"
//                         value={proFourthCards1title1}
//                         onChange={(e) =>
//                           setproFourthCards1title(e.target.value)
//                         }
//                       ></textarea>
//                     ) : (
//                       proFourthCards1title1
//                     )}
//                   </h5>
//                   <p>
//                     {update ? (
//                       <textarea
//                         className="form-control"
//                         value={proFourthCards1desc1}
//                         onChange={(e) => setproFourthCards1desc(e.target.value)}
//                       ></textarea>
//                     ) : (
//                       proFourthCards1desc1
//                     )}
//                   </p>
//                 </div>
//               </div>
//               <div className="col-md-3 py-3">
//                 <div className="product-first-img">
//                   {update ? (
//                     <input
//                       className="form-control"
//                       type="file"
//                       name="proFourthCards2img"
//                       onChange={(e) => setproFourthCards2img(e.target.files[0])}
//                     />
//                   ) : (
//                     <img
//                       src={`http://localhost:5000/images/${proFourthCards2img1}`}
//                       className={proFourthCards2img1}
//                       alt={proFourthCards2img1}
//                     />
//                   )}
//                 </div>
//                 <div className="product-first-comp">
//                   <h5>
//                     {update ? (
//                       <textarea
//                         className="form-control"
//                         value={proFourthCards2title1}
//                         onChange={(e) =>
//                           setproFourthCards2title(e.target.value)
//                         }
//                       ></textarea>
//                     ) : (
//                       proFourthCards2title1
//                     )}
//                   </h5>
//                   <p>
//                     {update ? (
//                       <textarea
//                         className="form-control"
//                         value={proFourthCards2desc1}
//                         onChange={(e) => setproFourthCards2desc(e.target.value)}
//                       ></textarea>
//                     ) : (
//                       proFourthCards2desc1
//                     )}
//                   </p>
//                 </div>
//               </div>
//               <div className="col-md-3 py-3">
//                 <div className="product-first-img">
//                   {update ? (
//                     <input
//                       className="form-control"
//                       type="file"
//                       name="proFourthCards3img"
//                       onChange={(e) => setproFourthCards3img(e.target.files[0])}
//                     />
//                   ) : (
//                     <img
//                       src={`http://localhost:5000/images/${proFourthCards3img1}`}
//                       className={proFourthCards3img1}
//                       alt={proFourthCards3img1}
//                     />
//                   )}
//                 </div>
//                 <div className="product-first-comp">
//                   <h5>
//                     {update ? (
//                       <textarea
//                         className="form-control"
//                         value={proFourthCards3title1}
//                         onChange={(e) =>
//                           setproFourthCards3title(e.target.value)
//                         }
//                       ></textarea>
//                     ) : (
//                       proFourthCards3title1
//                     )}
//                   </h5>
//                   <p>
//                     {update ? (
//                       <textarea
//                         className="form-control"
//                         value={proFourthCards3desc1}
//                         onChange={(e) => setproFourthCards3desc(e.target.value)}
//                       ></textarea>
//                     ) : (
//                       proFourthCards3desc1
//                     )}
//                   </p>
//                 </div>
//               </div>
//               <div className="col-md-3 py-3">
//                 <div className="product-first-img">
//                   {update ? (
//                     <input
//                       className="form-control"
//                       type="file"
//                       name="proFourthCards4img"
//                       onChange={(e) => setproFourthCards4img(e.target.files[0])}
//                     />
//                   ) : (
//                     <img
//                       src={`http://localhost:5000/images/${proFourthCards4img1}`}
//                       className={proFourthCards4img1}
//                       alt={proFourthCards4img1}
//                     />
//                   )}
//                 </div>
//                 <div className="product-first-comp">
//                   <h5>
//                     {update ? (
//                       <textarea
//                         className="form-control"
//                         value={proFourthCards4title1}
//                         onChange={(e) =>
//                           setproFourthCards4title(e.target.value)
//                         }
//                       ></textarea>
//                     ) : (
//                       proFourthCards4title1
//                     )}
//                   </h5>
//                   <p>
//                     {update ? (
//                       <textarea
//                         className="form-control"
//                         value={proFourthCards4desc1}
//                         onChange={(e) => setproFourthCards4desc(e.target.value)}
//                       ></textarea>
//                     ) : (
//                       proFourthCards4desc1
//                     )}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div> */}

//         {update ? (
//           <button
//             type="submit"
//             onClick={updateData}
//             className="blog-page-update mb-2"
//           >
//             Update Page
//             <i className="fa-solid fa-repeat ps-2"></i>
//           </button>
//         ) : (
//           ""
//         )}
//       </form>
//       <button onClick={() => setupdate(true)} className="blog-page-update mb-2">
//         Edit Page
//         <i className="fa-solid fa-pen-to-square ps-2"></i>
//       </button>
//     </>
//   );
// };

// export default ProductPage;
