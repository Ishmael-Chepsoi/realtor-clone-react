import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Offers from "./pages/Offers";
import Signin from "./pages/Signin.jsx";
import Signup from "./pages/Signup";
import Forgotpassword from "./pages/Forgotpassword";
import Header from "./components/Header";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from "./components/PrivateRoute";
import CreateListing from "./pages/CreateListing";
function App() {
  return (
    <>
   <Router>
    <Header/>
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/profile" element={<PrivateRoute/>} >
        <Route path="/profile" element={<Profile />} />
     </Route>
     
     <Route path="/Offers" element={<Offers />} />
     <Route path="/sign-in" element={<Signin />} />
     <Route path="/sign-up" element={<Signup />} />
     <Route path="/Forgot-password" element={<Forgotpassword />} />
     <Route path="/create-listing" element={<CreateListing />} />
    </Routes>
   </Router>
   <ToastContainer
      position="bottom-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
/>
   </>
  );
}

export default App;
