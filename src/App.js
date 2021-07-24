//react router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//styles
import "./mystyles.scss";

//common components
import Navbar from './components/commons/navbar';
import Footer from './components/commons/footer';

//routes components
import Home from './components/routes/home';

const App = props => {
    return (
        <Router>
            <Navbar/>

            <Switch>
                <Route exact path="/">

                    <Home/>


                </Route>
            </Switch>

            <Footer/>

        </Router>
    );
}

export default App;
