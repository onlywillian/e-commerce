import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Search from './components/home/Search';
import Aside from './components/home/Aside';
import Itens from './components/home/Itens';
import ItenDetails from './components/details/ItenDetails'

function App() {
  return (
    <Router>
      <div className="app" >
        <Header />
        <Route path="/" exact render={() => (
          <>
            <Search />
            <div className="user-content">
              <Aside />
              <Itens />
            </div>
          </>
        )}/>
      </div>
        <Route path="/:id" exact component={ItenDetails} />
    </Router>
  );
}

export default App;