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
import {Test} from '../pages/Test/Test';
import UserList from '../pages/UserList';
import React, {useState} from 'react';
export const UserContext = React.createContext(null);
function App() {
  const user = useState(null);
  return (
    <UserContext.Provider value={user}>
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
                  <Route path="settings" element={<Settings/>}/>
                </Route>
                <Route path="feed" element={<Feed/>}/>
                <Route path="reflections" element={<Reflections/>}/>
                <Route path="mentorship" element={<Meeting/>}/>
                <Route path="training" element={<Training/>}/>
                <Route path="articles" element={<Articles/>}/>
                <Route path="articles/:articleId"
                       element={<IndividualArticle/>}/>
                <Route path="projects" element={<Projects/>}/>
                <Route path="projects/:projectId"
                       element={<IndividualProject/>}/>
                <Route path="notification" element={<Notification/>}/>
                <Route path="test/:articleId" element={<Test/>}/>
                <Route path="users" element={<UserList/>}/>
              </Route>
            </Routes>
          </BrowserRouter>
        </ChakraProvider>
      </div>
    </UserContext.Provider>

  );
}

export default App;
