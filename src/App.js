import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import profile from "./pages/profile";
import Offers from "./pages/Offers";
import signin from "./pages/signin";
import signup from "./pages/signup";
import forgotpassword from "./pages/forgotpassword";
function App() {
  return (
   <Router>
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/profile" element={< profile />} />
     <Route path="/Offers" element={<Offers />} />
     <Route path="/sign-in" element={<signin />} />
     <Route path="/sign-up" element={<signup />} />
     <Route path="/forgot-password" element={<forgotpassword />} />
    </Routes>
   </Router>
  );
}

export default App;
