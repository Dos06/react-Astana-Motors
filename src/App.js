import './App.css';
import './bootstrap/css/bootstrap.min.css';
import './css/style.css';
import Header from "./components/Header/Header";
import Items from "./components/Items/Items";
import Login from "./components/Login/Login";
import LoginHook from "./components/Login/LoginHook";

function App(props) {
  return (
    <div>
      <Header/>
      <div className="row col-10 offset-1">
        <div className="col-3">
            {/*<Login users={props.state.users}/>*/}
            <LoginHook users={props.state.users}/>
        </div>
        <div className="col-9">
            <Items items={props.state.items}/>
        </div>
      </div>
    </div>
  );
}

export default App;
