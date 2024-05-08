import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ChatPage from "./pages/ChatPage";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";

function App() {
  const { authUser } = useAuthContext();
  return (
    <div>
      {/* <Router> */}
      {/* <div className="p-4 h-screen items-center justify-center"> */}
      <Routes>
        <Route
          path="/"
          element={authUser ? <Navigate to="/home" /> : <LoginPage />}
        ></Route>
        <Route
          path="/register"
          element={authUser ? <Navigate to="/home" /> : <RegisterPage />}
        ></Route>
        <Route
          path="/home"
          element={authUser ? <ChatPage /> : <Navigate to="/" />}
        ></Route>
      </Routes>
      {/* </div> */}
      {/* </Router> */}
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
}

export default App;
