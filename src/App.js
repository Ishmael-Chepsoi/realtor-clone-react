import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Offers from "./pages/Offers";
import Signin from "./pages/Signin.jsx";
import Signup from "./pages/Signup";
import Forgotpassword from "./pages/Forgotpassword";
import Header from "./components/Header";
function App() {
  return (
   <Router>
    <Header/>
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/profile" element={<Profile />} />
     <Route path="/Offers" element={<Offers />} />
     <Route path="/sign-in" element={<Signin />} />
     <Route path="/sign-up" element={<Signup />} />
     <Route path="/Forgot-password" element={<Forgotpassword />} />
    </Routes>
   </Router>
  );
}

export default App;
