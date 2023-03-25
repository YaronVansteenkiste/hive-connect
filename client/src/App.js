import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Register from './pages/register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={
          <>
            <Header />
            <div className='hivebody'>
              <div className='leftbar'>
                leftbar
              </div>
              <div className='postsection'>
                posts
              </div>
              <div className='rightbar'>
                rightbar
              </div>
            </div>
          </>
        } />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
