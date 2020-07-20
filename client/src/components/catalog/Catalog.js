import React, { useState, useEffect } from "react";
import FilterForm from "./FilterForm";
import ProductDisplay from "./ProductDisplay";
import Pagination from "./Pagination";
import "./Catalog.css";
import { connect } from "react-redux";
import * as productActions from "../../redux/actions/productActions";
import * as cartActions from "../../redux/actions/cartActions";
import { bindActionCreators } from "redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Catalog(props) {
  const [filteredCategory, setFilteredCategory] = useState("");

  const [chosen, setChosen] = useState();
  const [inlineStyle, setInlineStyle] = useState({
    animation: "",
    borderColor: "",
  });

  const filteredProducts = Object.values(props.products).filter(
    (product) =>
      product.category === filteredCategory || filteredCategory === ""
  );

  /* States for pagination */
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(6);

  function getCurrentProductsInPage() {
    const indexOfLastProductInPage = currentPage * postPerPage;
    const indexOfFirstProductInPage = indexOfLastProductInPage - postPerPage;
    const currentProductsInPage = filteredProducts.slice(
      indexOfFirstProductInPage,
      indexOfLastProductInPage
    );
    return currentProductsInPage;
  }

  const maxPageNumber = Math.ceil(filteredProducts.length / postPerPage);
  const allPageNumbers = [];
  for (var i = 1; i <= maxPageNumber; i++) {
    allPageNumbers.push(i);
  }

  const sugarSelection = [
    { name: "100% Sugar", inquiryId: 100 },
    { name: "70% Sugar", inquiryId: 70 },
    { name: "50% Sugar", inquiryId: 50 },
    { name: "30% Sugar", inquiryId: 30 },
    { name: "0% Sugar", inquiryId: 0 },
  ];

  const iceSelection = [
    { name: "100% ice", inquiryId: 100 },
    { name: "70% ice", inquiryId: 70 },
    { name: "50% ice", inquiryId: 50 },
    { name: "30% ice", inquiryId: 30 },
    { name: "0% ice", inquiryId: 0 },
  ];

  const addOns = [
    { name: "Bubble", price: 0.55 },
    { name: "Jelly Ball", price: 0.99 },
    { name: "Brulee", price: 1.1 },
    { name: "Cheese", price: 1.1 },
    { name: "Hulless Barley", price: 1.1 },
  ];

  const [errors, setErrors] = useState({});

  useEffect(() => {
    /*axios.get("http://localhost:5000/products/").then((response) => {
      if (productsData.products.length === 0) {
        setProductsData({
          ...productsData,
          products: response.data,
        });
      }
    });*/
    if (Object.keys(props.products).length === 0) {
      props.productActions
        .loadProducts()
        .catch((error) => alert("Loading products failed" + error));
      props.productActions
        .loadCategories()
        .catch((error) => alert("Loading categories failed" + error));
    }
  }, [props.products, props.productActions]);

  function prevPage() {
    if (currentPage === 1) {
    } else {
      const previousPageNumber = currentPage - 1;
      setCurrentPage(previousPageNumber);
    }
  }

  function nextPage() {
    if (currentPage === Math.ceil(filteredProducts.length / postPerPage)) {
    } else {
      const nextPageNumber = currentPage + 1;
      setCurrentPage(nextPageNumber);
    }
  }

  function changePage(event) {
    const nameTag = event.currentTarget.getAttribute("name");
    const _currentPage = parseInt(nameTag, 10);

    setCurrentPage(_currentPage);

    const chosenColor = chooseBorderColor(filteredCategory);
    setInlineStyle({
      animation: "zoomIn 0.5s ease-in",
      borderColor: chosenColor,
    });
  }

  function pageView(event) {
    const _postPerPage = event.target.value;

    setCurrentPage(1);
    setPostPerPage(_postPerPage);
  }

  function chooseBorderColor(category) {
    let _borderColor;
    switch (category) {
      case "":
        _borderColor = "black";
        break;
      case "The Originals":
        _borderColor = "pink";
        break;
      case "The Cheesies":
        _borderColor = "rgb(252, 82, 0)";
        break;

      case "The Supremes":
        _borderColor = "rgb(238, 211, 143)";
        break;

      case "The Fruitopias":
        _borderColor = "rgb(166, 202, 130)";
        break;
      case "The Hotties":
        _borderColor = "rgb(107, 159, 144)";
        break;
      default:
        _borderColor = "black";
    }
    return _borderColor;
  }

  function handleSelect(event) {
    const nameTag = event.target.getAttribute("name");
    setFilteredCategory(nameTag);
    setCurrentPage(1);
    setChosen(nameTag);

    const chosenColor = chooseBorderColor(nameTag);

    setInlineStyle({
      animation: "zoomIn 0.5s ease-in",
      borderColor: chosenColor,
    });
  }

  function selectSugar(event) {
    let product;

    product = event.target.name;
    const sugarLevel = event.target.value;
    props.productActions.changeSugarAmount(sugarLevel, product);
  }

  function selectIce(event) {
    let product;

    product = event.target.name;

    const iceLevel = event.target.value;

    props.productActions.changeIceAmount(iceLevel, product);
  }

  function toggleHotCold(event) {
    const productName = event.target.name;
    const newTemp = !props.products[productName].isHot;
    if (newTemp && props.products[productName].icelevel) {
      props.productActions.removeIceSelection(productName);
    }
    props.productActions.changeHotCold(newTemp, productName);
  }

  console.log(props.products["Cheese Green Tea"]);

  function addIngredients(event) {
    const tag = event.currentTarget;
    const itemName = tag.getAttribute("name");
    const ingredientName = tag.parentElement.getAttribute("name");
    let ingredientQuantity;
    const currentQuantity = props.products[itemName][ingredientName];
    if (currentQuantity === undefined) {
      ingredientQuantity = 1;
    } else {
      ingredientQuantity = currentQuantity + 1;
    }
    props.productActions.chooseIngredients(
      ingredientName,
      ingredientQuantity,
      itemName
    );
  }

  function removeIngredients(event) {
    const tag = event.currentTarget;
    const itemName = tag.getAttribute("name");
    const ingredientName = tag.parentElement.getAttribute("name");
    let ingredientQuantity;
    const currentQuantity = props.products[itemName][ingredientName];
    if (currentQuantity === undefined || currentQuantity === 0) {
      ingredientQuantity = 0;
    } else {
      ingredientQuantity = currentQuantity - 1;
    }
    props.productActions.chooseIngredients(
      ingredientName,
      ingredientQuantity,
      itemName
    );
  }

  function addQuantity(event) {
    const productName = event.currentTarget.getAttribute("name");
    const newQuant = props.products[productName].quantity + 1;
    props.productActions.changeQuantity(newQuant, productName);
  }

  function removeQuantity(event) {
    const productName = event.currentTarget.getAttribute("name");
    if (props.products[productName].quantity === 0) {
    } else {
      const newQuant = props.products[productName].quantity - 1;
      props.productActions.changeQuantity(newQuant, productName);
    }
  }

  function addingIsValid(product) {
    const {
      sugarlevel,
      icelevel,
      quantity,
      productName,
      isHot,
      iceChangeable,
      sugarChangeable,
    } = product;
    var errors = {};

    if (!sugarlevel && sugarChangeable)
      errors[productName] = {
        ...errors[productName],
        sugarlevel: "Please choose sugar amount.",
      };
    if (!icelevel && iceChangeable && !isHot)
      errors[productName] = {
        ...errors[productName],
        icelevel: "Please choose ice amount.",
      };
    if (quantity === 0)
      errors[productName] = {
        ...errors[productName],
        quantity: "Please choose a quantity",
      };

    setErrors(errors);

    return Object.keys(errors).length === 0;
  }
  /*Needs improvement*/
  function addToCart(event) {
    const productName = event.target.getAttribute("name");
    const currentProduct = props.products[productName];
    if (!addingIsValid(currentProduct)) return;
    const cartItemWithSameSpec = props.cartItems.find(
      (item) =>
        item.productName === productName &&
        item.icelevel === currentProduct.icelevel &&
        item.sugarlevel === currentProduct.sugarlevel &&
        item["Bubble"] === currentProduct["Bubble"] &&
        item["Jelly Ball"] === currentProduct["Jelly Ball"] &&
        item["Brulee"] === currentProduct["Brulee"] &&
        item["Cheese"] === currentProduct["Cheese"] &&
        item["Hulless Barley"] === currentProduct["Hulless Barley"]
    );
    if (cartItemWithSameSpec) {
      const newQuantity =
        cartItemWithSameSpec.quantity + currentProduct.quantity;
      props.cartActions.changeItemQuantity(newQuantity, productName);
      props.productActions.loadProducts();
    } else {
      props.cartActions.addItemToCart(currentProduct);
      props.productActions.loadProducts();
    }
    toast.success(`${productName} has been added to cart`);
  }

  return (
    <div className="catalog">
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Pagination
        changePage={changePage}
        pageView={pageView}
        prevPage={prevPage}
        nextPage={nextPage}
        chosen={currentPage}
        maxPageNumber={maxPageNumber}
        allPageNumbers={allPageNumbers}
      />
      <div className="catalog-display">
        <FilterForm
          categories={props.categories}
          handleSelect={handleSelect}
          chosen={chosen}
        />
        <ProductDisplay
          style={inlineStyle}
          products={getCurrentProductsInPage()}
          iceSelection={iceSelection}
          sugarSelection={sugarSelection}
          selectIce={selectIce}
          selectSugar={selectSugar}
          removeIngredients={removeIngredients}
          addIngredients={addIngredients}
          addToCart={addToCart}
          addOns={addOns}
          addQuantity={addQuantity}
          removeQuantity={removeQuantity}
          toggleHotCold={toggleHotCold}
          errors={errors}
        />
      </div>
    </div>
  );
}
function mapStateToProps(state, ownProps) {
  return {
    cartItems: state.cartItems,
    products: state.products,
    categories: state.categories,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    productActions: bindActionCreators(productActions, dispatch),
    cartActions: bindActionCreators(cartActions, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
