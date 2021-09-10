import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Aside from './components/Aside';

function App() {
  return (
    <div className="app" >
      <Header />
      <Search />
      <Aside />
    </div>
  );
}

export default App;