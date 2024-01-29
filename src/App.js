// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Services from "./Components/Services";
import About from "./Components/about1"; 
import Brand from "./Components/brands";

import "./style/app.scss";
import "./style/header.scss";
import "./style/home.scss";
import "./style/footer.scss";
import "./style/contact.scss";
import "./style/about.scss";
import "./style/mediaquery.scss";
import "./style/brand.scss";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Services />} />
        <Route path="/about" element={<About />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
