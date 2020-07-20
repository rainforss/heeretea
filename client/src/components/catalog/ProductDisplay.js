import React from "react";
import SelectInput from "../common/SelectInput";
import NumberInput from "../common/NumberInput";

function ProductDisplay(props) {
  return (
    <div className="product-display">
      {props.products.map((product) => (
        <div
          style={props.style}
          key={product.productName}
          className="product-flip-card"
        >
          <div className="individual-product">
            <div className="product-card-front">
              <span>
                {product.productName} {product.price}
              </span>
            </div>
            <div className="product-card-back">
              <span>
                {product.productName} {product.price}
              </span>
              <form>
                <div className="temp-select">
                  <SelectInput
                    disable={!product.iceChangeable || product.isHot}
                    label="Ice Selection"
                    inquiryOptions={
                      props.iceRemovable
                        ? props.iceSelection
                        : props.iceSelection.slice(0, -1)
                    }
                    name={product.productName}
                    id={product.productName + " iceSelection"}
                    value={product.icelevel ? product.icelevel : "default"}
                    onChange={props.selectIce}
                    error={
                      props.errors[product.productName]
                        ? props.errors[product.productName].icelevel
                        : ""
                    }
                  />
                  <div
                    className="hot-select"
                    style={
                      product.canHot
                        ? { display: "inline" }
                        : { display: "none" }
                    }
                  >
                    <input
                      disabled={product.category === "Hot Drinks"}
                      type="checkbox"
                      id={"hotSelect" + product.productName}
                      onChange={props.toggleHotCold}
                      checked={product.isHot}
                      name={product.productName}
                    />
                    <label htmlFor={"hotSelect" + product.productName}>
                      HOT
                    </label>
                  </div>
                </div>
                <div>
                  <SelectInput
                    disable={!product.sugarChangeable}
                    label="Sugar Selection"
                    inquiryOptions={props.sugarSelection}
                    name={product.productName}
                    id={product.productName + " sugarSelection"}
                    value={product.sugarlevel ? product.sugarlevel : "default"}
                    onChange={props.selectSugar}
                    error={
                      props.errors[product.productName]
                        ? props.errors[product.productName].sugarlevel
                        : ""
                    }
                  />
                </div>
                <div className="addons">
                  Additional Ingredients
                  <ul className="addons-list">
                    {props.addOns.map((addOn) => (
                      <li key={addOn.name}>
                        {addOn.name}:${addOn.price}
                        <NumberInput
                          productName={product.productName}
                          addOnName={addOn.name}
                          quantity={
                            product[addOn.name] ? product[addOn.name] : 0
                          }
                          add={props.addIngredients}
                          remove={props.removeIngredients}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="item-quantity">
                  <span>Quantity</span>
                  <NumberInput
                    productName={product.productName}
                    quantity={product.quantity}
                    add={props.addQuantity}
                    remove={props.removeQuantity}
                    error={
                      props.errors[product.productName]
                        ? props.errors[product.productName].quantity
                        : ""
                    }
                  />
                </div>
                <div
                  className="add-order"
                  name={product.productName}
                  onClick={props.addToCart}
                >
                  Add to order
                </div>
              </form>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductDisplay;
