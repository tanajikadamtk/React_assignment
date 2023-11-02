import React from "react";
import ItemCard from "./CartItem";
import Footer from "./Footer";
import data from "./ProductsData";

function Products() {
  return (
    <>
   
      <div className="card album  bg-light  py-3" style={{ width: "100%" }}>
        <h1 className="text-center mt-3">All Items</h1>
        <section className="py-4 container">
          <div className="row justify-content-between">
            {data.productData.map((item, index) => {
              return (
                <ItemCard
                  img={item.img}
                  title={item.title}
                  desc={item.desc}
                  price={item.price}
                  key={index}
                  item={item}
                />
              );
            })}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Products;
