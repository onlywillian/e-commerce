import {BrowserRouter, Route} from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Aside from './components/Aside';
import Itens from './components/Itens';
import ItenDetails from './components/ItenDetails'

function App() {
  return (
    <BrowserRouter>
      <div className="app" >
        <Header />
        <Search />
        <Route path="/" render={() => (
          <>
            <div className="user-content">
              <Aside />
              <Itens />
            </div>
          </>
        )}/>
        <Route path="/iten/:iten-id" exact component={ItenDetails}/>
      </div>
    </BrowserRouter>
  );
}

export default App;