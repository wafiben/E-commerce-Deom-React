import React from "react";
import CardItem from "./CardItem";
const styleList = {
  display: "flex",
  marginTop: "100px",
  justifyContent: "space-around",
};

function List({ listOfProduct, user }) {
  return (
    <div style={styleList}>
      {listOfProduct.map((elt) => (
        <CardItem key={elt.id} product={elt} user={user}/>
      ))}
    </div>
  );
}

export default List;
