import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
const styleCard = {
  width: "400px",
  textAlign: "center",
  boxShadow: "10px 10px 10px 10px gray",
  height: "400px",
};
function CardItem({ product, user }) {
  const handleClickDetails = () => {
    if (!user.connect) {
      if (window.confirm("you should connect before")) {
        navigate("/Sign-in");
      }
    } else {
      navigate(`/list/${product.id}`);
    }
  };
  const navigate = useNavigate();
  return (
    <div style={styleCard}>
      <img src={product.image} alt={`${product.name}`} width="250px" />
      <h1>{product.name}</h1>
      <Button variant="secondary" onClick={handleClickDetails}>
        See details
      </Button>{" "}
    </div>
  );
}

export default CardItem;
