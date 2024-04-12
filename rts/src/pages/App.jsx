import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About.jsx";
import Login from "./Login.jsx";
import Contact from "./Contact.jsx";
import "../stylesheets/output.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
