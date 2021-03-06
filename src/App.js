import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Coins from "./components/Coins/Coins";
import Header from "./components/Header/Header";
import Contact from "./components/Contact/Contact";
import Homepage from "./components/Homepage/Homepage";
import Footer from "./components/Footer/Footer";
import CoinDetails from "./components/CoinDetails/CoinDetails";
const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/coins" element={<Coins></Coins>}></Route>
        <Route path="/coin-details/:id" element={<CoinDetails></CoinDetails>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="*" element={<Coins></Coins>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default App;
