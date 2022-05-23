// import React, { useState } from 'react'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom'

// const Create = () => {

//     const navigate = useNavigate();

//     const [title, setTitle] = useState("")
//     const [price, setPrice] = useState("")
//     const [isImportant, setIsImportant] = useState(false)

//     const createProduct = (e) => {
//         e.preventDefault()
//         const newNote = {
//             title: title,
//             price,
//             isImportant
//         }
//         console.log(newProduct);
//         // POST to the DB with the obj
//         axios.post("http://localhost:8000/api/products/create", newNote)
//             .then(res => {
//                 console.log(res.data);
//                 console.log("CLIENT SUCCESS!!!!");
//                 navigate("/products/create");
//             })
//             .catch(err => {
//                 // TODO: when errors come from Server!
//                 console.log("❌ CLient ERROR");
//                 console.log(err);
//             })
//     }

//     return (
//         <div>
//             <p>
//                 {JSON.stringify(title)} <br />
//                 {JSON.stringify(price)} <br />
//                 {JSON.stringify(isImportant)}<br />
//             </p>
//             <form onSubmit={createProduct}>
//                 Title: <input onChange={(e) => setTitle(e.target.value)} value={title} /> <br />
//                 Price: <input onChange={(e) => setPrice(e.target.value)} value={price} /> <br />
//                 <input type="checkbox" onChange={(e) => setIsImportant(e.target.checked)} checked={isImportant} /> is this important?<br />
//                 <button>Create</button>
//             </form>
//         </div>
//     )
// }

// export default Create