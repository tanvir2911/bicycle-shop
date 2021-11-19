import React, { useEffect, useState } from 'react';
import Product from '../Home/Product/Product';

const Explore = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/explore')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <div id="products" className="container bg-dark ">
            <h2 className="text-primary mt-5">All Products</h2>
            <div className="row">
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    >

                    </Product>)
                }
            </div>
        </div>
    );
};

export default Explore;