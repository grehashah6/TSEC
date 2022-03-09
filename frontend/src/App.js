import './App.css';
import { BrowserRouter as Router, Route, Routes, Outlet, Navigate } from 'react-router-dom';
// import { MuiThemeProvider } from '@material-ui/core/styles';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Details from './Pages/Details';
import Landing from './Pages/Landing';
import Dashboard from './Pages/Dashboard';
import CustomisedDetails from './Pages/CustomisedDetails';



function App() {
  const PrivateRoute = () => {
    const token = localStorage.getItem('token')
    return token ? <Outlet /> : <Navigate to="/login" />
  }


  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<SignUp />} />
          <Route path='/details' element={<PrivateRoute />} >
            <Route path='/details' element={<Details />} />
          </Route>
          <Route path='/customisedDetails' element={<PrivateRoute />} >
            <Route path='/customisedDetails' element={<CustomisedDetails />} />
          </Route>
          <Route path='/dashboard' element={<PrivateRoute />} >
            <Route path='/dashboard' element={<Dashboard />} />
          </Route>
          <Route exact path='/' element={<Landing />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
