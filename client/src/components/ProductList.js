import axios from 'axios';
import React, { useEffect } from 'react'
import {Link,Routes,Route, Navigate} from "react-router-dom";
// import axios from 'axios';
    
const ProductList = (props) => {

    const deleteThisProduct = (id) => {
        axios.delete(`http://localhost:8000/api/products/delete/${id}`,)
            .then(console.log(`Deleted the product with an id of ${id}`))
            .catch( err => console.log("Sadly it didn't get deleted" + err) )
    }
    
    return (
        <div>
            <h1>All Products</h1>
            {props.products.map( (product, i) =>
                <p key={i}>
                    <Link to ={`/product/${product._id}`}>
                    {product.title}
                    </Link>
                <button onClick={() => deleteThisProduct(product._id)}>Delete</button>
                <button>
                    <Link to={`/products/update/${product._id}`}>
                        Edit
                    </Link>
                </button>
                    {/* {product.price},
                    {product.description} */}
                </p>
            )}
        </div>
    )
}

export default ProductList;

