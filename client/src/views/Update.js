import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import { Link, Navigate } from 'react-router-dom'

const Update = (props) => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
    }, [id]);

    const updateProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/product/update/' + id, {
            title,
            price,
            description,
        })
            .then(res => console.log(res))
            .catch(err => console.error(err));
    }

    const deleteThisProduct = (id) => {
        axios.delete(`http://localhost:8000/api/products/delete/${id}`,)
            .then(console.log(`Deleted the product with an id of ${id}`))
            .catch( err => console.log("Sadly it didn't get deleted" + err) )
    }

    return (
        <div>
            <h1>Update a Product</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Title</label><br />
                    <input type="text"
                    name="title"
                    value={title}
                    onChange={(e) => { setTitle(e.target.value) }} />
                </p>
                <p>
                    <label>Price</label><br />
                    <input type="number"
                    name="price"
                    value={price}
                    onChange={(e) => { setPrice(e.target.value) }} />
                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text"
                    name="description"
                    value={description}
                    onChange={(e) => { setDescription(e.target.value) }} />
                </p>
                <input type="submit" />
                <button onClick={() => deleteThisProduct(`${id}`)}>
                    <Link to ={`/products`}>
                        Delete
                    </Link>
                </button>
            </form>
        </div>
    )
}

export default Update;

