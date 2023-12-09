import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import CartContainer from "./components/CartContainer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals } from "./features/cart/CartSlice";

function App() {
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <main>
      <NavBar />
      <CartContainer />
    </main>
  );
}

export default App;
