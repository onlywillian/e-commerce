import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Search from './components/home/Search';
import Aside from './components/home/Aside';
import Itens from './components/home/Itens';
import ItenDetails from './components/details/ItenDetails';
import RegisterForm from './components/Sign/RegisterForm';

function App() {
  return (
    <Router>
      <div className="app">
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
        <Route path="/product/:id" exact component={ItenDetails} />
        <Route path="/registrar" exact component={RegisterForm} />
    </Router>
  );
}

export default App;