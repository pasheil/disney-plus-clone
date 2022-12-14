import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Detail from "./components/Detail";

function App() {
  return (
    <div className="app">
      {/* <h2>Disney Plus Clone</h2> */}

      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />

          {/* <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={[<Header />, <Checkout />]} />
        <Route path="/payment" element={[<Header />, <Elements stripe={promise}><Payment /></Elements>]} />
        <Route path="/orders" element={[<Header />, <Orders />]} />
        <Route path="/" element={[<Header />, <Home />]} /> */}

          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
