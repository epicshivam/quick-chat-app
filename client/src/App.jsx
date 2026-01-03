import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import {Toaster} from "react-hot-toast";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Loader from "./components/Loader.jsx";

function App() {
  return (
    <>
    <Toaster position="top-center" reverseOrder={false}/>
    <Loader/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
