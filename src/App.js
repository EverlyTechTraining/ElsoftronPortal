import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import EmployerDashboard from "./pages/EmployerDashboard";
import { auth } from "./firebaseConfig"; // Assuming you've set this up for Firebase authentication
import { useAuthState } from "react-firebase-hooks/auth"; // You might need to install react-firebase-hooks
import { Copyright } from "./components/Copyright";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

function App() {
  const [user, loading] = useAuthState(auth);
  const userRole = "employer"; // Placeholder: Determine the user's role from your app's logic or user data

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              !user ? <SignIn /> : <Navigate to={`/${userRole}-dashboard`} />
            }
          />
          <Route
            path="/signup"
            element={
              !user ? <SignUp /> : <Navigate to={`/${userRole}-dashboard`} />
            }
          />
          <Route
            path="/employee-dashboard"
            element={
              user && userRole === "employee" ? (
                <EmployeeDashboard />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/employer-dashboard"
            element={
              user && userRole === "employer" ? (
                <EmployerDashboard />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </>
  );
}

export default App;
