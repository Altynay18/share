import './App.scss';
import Auth from '../pages/Auth';
import Profile from '../pages/Profile';

import {Routes, BrowserRouter, Route} from 'react-router-dom';
import Mentorship from '../pages/Mentorship/Mentorship';
import Training from '../pages/Training';
import Articles from '../pages/Articles';

import Layout from './Layout';
import IndividualProject from '../pages/IndividualProject';
import PendingUsers from '../pages/Profile/PendingUsers';
import Welcome from '../pages/Welcome';
import Posts from '../pages/Profile/Posts';
import Feed from '../pages/Feed';
import Projects from '../pages/Profile/Projects';
import AddPost from '../pages/Profile/AddPost';
import Reflections from '../pages/Reflections';
import Article from '../pages/Article';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Auth />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Welcome />} />
            <Route path="profile" element={<Profile />}>
              <Route index element={<Posts />} />
              <Route path="pending-users" element={<PendingUsers />} />
              <Route path="projects" element={<Projects />} />
              <Route path="addPosts" element={<AddPost />} />
            </Route>
            <Route path="feed" element={<Feed />} />
            <Route path="reflections" element={<Reflections />} />
            <Route path="mentorship" element={<Mentorship />} />
            <Route path="training" element={<Training />} />
            <Route path="articles" element={<Articles />} />
            <Route path="article/:articleId" element={<Article />} />
            <Route path="profile/:projectId" element={<IndividualProject />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
