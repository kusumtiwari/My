import Login from "./components/login/Login.jsx";
import Signup from "./components/login/Signup.jsx"
import { UserProvider } from "./context/Context";
import MyApplication from "./pages/MyApplication.jsx";
import { Route, Routes } from "react-router-dom";

export default function App() {
 
  return (
    <div className="">
       <UserProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/*" element={<MyApplication/>} />
      </Routes>
      </UserProvider>
    </div>
  );
}
