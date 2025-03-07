import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Blog from './pages/Blog';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Payment from './pages/Payment';

function App() {
  return (
    <Router>
      <div className="pt-20 bg-[#F4CCE9]"> {/* Added padding to prevent navbar overlap */}
        <Navbar />
        <div className="container mx-auto px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/blog" element={<Blog />} />
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/payment' element={<Payment/>}/>
          </Routes>
          <Footer/>
        </div>
      </div>
    </Router>
  );
}

export default App;