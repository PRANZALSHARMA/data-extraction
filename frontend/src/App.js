// import { useState, useRef } from 'react';


// import Navbar from './components/Navbar';
// import ReactCrop from 'react-image-crop'; 

// import 'react-image-crop/dist/ReactCrop.css'; 
// import './App.css';

// function App() {

//   const [src, setSrc] = useState(null);
//   const [crop, setCrop] = useState({ aspect: 16 / 9 });
//   const [image, setImage] = useState(null);
//   const [output, setOutput] = useState(null);
  
//   const selectImage = (file) => {
//     setSrc(URL.createObjectURL(file));
//   };
  
//   const cropImageNow = () => {
//     const canvas = document.createElement('canvas');
//     const scaleX = image.naturalWidth / image.width;
//     const scaleY = image.naturalHeight / image.height;
//     canvas.width = crop.width;
//     canvas.height = crop.height;
//     const ctx = canvas.getContext('2d');
  
//     const pixelRatio = window.devicePixelRatio;
//     canvas.width = crop.width * pixelRatio;
//     canvas.height = crop.height * pixelRatio;
//     ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
//     ctx.imageSmoothingQuality = 'high';
  
//     ctx.drawImage(
//       image,
//       crop.x * scaleX,
//       crop.y * scaleY,
//       crop.width * scaleX,
//       crop.height * scaleY,
//       0,
//       0,
//       crop.width,
//       crop.height,
//     );
      
//     // Converting to base64
//     const base64Image = canvas.toDataURL('image/jpeg');
//     setOutput(base64Image);
//   };

//   const [formFields, setFormFields] = useState([
//     { key: '', value: '' },
//   ])
  

//   const handleFormChange = (event, index) => {
//     let data = [...formFields];
//     data[index][event.target.key] = event.target.value;
//     setFormFields(data);
//   }

//   const submit = (e) => {
//     e.preventDefault();
//     console.log(formFields)
//   }

//   const addFields = () => {
//     let object = {
//       key: '',
//       value: ''
//     }


//     setFormFields([...formFields, object])
//   }

//   const removeFields = (index) => {
//     let data = [...formFields];
//     data.splice(index, 1)
//     setFormFields(data)
//   }


//   return (
//     <>
//     <div>
//     <Navbar title="DocForm" aboutText="About DocForm" />
//     <div className="container">
//     <div className="row">
//     <div className='col-6'>
//     <center>
//         <input
//           type="file"
//           accept="image/*"
//           onChange={(e) => {
//             selectImage(e.target.files[0]);
//           }}
//         />
//         <br />
//         <br />
//         <div>
//           {src && (
//             <div>
//               <ReactCrop src={src} onImageLoaded={setImage}
//                 crop={crop} onChange={setCrop} />
//               <br />
//               <button onClick={cropImageNow}>Crop</button>
//               <br />
//               <br />
//             </div>
//           )}
//         </div>
//         <div>{output && <img src={output} />}</div>
//       </center>
//     </div>
//     <div className="col-6">
//     <div className="App">
//       <form onSubmit={submit}>
//         {formFields.map((form, index) => {
//           return (
//             <div key={index}>
//               <input
//                 name={form.key !== ''? form.key: 'Key'}
//                 placeholder={form.key !== ''? form.key: 'Key'}
//                 onChange={event => handleFormChange(event, index)}
//                 value={form.key}
//               />
//               <input
//                 name={form.value !== ''? form.value: 'Value'}
//                 placeholder={form.value !== ''? form.value: 'Value'}
//                 onChange={event => handleFormChange(event, index)}
//                 value={form.value}
//               />
//               <button onClick={() => removeFields(index)}>Remove</button>
//             </div>
//           )
//         })}
//       </form>
//       <button onClick={addFields}>Add More..</button>
//       <br />
//       <button onClick={submit}>Submit</button>
//     </div>
//     </div>
//     </div>
//     </div>
//     </div>
//     </>
//   );
// }

// export default App;

import { useState } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

function App() {
const [src, setSrc] = useState(null);
const [crop, setCrop] = useState({ aspect: 16 / 9 });
const [image, setImage] = useState(null);
const [output, setOutput] = useState(null);

const selectImage = (file) => {
	setSrc(URL.createObjectURL(file));
};

const cropImageNow = () => {
	const canvas = document.createElement('canvas');
	const scaleX = image.naturalWidth / image.width;
	const scaleY = image.naturalHeight / image.height;
	canvas.width = crop.width;
	canvas.height = crop.height;
	const ctx = canvas.getContext('2d');

	const pixelRatio = window.devicePixelRatio;
	canvas.width = crop.width * pixelRatio;
	canvas.height = crop.height * pixelRatio;
	ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
	ctx.imageSmoothingQuality = 'high';

	ctx.drawImage(
	image,
	crop.x * scaleX,
	crop.y * scaleY,
	crop.width * scaleX,
	crop.height * scaleY,
	0,
	0,
	crop.width,
	crop.height,
	);
	
	// Converting to base64
	const base64Image = canvas.toDataURL('image/jpeg');
	setOutput(base64Image);
};

return (
	<div className="App">
	<center>
		<input
		type="file"
		accept="image/*"
		onChange={(e) => {
			selectImage(e.target.files[0]);
		}}
		/>
		<br />
		<br />
		<div>
		{src && (
			<div>
			<ReactCrop src={src} onImageLoaded={setImage}
				crop={crop} onChange={setCrop} />
			<br />
			<button onClick={cropImageNow}>Crop</button>
			<br />
			<br />
			</div>
		)}
		</div>
		<div>{output && <img src={output} />}</div>
	</center>
	</div>
);
}

export default App;
