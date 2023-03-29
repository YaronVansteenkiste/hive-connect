import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Form, Button } from 'react-bootstrap';

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

import 'animate.css/animate.min.css';
import Profile from './pages/profile.js';



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
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;