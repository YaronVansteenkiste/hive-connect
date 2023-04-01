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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Profile from './pages/profile.js';
import SubmitPost from './pages/submit';

const queryClient = new QueryClient();

function App() {
  
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<div><Home /></div>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/users/:id" element={<Profile />} />
          <Route path="/submit" element={<SubmitPost />} />
          <Route path="/post/:id" element={<postpage />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;