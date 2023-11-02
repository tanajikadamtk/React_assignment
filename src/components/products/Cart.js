import React from "react";
import { useCart } from "react-use-cart";
import Footer from "./Footer";

function Cart() {
  const {
    isEmpty,
    items,
    totalUniqueItems,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  if (isEmpty)
    return (
      <>
        <h1 className="text-center " style={{ width: "100%", height: "595px" }}>
          Your Cart is Empty
        </h1>
        <Footer />
      </>
    );

  return (
    <>
      <div
        className="card album  bg-light  py-3 container"
        style={{ width: "100%", minHeight: "603px", maxHeight: "100%" }}
      >
        <div className="row justify-content-center">
          <div className="col-12">
            <h5>
              Cart({totalUniqueItems}) total Items: ({totalItems}){" "}
            </h5>
            <table className="table table-light table-hover m-0">
              {items.map((item, index) => {
                return (
                  <>
                    <tr key={index}>
                      <td>
                        <img src={item.img} alt="" style={{ height: "6rem" }} />
                      </td>
                      <td>{item.title}</td>
                      <td>₹ {item.price}</td>
                      <td>Quantity ({item.quantity})</td>
                      <td>
                        <button
                          className="btn btn-info bg-info ms-2"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                        >
                          -
                        </button>
                        <button
                          className="btn btn-info bg-info ms-2"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                        <button
                          className="btn btn-danger bg-danger ms-2 "
                          onClick={() => removeItem(item.id)}
                        >
                          Remove Item
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </table>
          </div>
          <div className="col-auto ms-auto">
            <h2>Total Price:₹ {cartTotal} </h2>
          </div>
          <div className="col-auto">
            <button className="btn btn-danger m-2" onClick={() => emptyCart()}>
              Clear Cart
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
