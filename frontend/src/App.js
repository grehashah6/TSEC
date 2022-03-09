import './App.css';
import { BrowserRouter as Router, Route, Routes, Outlet, Navigate } from 'react-router-dom';
// import { MuiThemeProvider } from '@material-ui/core/styles';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Details from './Pages/Details';
import Landing from './Pages/Landing';
import Profile from './Pages/Profile';
import ProjectForm from './Pages/ProjectForm';


function App() {
  const PrivateRoute = () => {
    const token = localStorage.getItem('token')
    return token ? <Outlet /> : <Navigate to="/login" />
  }

  // const theme = createTheme({
  //   palette: {
  //     secondary: {
  //       main: '#E33E7F'
  //     }
  //   }
  // });

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<SignUp />} />
          <Route exact path='/details' element={<Details />} />
          <Route exact path='/' element={<Landing />} />
          <Route exact path='/profile' element={<Profile />} />
          <Route exact path='/projectform' element={<ProjectForm />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
