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
import Home from './components/routes/home/home';
import Marketplace from './components/routes/marketplace/marketplace';
import Profile from './components/routes/profile/profile';
import Editor from './components/routes/editor/editor';

const App = props => {
    return (
        <Router>
            <Navbar/>

            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/marketplace">
                    <Marketplace/>
                </Route>
                <Route exact path="/profile">
                    <Profile/>
                </Route>
                <Route exact path="/editor">
                    <Editor/>
                </Route>
            </Switch>

            <Footer/>

        </Router>
    );
}

export default App;
