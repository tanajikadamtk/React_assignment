import "./App.css";
import Login from "./components/login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./components/products/Main";
import Products from "./components/products/Products";
import Cart from "./components/products/Cart";
import { CartProvider } from "react-use-cart";
import Header from "./components/products/Header";

function App() {
  return (
    <>
      <Router>
        <Header login=" Log in" />

        <Switch>
          <Route exact path="/home">
            <Main />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>

          <CartProvider>
            <Route exact path="/products">
              <Products />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
          </CartProvider>
        </Switch>
      </Router>
    </>
  );
}

export default App;
