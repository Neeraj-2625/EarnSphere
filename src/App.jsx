import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Blog from './pages/Blog';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Payment from './pages/Payment';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile'
import { useState, useEffect } from 'react';

function App() {
 
  const [user,setUser] = useState(JSON.parse(localStorage.getItem("user")));
  
  useEffect(()=>{
    
  },[]);

  return (
    <Router>
      <div className="pt-20 bg-[#F4CCE9]"> {/* Added padding to prevent navbar overlap */}
        <Navbar user = {user} setUser={setUser} />
        <div className="container mx-auto px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/blog" element={<Blog />} />
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/payment' element={<Payment/>}/>
            <Route path='/login' element={<Login use = {user} setUse = {setUser}/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/profile' element={<Profile/>}/>
          </Routes>
          <Footer/>
        </div>
      </div>
    </Router>
  );
}

export default App;