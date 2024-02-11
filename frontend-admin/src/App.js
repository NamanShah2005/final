import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "../src/styles/main.scss"
import { Home } from "./components/Home.jsx";
import { Header } from "./components/Header.jsx";
import { Toaster } from "react-hot-toast";
import { AddProduct } from "./components/AddProduct.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/addproduct" element={<AddProduct />}/>
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
