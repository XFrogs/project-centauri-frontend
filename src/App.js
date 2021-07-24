//react router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "./mystyles.scss";

const App = props => {
    return (
        <Router>


            <Switch>
                <Route exact path="/">

                    <h1 className="title has-text-centered">Centauri</h1>


                </Route>
            </Switch>

        </Router>
    );
}

export default App;
