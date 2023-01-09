// import React, { useState, useEffect } from 'react'
// import { renderToString } from 'react-dom/server'
// import axios from "axios";
// import ImageUpload from './hooks/imageUpload'




// function FullRecipe() {
//   const [title, setTitle] = useState(['']);
//   const [photo, setPhoto] = useState();
//   const [usedIngredientCount, setUsedIngredientCount] = useState(['']);
//   const [unusedIngredients, setUnusedIngredients] = useState(['']);
//   const [recipe, setRecipe] = useState([' '])
//   const [selectedFile, setSelectedFile] = useState();
//   const [isFilePicked, setIsFilePicked] = useState(false);
//   const [file, setFile] = useState()
  



//   const changeHandler = async (event) => {
//     setSelectedFile(event.target.files[0]);
//     setIsFilePicked(true);
//   };

//   const handleSubmission = async () => {
    
//     const formData = new FormData();
    
// 		formData.append('File', selectedFile);
//     let some = <ImageUpload data={selectedFile}/>
//     await setPhoto(<ImageUpload data={selectedFile}/>)
//     // await setFile(ReactDOMServer.renderToStaticMarkup(photo))
//     setFile(photo)
//     // console.log(typeof(file))
//     // console.log(some)
//     // console.log(typeof(some))
//     // const options = await {
//     //   method: 'POST',
//     //   url: `https://api.imgbb.com/1/upload?key=198d62c2c2ca10a6d7838497b71d53ba&image=${file}`,
//     // };
 
//   // let response = await axios.request(options)
//   //     .then(function (response) {
//   //         console.log(response)
//   //         return response.data
//   //     }).catch(function (error) {
//   //         console.error(error);
//   //         return error
//   //     });
// 	// 	await axios (
// 	// 		`https://api.imgbb.com/1/upload?key=198d62c2c2ca10a6d7838497b71d53ba`,
//   //     {
// 	// 			method: 'POST',
// 	// 			image: file,
//   //       // name: selectedFile.name,
// 	// 		}
// 	// 	)
// 	// 		.then((response) => response.json())
// 	// 		.then((result) => {
// 	// 			console.log('Success:', result);
// 	// 		})
// 	// 		.catch((error) => {
// 	// 			console.error('Error:', error);
// 	// 		});
// 	};
  


//   return (
//     <section id='MyRecipe' className="vh-100">
//       <div className="container py-5 h-100">
//         <div className="row d-flex justify-content-center align-items-center h-100">
//           <div className="col-12 col-md-8 col-lg-6 col-xl-5">
//             <div id='log2' className="card shadow-2-strong" >
//               <div className="card-body p-5 text-center">

//                 <h3 className="mb-5">Save your recipe in your book</h3>

//                 <div className="form-outline mb-4">
//                   <label className="form-label" htmlFor="typeUserX-2">
//                     What is the name for your recipe:</label>{' '}
//                   <input type='text' id="typeUserX-2"
//                     className="form-control form-control-lg"
//                     onChange={e => setTitle(e.target.value)} />
//                 </div>

//                 <div className="form-outline mb-4">
//                   <input type="text" id="typeRecipeX-2" className="form-control form-control-lg"
//                     onChange={e => setRecipe(e.target.value)} />
//                   <label className="form-label" htmlFor="typeRecipeX-2">Give some details about your recipe</label>
//                 </div>

//                 <div className="form-outline mb-4">
//                   <input type="text" id="typeRecipeX-2" className="form-control form-control-lg"
//                     onChange={e => setRecipe(e.target.value)} />
//                   <label className="form-label" htmlFor="typeRecipeX-2">Give some details about your recipe</label>
//                 </div>


//                 <div>
//                   <input type="file" name="file" onChange={changeHandler} />
//                   {isFilePicked ? (
//                     <div>
//                       <p>Filename: {selectedFile.name}</p>
//                     </div>
//                   ) : (
//                     <p>Save a image</p>
//                   )}
//                   <div>
//                     <button onClick={handleSubmission}>Submit</button>
//                   </div>
//                 </div>
//                 {file}


//                 {/* <button id='bu1' className="btn btn-primary btn-lg btn-block" onClick={handleLogin}>Login</button> */}



//                 <hr className="my-4" />



//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
// export default FullRecipe