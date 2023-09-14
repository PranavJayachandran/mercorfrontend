import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Footer from "./Footer";
import Content from "./Content";
import vector from "./assets/Vector.png";
import Header from "./Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-black scrollbarhide overflow-scroll h-screen w-screen">
      <img src={vector} />
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
