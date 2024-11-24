import React, { useEffect } from 'react';
import './App.css';
import './index.css';
import LoginSignup from './Components/LoginSignup/LoginSignup';

function App() {
  useEffect(() => {
    fetch("http://localhost:8081/users")
      .then((response) => response.json())
      .then((data) => console.log("Fetched users:", data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div>
      <LoginSignup />
    </div>
  );
}

export default App;
