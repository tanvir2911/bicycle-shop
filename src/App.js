
import './App.css';
import AuthProvider from './context/AuthProvider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Register from './components/Register/Register';
import NotFound from './components/NotFound/NotFound';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Payment from './components/Dashboard/Payment/Payment';
import MyOrders from './components/Dashboard/MyOrders/MyOrders';
import GiveReview from './components/Dashboard/GiveReview/GiveReview';
import ManageAllOrders from './components/Dashboard/ManageAllOrders/ManageAllOrders';
import AddAProduct from './components/Dashboard/AddAProduct/AddAProduct';
import MakeAdmin from './components/Dashboard/MakeAdmin/MakeAdmin';
import ManageProducts from './components/Dashboard/ManageProducts/ManageProducts';
import Explore from './components/Explore/Explore';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/explore">
              <Explore></Explore>
            </Route>
            <PrivateRoute path="/products/:productId">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/payment">
              <Payment></Payment>
            </PrivateRoute>
            <PrivateRoute path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/giveReview">
              <GiveReview></GiveReview>
            </PrivateRoute>
            <PrivateRoute path="/manageAllOrders">
              <ManageAllOrders></ManageAllOrders>
            </PrivateRoute>
            <PrivateRoute path="/addAProduct">
              <AddAProduct></AddAProduct>
            </PrivateRoute>
            <PrivateRoute path="/makeAdmin">
              <MakeAdmin></MakeAdmin>
            </PrivateRoute>
            <PrivateRoute path="/manageProducts">
              <ManageProducts></ManageProducts>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
