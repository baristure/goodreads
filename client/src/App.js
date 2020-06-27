import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AppRouter from "./AppRouter";
import Header from "./components/header";
import Footer from "./components/footer";
function App() {
  return (
    <div className="App">
      <Header />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
