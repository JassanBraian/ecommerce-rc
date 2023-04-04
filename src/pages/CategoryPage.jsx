import React, { useContext, useEffect, useState } from "react";
import ProductsCard from "../components/common/ProductsCard";
import AdminProductsContext from "../context/admin/products/AdminProductsContext";
import "../css/CategoryPage.css";

const CategoryPage = () => {
  const { products, getProducts, categoryFiltered, filterByCategory } =
    useContext(AdminProductsContext);

  useEffect(() => {
    getProducts();
  }, []);

  const allProducts = products.map((product, index) => (
    <ProductsCard
      photo={product.photo}
      title={product.name}
      price={product.price}
      offerPrice={product.offerPrice}
      key={index}
    />
  ));

  const [listProducts, setListProducts] = useState(allProducts);

  const [currentCategory, setCurrentCategory] = useState("Todas");

  const [currentNumbOfProducts, setCurrentNumbOfProducts] = useState(
    listProducts.length + " productos"
  );

  const categoryFilter = (category) => {
    /* let filteredProducts = []; */
    console.log('1', category);
    if(category !== '' ){
      setListProducts(products.filter((product) => product.category === category)
      .map((product, index) => (
        <ProductsCard
          title={product.name}
          price={product.price}
          offerPrice={product.offerPrice}
          key={index}
        />
      )))
    } else {
      setListProducts(
        products
          .map((product, index) => (
            <ProductsCard
              title={product.name}
              price={product.price}
              offerPrice={product.offerPrice}
              key={index}
            />
          ))
      );
    }
    /* category !== '' && filteredProducts = products.filter((product) => product.category === category) */
    /* setListProducts(
      products
        .filter((product) => product.category === category)
        .map((product, index) => (
          <ProductsCard
            title={product.name}
            price={product.price}
            offerPrice={product.offerPrice}
            key={index}
          />
        ))
    ); */
  };

/*   const categoryFilter = (category) => {
    setListProducts(
      products
        .filter((product) => product.category === category)
        .map((product, index) => (
          <ProductsCard
            title={product.name}
            price={product.price}
            offerPrice={product.offerPrice}
            key={index}
          />
        ))
    );
  }; */

  useEffect(() => {
    categoryFilter(categoryFiltered);
    setCurrentCategory(categoryFiltered);
  }, [filterByCategory]);

  useEffect(() => {
    setCurrentNumbOfProducts(listProducts.length + " productos");
  }, [listProducts]);

  return (
    <>
      <h1 className="category-page-title">CATEGORÍAS</h1>
      <div className="category-page-links-container">
        <h3
          className="category-page-link"
          onClick={() => {
            setListProducts(allProducts);
            setCurrentCategory("TODAS");
          }}
        >
          TODAS
        </h3>
        <h3
          className="category-page-link"
          onClick={() => {
            categoryFilter("Zapatillas");
            setCurrentCategory("Zapatillas");
          }}
        >
          Zapatillas
        </h3>
        <h3
          className="category-page-link"
          onClick={() => {
            categoryFilter("Ojotas");
            setCurrentCategory("Ojotas");
          }}
        >
          Ojotas
        </h3>
        <h3
          className="category-page-link"
          onClick={() => {
            categoryFilter("Botines");
            setCurrentCategory("Botines");
          }}
        >
          Botines
        </h3>
        <h3
          className="category-page-link"
          onClick={() => {
            categoryFilter("Remeras");
            setCurrentCategory("Remeras");
          }}
        >
          Remeras
        </h3>
        <h3
          className="category-page-link"
          onClick={() => {
            categoryFilter("Camisetas");
            setCurrentCategory("Camisetas");
          }}
        >
          Camisetas
        </h3>
        <h3
          className="category-page-link"
          onClick={() => {
            categoryFilter("Shorts");
            setCurrentCategory("Shorts");
          }}
        >
          Shorts
        </h3>
        <h3
          className="category-page-link"
          onClick={() => {
            categoryFilter("Pantalones");
            setCurrentCategory("Pantalones");
          }}
        >
          Pantalones
        </h3>
        <h3
          className="category-page-link"
          onClick={() => {
            categoryFilter("Buzos y Camperas");
            setCurrentCategory("Buzos y Camperas");
          }}
        >
          Buzos y Camperas
        </h3>
      </div>
      <h3 className="category-page-current-category">{currentCategory}</h3>
      <p className="category-page-current-numb-of-products">
        {currentNumbOfProducts}
      </p>
      <div className="category-page-categories-container">{listProducts}</div>
    </>
  );
};

export default CategoryPage;
