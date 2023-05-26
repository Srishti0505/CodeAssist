import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Main from './components/main';
import Login from './components/main/Login';
import Signup from './components/main/Signup';
import Home from './components/main/Home';
import User from './components/user';
import Contact from './components/main/contact1';
import Aboutus from './components/main/Aboutus';
import Feedback from './components/main/Feedback';
import CodeGenerator from './components/user/CodeGenerator';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/main/home" />} />
          <Route path="main" element={<Main />}>
            <Route path="home" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="contact" element={<Contact />} />
            <Route path="aboutus" element={<Aboutus />} />
            <Route path="Feedback" element={<Feedback />} />
          </Route>
          <Route path="user" element={<User />}>
            <Route path="codegenerator" element={<CodeGenerator />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
