import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Header from "./page/components/Header";
import Footer from "./page/components/Footer";
import Domain from "./page/components/Domain";
import About from "./page/components/About";
import Order from "./page/components/Order";
import Contact from "./page/components/Contact";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/domain" element={<Domain style="inner_page" />} />
        <Route
          path="/about"
          element={<About style="inner_page" read_more={true} />}
        />
        <Route path="/hosting" element={<Order style="inner_page" />} />
        <Route path="/contact" element={<Contact style="inner_page" />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
