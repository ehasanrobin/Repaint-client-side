import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosPrivate from "./Api/Axios";
import "./App.css";
import auth from "./firebase/firebase.init";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Blogs from "./Pages/Blogs/Blogs";
import Contact from "./Pages/Contact/Contact";
import AddPost from "./Pages/Dashboard/AddPost";
import AddReview from "./Pages/Dashboard/AddReview";
import AllOroders from "./Pages/Dashboard/AllOroders";
import AllUsers from "./Pages/Dashboard/AllUsers";
import BlogsPost from "./Pages/Dashboard/BlogsPost";
import Dashbaord from "./Pages/Dashboard/Dashbaord";
import Myorders from "./Pages/Dashboard/Myorders";
import Myprofile from "./Pages/Dashboard/Myprofile";
import Payment from "./Pages/Dashboard/Payment";
import Products from "./Pages/Dashboard/Products";
import UpdateProducts from "./Pages/Dashboard/UpdateProducts";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Orders from "./Pages/Orders/Orders";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import Navbar from "./Pages/Shared/Navbar";
import SignUp from "./Pages/SignUp/SignUp";
import Tools from "./Pages/Tools/Tools";
function App() {
  document.title = "Arrowai";
  const [order, setOrder] = useState({});
  const [user] = useAuthState(auth);
  const [userAdmin, setUserAdmin] = useState({});

  useEffect(() => {
    axiosPrivate({
      method: "GET",
      url: `http://localhost:5000/users/${user?.email}`,
    }).then((res) => {
      setUserAdmin(res.data);
    });
  }, [user]);
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" exact element={<Home></Home>}></Route>
        <Route path="/login" exact element={<Login></Login>}></Route>
        <Route path="/signUp" exact element={<SignUp></SignUp>}></Route>
        <Route path="/about" exact element={<AboutUs></AboutUs>}></Route>
        <Route path="/contactUs" exact element={<Contact></Contact>}></Route>
        <Route path="/blogs" exact element={<Blogs></Blogs>}></Route>
        <Route
          path="/tools/:id"
          exact
          element={
            <PrivateRoute>
              <Tools setOrder={setOrder}></Tools>
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/orders"
          exact
          element={
            <PrivateRoute>
              <Orders order={order}></Orders>
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/dashboard"
          exact
          element={
            <PrivateRoute>
              <Dashbaord></Dashbaord>
            </PrivateRoute>
          }
        >
          <Route index element={<Myprofile />} />
          <Route path="myOrders" element={<Myorders />} />
          <Route path="addreview" element={<AddReview />} />
          <Route path="Allusers" element={<AllUsers />} />
          <Route path="blogs" element={<BlogsPost />} />
          <Route path="addPost" element={<AddPost />} />
          <Route path="orders" element={<AllOroders />} />
          <Route path="products" element={<Products />} />
          <Route path="updateProduct/:id" element={<UpdateProducts />} />
          <Route path="payment/:id" element={<Payment />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
