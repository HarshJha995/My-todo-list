import './App.css';
import classes from './App.css';
import Logo from './assets/todo-logo.png'
import Layout from './Components/Layout/Layout';

function App() {
  return (
    <div className="App">
      <header className={classes.Header}>
        <img src={Logo} className={classes.Logo} alt="Logo" />
        <span className={classes.Brand}>Any.Do</span>
      </header>
      <div>
        <Layout />
      </div>
    </div>

  );
}

export default App;
