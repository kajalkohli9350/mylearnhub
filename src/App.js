
import './App.css';
import{BrowserRouter,Routes,Route} from'react-router-dom';
import Home from "./pages/home/Home";
import Login from "./pages/auth/login/Login";
import Contact from "./pages/auth/signup/Signup";
import Signup from './pages/contact/Contact';
import Courses from './pages/courses/Courses';
import Pricing from './pages/pricing/Pricing';
import About from './pages/about/About';
import Navbar from './components/home/Navbar';
function App() {
  return (
    <>
   <BrowserRouter>
   <Navbar/>
   <Routes>
     <Route path="/" element={<Home />}/>
     <Route path="about" element={<About/>}/>
     <Route path="login" element={<Login/>}/>
     <Route path="signup" element={<Signup/>}/>
     <Route path="contact" element={<Contact/>}/>
     <Route path="courses" element={<Courses/>}/>
     <Route path="pricing" element={<Pricing/>}/>
     <Route path="*" element={<h1>page not found!</h1>}/>
   </Routes>
   </BrowserRouter>
    </>
      
  );
}

export default App;
