import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Register from './pages/register';
import Login from './pages/login'
import Home from './pages/home'

import { useContext } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


import postImageExample from './components/images/example1.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import LeftSidebar from './components/LeftSideBar.js';

import Profile from './pages/profile.js';
import SubmitPost from './pages/submit';



function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<div><Home /></div>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/users/:id" element={<Profile />} />
          <Route path = "/submit" element={<SubmitPost/>} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;