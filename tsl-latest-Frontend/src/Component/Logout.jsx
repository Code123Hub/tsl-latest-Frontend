import React from "react";
import toast from "react-hot-toast";

function Logout({ onLogout }) {
  const handleLogout = () => {
    try {
      // Call the provided logout handler
      onLogout();

      // Show success notification
      toast.success("Logged out successfully");
    } catch (error) {
      toast.error("Error: " + error);
    }
  };

  return (
    <div className="text-center">
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;
