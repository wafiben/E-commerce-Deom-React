import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function ItemDetails({ listOfProduct, setShop, shop }) {
  console.log(shop);
  const { id } = useParams();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  const FoundProduct = listOfProduct.find((p) => p.id === Number(id));
  const handleShop = () => {
    const newItem = { ...FoundProduct, qte: 1 };
    const itemExist = shop.listOfItems.find((elt) => elt.id === newItem.id);

    if (!itemExist) {
      setShop({
        listOfItems: [...shop.listOfItems, newItem],
        total: shop.total + newItem.price,
      });
    }
    if (itemExist) {
      setShop({
        total: shop.total + newItem.price,
        listOfItems: shop.listOfItems.map((elt) => {
          if (elt.id === newItem.id) {
            return { ...elt, qte: elt.qte + 1 };
          } else {
            return elt;
          }
        }),
      });
    }
  };
  return (
    <div
      style={{
        backgroundColor: "whitesmoke",
        boxShadow: "10px gray",
        width: "500px",
        margin: "auto",
        marginTop: "40px",
      }}
    >
      <img
        src={FoundProduct && FoundProduct.image}
        alt={FoundProduct && `${FoundProduct.name}`}
        width="200px"
      />
      <h2>{FoundProduct && FoundProduct.name} </h2>
      <h2>{FoundProduct && FoundProduct.price} £</h2>
      <h2>{FoundProduct && FoundProduct.price} </h2>
      <button onClick={handleShop}>Add to cart</button>
      <button onClick={handleClick}>Back Home</button>
    </div>
  );
}

export default ItemDetails;
