import { useAppContext } from "../context/appContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user } = useAppContext();
  console.log("User found!");
  if (!user) {
    console.log("No user found!");
    return <Navigate to="/landing" />;
  }
  return children;
};

export default ProtectedRoute;
