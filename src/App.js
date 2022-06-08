import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import NewsPage from "./pages/NewsPage";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App() {
  return (
    <div>
      <Navbar />
      <NewsPage />
    </div>
  );
}

export default App;
