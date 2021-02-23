import React, { useState, useEffect } from "react";
import axios from "axios";
import CategorySidebar from "./CategoriesSidebar/CategorySidebar";
import Products from "./Products/Products";
import CategoryDropdown from "./CategoryDropdown/CategoryDropdown";
import "./ProductsPage.scss";
import { withRouter } from "react-router-dom";

const ProductsPage = (props) => {
  const categoryIdFromUrl = props.location.pathname.split("/")[2];
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(categoryIdFromUrl);
  // const [toggleCategoryButton, setToogleCategoryButton] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:5000/categories").then((response) => {
      const outputArray = [];
      const indexArray = [];

      for (const key in response.data) {
        if (response.data[key].enabled) {
          indexArray.push(response.data[key].order);
        }
      }
      for (const key in indexArray) {
        for (const newKey in response.data) {
          if (response.data[newKey].order === indexArray[key])
            outputArray[indexArray[key] - 1] = response.data[newKey];
        }
      }
      // console.log(outputArray);
      setCategories(outputArray);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:5000/products").then((response) => {
      if (selectedCategory) {
        let outputData = response.data;
        let filterData = outputData.filter((product) => {
          return product.category === selectedCategory;
        });
        setProducts(filterData);
      } else {
        setProducts(response.data);
      }
    });
  }, [selectedCategory]);

  const categorySelectedHandler = (categoryId) => {
    // console.log(typeof id);
    if (selectedCategory === categoryId) {
      props.history.push("/products/");
      setSelectedCategory(null);

      return false;
    } else {
      setSelectedCategory(categoryId);
      // props.history.push("/products/" + categoryId);
      // setToogleCategoryButton(true);
      return true;
    }
    // console.log(selectedCategory);
  };
  const optionSelected = (e) => {
    let idx = e.target.selectedIndex;
    let categoryId = e.target.options[idx].value;
    props.history.push("/products/" + categoryId);
    setSelectedCategory(categoryId);
  };

  return (
    <div className="productspage">
      <CategorySidebar
        categoriesData={categories}
        categorySelected={categorySelectedHandler}
        seletcedCategory={selectedCategory}
      />
      <CategoryDropdown
        categoriesData={categories}
        // categorySelected={categorySelectedHandler}
        seletcedCategory={selectedCategory}
        optionSelected={optionSelected}
      />
      <Products productsData={products} addProduct={props.addProduct} />
    </div>
  );
};

export default withRouter(ProductsPage);
