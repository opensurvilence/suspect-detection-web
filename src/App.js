import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/AddUser" element={<Home AddUser="True" />} />
        <Route path="/DeleteUser" element={<Home DeleteUser="True" />} />
        <Route path="/Users" element={<Home Users="True" />} />
        <Route path="/Suspects" element={<Home Suspects="True" />} />
      </Routes>
    </>
  );
}

export default App;

// <Router>
// <Routes>
// <Route exact path='/' element= {Home} />
//     {/* <Route path="/home"   element={Home} /> */}
//     {/* <Route path="/AddUser" element={<Home AddUser="True"/>} /> */}
//     {/* <Route path="/DeleteUser" element={<Home DeleteUser="True"/>} /> */}
//     {/* <Route path="/Users" element={<Home Users="True"/>} /> */}
//     {/* <Route path="/Suspects" element={<Home Suspects="True"/>} /> */}
// </Routes>

// </Router>
