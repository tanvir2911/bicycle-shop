import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { name, img, design, price } = product;
    return (
        <div className="col-lg-4 col-sm-6 col-12 text-light">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5 className="text-danger">by {design}</h5>
            <h4>${price}</h4>
            <br />
            <Link to="/products/:productId">
                <button>Purchase</button>
            </Link>

        </div>
    );
};

export default Product;