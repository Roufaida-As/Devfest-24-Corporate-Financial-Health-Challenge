import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Goals from "./pages/Goals";
import './index.css';

// Import other components as needed

function App() {
  return (
    <Router>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Routes>
          
          <Route path="/" element={<Dashboard />} />
          <Route path="/Goals" element={<Goals />} />
          
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
