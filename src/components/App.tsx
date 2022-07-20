import "./App.scss";
import Auth from "../pages/Auth";
import Profile from "./Profile";

import {Routes, BrowserRouter, Route} from "react-router-dom";
import Feed from "./Feed";
import Mentorship from "./Mentorship/Mentorship";
import Training from "./Training/Training";
import IndividualProject from "./IndividualProject";
import AdminPage from "./AdminPage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/register" element={<Auth />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="profile" element={<Profile />} />
          <Route path="feed" element={<Feed />} />
          <Route path="mentorship" element={<Mentorship />} />
          <Route path="training" element={<Training />} />
          <Route path="profile/:projectId" element={<IndividualProject />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
