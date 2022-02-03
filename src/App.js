import Navbar from './components/navbar';
import Pocetna from './components/Pocetna';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Osoblje from './components/Osoblje';
import RadniciDetails from './components/RadniciDetails';
import Zalbe from './components/zalbe';
import Footer from './components/footer';

function App() { 
  const title = "Interni sajt za tehnicku podrsku";
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
  return (
    <Router>
      <div ClassName="App">
        <h1 id="naslov">{title}</h1>
        <Navbar></Navbar>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Pocetna></Pocetna>
            </Route>
            <Route exact path="/osoblje">
              <Osoblje></Osoblje>
            </Route>
            <Route exact path="/zalbe">
              <Zalbe></Zalbe>
            </Route>
            <Route path="/osoblje/:id">
              <RadniciDetails></RadniciDetails>
            </Route>
          </Switch>

        </div>
        <Footer></Footer>
      </div>
    </Router>

  );
}

export default App;
