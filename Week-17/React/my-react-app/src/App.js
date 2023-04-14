import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './components/Logo';
import SearchBar from './components/SearchBar';
import Links from './components/Links';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Categories from './components/Categories';

function App() {
  return (
    <div class="parent">
      <div class="nav_bar">
        <Logo />
        <SearchBar />
        <Links />
      </div>
      <Categories />
      <br />
    


      {/* <Header />
      <Main />
      <Footer /> */}
    </div>
  );
}

export default App;
