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
import UserAuth from './auth/UserAuth';
import UserProvider from './context/UserProvider';
import UserProfile from './components/user/UserProfile';
import ManageCodes from './components/user/ManageCodes';

function App() {
  return (
    <div>
      <BrowserRouter>
      <UserProvider>
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
          <Route path="user" element={ <UserAuth> <User /> </UserAuth> }>
            <Route path="codegenerator" element={<CodeGenerator />} />
            <Route path="generatedCodes" element={<ManageCodes />} />
            <Route path="userprofile" element={<UserProfile />} />
          </Route>
        </Routes>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
