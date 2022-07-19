import "./App.css";
import Login from "./Login";
import Profile from "./Profile";

import { Routes, Route } from "react-router-dom";
import Feed from "./Feed";
import Mentorship from "./Mentorship/Mentorship";
import Training from "./Training/Training";
import IndividualProject from "./IndividualProject";
import Register from "./Register/Register";
import AdminPage from "./AdminPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Register />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="profile" element={<Profile />} />
        <Route path="feed" element={<Feed />} />
        <Route path="mentorship" element={<Mentorship />} />
        <Route path="training" element={<Training />} />
        <Route path="profile/:projectId" element={<IndividualProject />} />
      </Routes>
    </div>
  );
}

export default App;
