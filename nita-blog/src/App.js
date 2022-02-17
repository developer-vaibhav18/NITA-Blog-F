import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ResetPasswordEmail from "./pages/ResetPasswordEmail";
import Profile from "./pages/Profile";
import ViewBlog from "./pages/ViewBlog";
import NewBlog from "./pages/NewBlog";
import EmailVerification from "./pages/EmailVerification";
import ListOfUsers from "./pages/ListOfUsers";
import EditProfile from "./pages/EditProfile";
import Navbar from "./pages/Navbar";
import ResetPasswordPassword from "./pages/ResetPasswordPassword";
import BasicCard from "./components/Card";

function App() {
  return (
    <Router>
      <Navbar />
      <BasicCard />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/resetPassword" element={<ResetPasswordEmail />} />
        <Route path="/resetPassword/*" element={<ResetPasswordPassword />} />
        <Route path="/emailVerification" element={<EmailVerification />} />
        <Route path="/ListOfUsers" element={<ListOfUsers />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/ViewBlog" element={<ViewBlog />} />
        <Route path="/NewBlog" element={<NewBlog />} />
        <Route path="/EditProfile" element={<EditProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
