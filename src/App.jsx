import { useState } from "react";

// Components
import Nav from "./components/Nav";
import HeadLine from "./components/Headline";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Food from "./components/Food";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Nav />
      <Hero />
      <HeadLine />
      <Food />
      <Categories />
      <Footer />
    </div>
  );
}

export default App;
