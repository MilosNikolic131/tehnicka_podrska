import Navbar from './components/navbar';
import Pocetna from './components/Pocetna';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Osoblje from './components/Osoblje';
import RadniciDetails from './components/RadniciDetails';

function App() {
  const title = "Interni sajt za tehnicku podrsku";

  return (
    <Router>
      <div ClassName="App">
        <h1>{title}</h1>
        <Navbar></Navbar>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Pocetna></Pocetna>
            </Route>
            <Route exact path="/osoblje">
              <Osoblje></Osoblje>
            </Route>
            <Route path="/osoblje/:id">
              <RadniciDetails></RadniciDetails>
            </Route>
          </Switch>

        </div>
      </div>
    </Router>

  );
}

export default App;
