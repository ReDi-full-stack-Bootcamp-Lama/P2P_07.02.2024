import React, { useState, useEffect } from 'react';

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/api/products`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        return response.json();
      })
      .then(data => {
        //console.log('Fetched products:', data);
        setProducts(data); // Update state with fetched products
        setLoading(false); // Update loading state
        //return data; // Pass the data to the next .then() block
      })
/*       .then(products => {
        // Now you have access to the products array
        //products.forEach(product => {
        return products; // Log each product's name
        
      }) */
      .catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Products List</h2>
 
      
      {Array.isArray(products) && products.length > 0 ? ( // Check if products is an array and not empty
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <p>Product ID: {product.id}</p>
              <p>Product Name: {product.name}</p>
              {/* Add other product details */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
};

export default ProductsList;
