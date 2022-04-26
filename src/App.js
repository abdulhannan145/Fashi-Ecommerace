import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import Main from "./Main";
import Blogs from "./Components/Blogs";
import Shop from "./Components/Shop";
import Login from "./Components/Login";
import Contactus from "./Components/Contactus";
import Register from "./Components/Register";
import Products from "./Components/Products";
import Cart from "./Components/Cart";
import ProductcontextProvider from "./Global/Productcontext";
import CartContextProvider from "./Global/Cartcontext";
import Productcontext from "./Global/Productcontext";
import { BrowserRouter } from "react-router-dom";
import Orders from "./Components/Orders";
function App() {
  return (
    <>
      <ProductcontextProvider>
        <CartContextProvider>
          <Header />

          <Switch>
            <Route exact={true} path="/" component={Main} />

            <Route exact={true} path="/blog" component={Blogs} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/contact" component={Contactus} />
            {/* <Main /> */}
            <Route path="/orders" component={Orders} />
          </Switch>

          <Footer />
        </CartContextProvider>
      </ProductcontextProvider>
    </>
  );
}

export default App;
