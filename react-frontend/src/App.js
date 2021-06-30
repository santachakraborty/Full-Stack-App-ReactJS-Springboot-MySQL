import logo from './logo.svg';
import './App.css';
import ListOfBooks from './components/ListOfBooks';
import Header from './components/Header';
import Footer from './components/Footer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AddBook from './components/AddBook';
import UpdateBook from './components/UpdateBook';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login'
import Welcome from './components/Welcome'
import Error from './components/Error'
import Logout from './components/Logout'
// import AuthenticationService from './components/AuthenticationService';
import AuthenticatedRoute from './components/AuthenticatedRoute';


function App() {
  return (
    <div>
      
       <Router>
          <Header />
            <div className="container">
                  
                <Switch>
                    <Route path = "/" exact component = {Login}></Route>
                    <Route path = "/login" component = {Login}></Route>
                    <AuthenticatedRoute path = "/welcome" component = {Welcome} />
                    <AuthenticatedRoute path = "/books" component = {ListOfBooks} />
                    <AuthenticatedRoute path = "/add-book" component = {AddBook} />
                    <AuthenticatedRoute path = "/update-book/:id" component = {UpdateBook} /> 
                    <AuthenticatedRoute path = "/logout" component = {Logout} />
                    <Route component = {Error}></Route>
                 </Switch>
         
            </div>
            <Footer />
        </Router>

    </div>
  );
}

export default App;
