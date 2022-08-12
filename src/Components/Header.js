import React from "react";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import Avatar from "react-avatar";
const navStyle = {
  backgroundColor: "white",
  display: "flex",
  justifyContent: "space-around",
  boxShadow: "10px 10px 10px 10px gray",
  alignItems: "center",
  height: "70px",
};

function Header({ user, setUser }) {
  const navigate = useNavigate();
  const { email, name, password, connect } = user;

  const handleLogout = () => {
    setUser({ ...user, connect: false });
    navigate("/Sign-in");
  };
  return (
    <div style={navStyle}>
      <Link to="/">
        <Button variant="primary">List</Button>{" "}
      </Link>
      {!connect ? (
        <Link to="/Sign-in">
          <Button variant="primary">Connect</Button>{" "}
        </Link>
      ) : (
        <>
          <Link to="/Profile">
            <Avatar name={name} size={50} round="50px" />
          </Link>
          <Button variant="danger" onClick={handleLogout} className="m-1">
            logOut
          </Button>
        </>
      )}
    </div>
  );
}

export default Header;
