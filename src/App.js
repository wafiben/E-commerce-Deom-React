import Header from "./Components/Header";
import List from "./Components/Home";
import { products } from "./data";
import { useState } from "react";
import ItemDetails from "./Components/ItemDetails";
import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./Components/Profile";
import SignIn from "./Components/SignIn";
import NotFounPage from "./Components/NotFounPage";
import PrivateRoute from "./Components/PrivateRoute";
import Shop from "./Components/Shop";

function App() {
  const [user, setUser] = useState({
    email: "",
    name: "",
    password: "",
    connect: false,
  });
  const [listOfProduct, setListOfproduct] = useState(products);
  const [shop, setShop] = useState({ listOfItems: [], total: 0 });

  return (
    <BrowserRouter>
      <Header user={user} setUser={setUser} />
      {user.connect && <Shop shop={shop} />}
      <Routes>
        <Route
          path="/"
          element={<List listOfProduct={listOfProduct} user={user} />}
        />
        <Route
          path="/Sign-in"
          element={<SignIn user={user} setUser={setUser} />}
        />
        <Route
          path="/list/:id"
          element={
            <PrivateRoute user={user}>
              <ItemDetails
                listOfProduct={listOfProduct}
                setShop={setShop}
                shop={shop}
              />
            </PrivateRoute>
          }
        />
        <Route
          path="/Profile"
          element={
            <PrivateRoute user={user}>
              <Profile user={user} />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<NotFounPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
