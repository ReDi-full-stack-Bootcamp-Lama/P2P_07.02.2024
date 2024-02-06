import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
  const { productId } = useParams(); // Get the productId parameter from the URL
  const [product, setProduct] = useState(null); // State to store the product details
  console.log(productId)
  
  useEffect(() => {
    // Fetch product details from the backend
    fetch(`http://localhost:3000/api/products/${productId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch product details');
        }
        //console.log(response.json())
        return response.json();
      })
 
      .then(data => {
        console.log('Fetched productdetails:', data);
        setProduct(data);
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
      });
  }, [productId]); // Dependency array with productId to re-run the effect when productId changes

  return (
    <div>
      <h2>Product Detail</h2>
     {product ? (
        <div>
          <p>Product ID: {product.id}</p>
          <p>Product Name: {product.name}</p>
          {/* Display other product details */}
      </div>
      ) : (
        <p>Loading...</p>
      )} 
    </div>
  );
};

export default ProductDetailPage;
