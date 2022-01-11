import './App.css';
import { NavbarComponent } from './components/Navbar/Navbar';
import { Home } from './views/Home/Home';

function App() {
  return (
    <div className='container-fluid'>
      <NavbarComponent></NavbarComponent>
      <Home></Home>
    </div>
  );
}

export default App;
