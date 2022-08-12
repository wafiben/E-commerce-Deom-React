import React from "react";
const styleProfile = {
  backgroundColor: "gray",
  color: "white",
  width: "500px",
  marginTop: "50px",
};

function Profile({ user }) {
  return (
    <div className="container" style={styleProfile}>
      <h3>Name:{user.name}</h3>
      <h2>email:{user.email}</h2>
    </div>
  );
}

export default Profile;
