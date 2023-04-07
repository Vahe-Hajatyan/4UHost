import React from "react";
import Slider from "./components/Slider";
import Domain from "./components/Domain";
import Guarantee from "./components/Guarantee";
import Order from "./components/Order";
import About from "./components/About";
import Contact from "./components/Contact";
const Home = () => {
  let bodyClassName = document.body.classList.contains("inner_page");
  if (bodyClassName) document.body.classList.remove("inner_page");
  return (
    <>
      <Slider />
      <Domain button_domain={true} />
      <Guarantee />
      <Order />
      <About />
      <Contact />
    </>
  );
};

export default Home;
