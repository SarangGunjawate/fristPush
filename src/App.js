import "./App.css";
import Header from "./component/Layout/Header";
import { useState } from "react";
import Meals from "./component/Meals/Meals";
import Cart from "./component/Cart/Cart";
import CartProvider from "./Store/CartProvider";

function App() {

  const [CartIsShow, setCartIsShow] = useState(false);
  
  const handleShow = () => {
    setCartIsShow(true);
  }

  const handleClose =() => {
    setCartIsShow(false);
  }

  return (
    <CartProvider>
      {CartIsShow && <Cart onClose={handleClose}/>}
      <Header onShow = {handleShow}/>
      <main>
      <Meals />
      </main>
    </CartProvider>
  );
};

export default App;
