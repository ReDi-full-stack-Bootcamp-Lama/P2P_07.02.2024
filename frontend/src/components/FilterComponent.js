import React, { useState, useEffect } from 'react';
import './FilterComponent.css';
import Product from './Product';

const FilterComponent = (updateDataState) => {
  const [data, setData] = useState([]); // State to store product data
  const [filterCriteria, setFilterCriteria] = useState('');
  const [sortedData, setSortedData] = useState([]);
  const [editingProductId, setEditingProductId] = useState(null);
  const [newProduct, setNewProduct] = useState({
    img: '',
    name: '',
    desc: '',
    price: '',
    year: '',
  });
  const [newProductFormVisible, setNewProductFormVisible] = useState(false);

  useEffect(() => {
    // Fetch initial data from the backend API when component mounts
    fetch('http://localhost:3000/api/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch product data');
        }
        return response.json();
      })
      .then(data => {
        setData(data); // Update state with fetched product data
      })
      .catch(error => {
        console.error('Error fetching product data:', error);
      });
  }, []); // Empty dependency array to fetch data only once when component mounts

  const handleFilterChange = (e) => {
    setFilterCriteria(e.target.value);
  };

  const handleSort = () => {
    const sorted = [...filteredData].sort((a, b) => a.year - b.year);
    setSortedData(sorted);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(filterCriteria.toLowerCase())
  );

  const handleEdit = (productId) => {
    setEditingProductId(productId);
  };

  const handleSaveEdit = (editedProduct) => {
    setEditingProductId(null);
    const updatedData = data.map((item) =>
      item.id === editedProduct.id ? editedProduct : item
    );
    updateDataState(updatedData);
  };

  const handleCancelEdit = () => {
    setEditingProductId(null);
  };

  const handleDelete = (productId) => {
    const updatedData = data.filter((item) => item.id !== productId);
    updateDataState(updatedData);
  };

  const handleInputChange = (e, productId) => {
    const { name, value } = e.target;
    const updatedData = data.map((item) =>
      item.id === productId ? { ...item, [name]: value } : item
    );
    updateDataState(updatedData);
  };

  const handleAddProduct = () => {
    const updatedData = [...data, newProduct];
    updateDataState(updatedData);
    setNewProduct({
      img: '',
      name: '',
      desc: '',
      price: '',
      year: '',
    });
    setNewProductFormVisible(false);
  };

  const handleNewProductInputChange = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="filter-container">
      <input
        type="text"
        placeholder="Search by Product Name"
        value={filterCriteria}
        onChange={handleFilterChange}
      />
      <button onClick={handleSort}>Sort by Year</button>
      <button onClick={() => setNewProductFormVisible(true)}>Add New Product</button>
      {newProductFormVisible && (
        <div>
          <input
            type="text"
            placeholder="Image URL"
            name="img"
            value={newProduct.img}
            onChange={handleNewProductInputChange}
          />
          <input
            type="text"
            placeholder="Product Name"
            name="name"
            value={newProduct.name}
            onChange={handleNewProductInputChange}
          />
          <input
            type="text"
            placeholder="Product Description"
            name="desc"
            value={newProduct.desc}
            onChange={handleNewProductInputChange}
          />
          <input
            type="text"
            placeholder="Product Year"
            name="year"
            value={newProduct.year}
            onChange={handleNewProductInputChange}
          />
          <input
            type="text"
            placeholder="Price"
            name="price"
            value={newProduct.price}
            onChange={handleNewProductInputChange}
          />
          <button onClick={handleAddProduct}>Save</button>
          <button onClick={() => setNewProductFormVisible(false)}>Cancel</button>
        </div>
      )}

      <ul className="product-list">
        {sortedData.length
          ? sortedData.map((item) => (
              <li className="product" key={item.id}>
                {editingProductId === item.id ? (
                  <div>
                    <input
                      type="text"
                      placeholder="Image URL"
                      name="img"
                      value={item.img}
                      onChange={(e) => handleInputChange(e, item.id)}
                    />
                    <input
                      type="text"
                      placeholder="Product Name"
                      name="name"
                      value={item.name}
                      onChange={(e) => handleInputChange(e, item.id)}
                    />
                    <input
                      type="text"
                      placeholder="Product Description"
                      name="desc"
                      value={item.desc}
                      onChange={(e) => handleInputChange(e, item.id)}
                    />
                    <input
                      type="text"
                      placeholder="Product Year"
                      name="year"
                      value={item.year}
                      onChange={(e) => handleInputChange(e, item.id)}
                    />
                    <input
                      type="text"
                      placeholder="Price"
                      name="price"
                      value={item.price}
                      onChange={(e) => handleInputChange(e, item.id)}
                    />
                    <button onClick={() => handleSaveEdit(item)}>Save</button>
                    <button onClick={handleCancelEdit}>Cancel</button>
                  </div>
                ) : (
                  <div>
                    <Product {...item} />
                    <button onClick={() => handleEdit(item.id)}>Edit</button>
                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                  </div>
                )}
              </li>
            ))
          : filteredData.map((item) => (
              <li className="product" key={item.id}>
                {editingProductId === item.id ? (
                  <div>
                    <input
                      type="text"
                      placeholder="Image URL"
                      name="img"
                      value={item.img}
                      onChange={(e) => handleInputChange(e, item.id)}
                    />
                    <input
                      type="text"
                      placeholder="Product Name"
                      name="name"
                      value={item.name}
                      onChange={(e) => handleInputChange(e, item.id)}
                    />
                    <input
                      type="text"
                      placeholder="Product Description"
                      name="desc"
                      value={item.desc}
                      onChange={(e) => handleInputChange(e, item.id)}
                    />
                    <input
                      type="text"
                      placeholder="Product Year"
                      name="year"
                      value={item.year}
                      onChange={(e) => handleInputChange(e, item.id)}
                    />
                    <input
                      type="text"
                      placeholder="Price"
                      name="price"
                      value={item.price}
                      onChange={(e) => handleInputChange(e, item.id)}
                    />
                    <button onClick={() => handleSaveEdit(item)}>Save</button>
                    <button onClick={handleCancelEdit}>Cancel</button>
                  </div>
                ) : (
                  <div>
                    <Product {...item} />
                    <button onClick={() => handleEdit(item.id)}>Edit</button>
                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                  </div>
                )}
              </li>
            ))}
      </ul>
    </div>
  );
};

export default FilterComponent;
