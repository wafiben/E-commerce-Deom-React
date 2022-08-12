import React from "react";
const cardStyle = {
  border: "solid black 1px",
  backgroundColor: "white",
  padding: "20px",
};

function Shop({ shop: { listOfItems, total } }) {
  return (
    <>
      {total!==0 && (
        <div>
          <h1>total price:{total}</h1>
          <div style={cardStyle}>
            {listOfItems.map((elt) => (
              <h1 key={elt.id}>
                {elt.name}: {elt.qte}
              </h1>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Shop;
