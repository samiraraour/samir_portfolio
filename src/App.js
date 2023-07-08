import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home'
import ContactPage from './components/ContactPage';
import Projet1 from './components/Projet1';
import Projet2 from './components/Projet2';
import TestimonialPage from './components/TestimonialPage';
import AddTestimonialPage from './components/AddTestimonialPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
function App() {
  return (
    <Router>
      <div className="app-container"> {/* Ajoutez une div avec la classe "app-container" */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projet1" element={<Projet1 />} />
          <Route path="/projet2" element={<Projet2 />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/testimonials" element={<TestimonialPage />} />
          <Route path="/add-testimonial" element={<AddTestimonialPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
