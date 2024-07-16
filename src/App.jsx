import { useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Item from "./components/Item";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Body />
      {/* <div className=""> */}
      <Item />
      {/* </div> */}
      <Footer />
    </>
  );
}

export default App;
