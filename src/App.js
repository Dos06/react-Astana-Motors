import './App.css';
import './bootstrap/css/bootstrap.min.css';
import './css/style.css';
import Header from "./components/Header/Header";
import Items from "./components/Items/Items";
import Login from "./components/Login/Login";

function App() {
  return (
    <div>
      <Header/>
      <div className="row col-10 offset-1">
        <div className="col-3">
            <Login/>
        </div>
        <div className="col-9">
            <Items/>
        </div>
      </div>
    </div>
  );
}

export default App;
