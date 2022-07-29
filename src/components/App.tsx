import './App.scss';
import Auth from '../pages/Auth';
import Profile from '../pages/Profile';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Meeting from '../pages/Meeting/Meeting';
import Training from '../pages/Training';
import Articles from '../pages/Articles';
import Layout from './Layout';
import IndividualProject from '../pages/IndividualProject';
import PendingUsers from '../pages/Profile/PendingUsers';
import Welcome from '../pages/Welcome';
import MyPosts from '../pages/Profile/MyPosts';
import Feed from '../pages/Feed';
import MyProjects from '../pages/Profile/MyProjects';
import AddPost from '../pages/Profile/AddPost';
import Reflections from '../pages/Reflections';
import IndividualArticle from '../pages/IndividualArticle';
import {ChakraProvider} from '@chakra-ui/react';
import Projects from '../pages/Projects';
import Settings from '../pages/Settings';
import Notification from '../pages/Notification';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route path="register" element={<Auth/>}/>
            <Route path="login" element={<Auth/>}/>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Welcome/>}/>
              <Route path="profile" element={<Profile/>}>
                <Route index element={<MyPosts/>}/>
                <Route path="pending-users" element={<PendingUsers/>}/>
                <Route path="my-projects" element={<MyProjects/>}/>
                <Route path="add-posts" element={<AddPost/>}/>
              </Route>
              <Route path="feed" element={<Feed/>}/>
              <Route path="reflections" element={<Reflections/>}/>
              <Route path="mentorship" element={<Meeting/>}/>
              <Route path="training" element={<Training/>}/>
              <Route path="articles" element={<Articles/>}/>
              <Route path="articles/:articleId" element={<IndividualArticle/>}/>
              <Route path="projects" element={<Projects/>}/>
              <Route path="projects/:projectId" element={<IndividualProject/>}/>
              <Route path="settings" element={<Settings/>}/>
              <Route path="notification" element={<Notification/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}

export default App;
