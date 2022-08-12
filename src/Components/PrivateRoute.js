import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children, user }) {
  return (
    <div style={{ textAlign: "center" }}>
      {user.connect ? children : <Navigate to="/Sign-in" />}
    </div>
  );
}

export default PrivateRoute;
