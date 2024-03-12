import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
// import { CartProvider } from "./context/CartContext";
import "./index.css";
import App from "./App";
import { store } from "./store/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        {/* <CartProvider> */} 
        <App />
        {/* </CartProvider> */}
      </Router>
    </Provider>
  </React.StrictMode>
);
