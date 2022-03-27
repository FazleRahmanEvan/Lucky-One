import React from 'react';


import './Product.css';

const Product = ({handleAddToCart,product}) => {
    // const {handleAddToCart} = props;
    const {name,img, price}= product;
    // console.log(props);
    return (
        <div className='product'>
            <img className='image' src={img} alt=""></img>
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                
            </div>
            <button onClick={()=>handleAddToCart(product)} className='btn-cart'>
                <p className='btn-name'>Add To Cart</p>
            
            </button>
        </div>
    );
};

export default Product;