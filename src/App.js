import './App.css';
import './bootstrap/css/bootstrap.min.css';
import './css/style.css';
import Header from "./components/Header/Header";
import Items from "./components/Items/Items";
import Login from "./components/Login/Login";
import {useState} from 'react';
import LoginHook from "./components/Login/LoginHook";

function App(props) {

    // const [users, setUsers] = useState(
    //     [
    //         {id: 1, login: 'dos', password: 'qweqwe'},
    //         {id: 2, login: 'bos', password: 'qweqwe'},
    //         {id: 3, login: 'box', password: 'qweqwe'}
    //     ]
    // )
    //
    //
    //
    // const [userLogin, setUserLogin] = useState('')
    // const [userPassword, setUserPassword] = useState('')
    //
    // const addUser = event => {
    //     if (event.key === 'Enter') {
    //         setUsers(
    //             ...users,
    //             {id: users[users.length - 1].id + 1, login: userLogin, password: userPassword}
    //         )
    //         setUserLogin('')
    //         setUserPassword('')
    //     }
    // }

  return (
    <div>
      <Header/>
      <div className="row col-10 offset-1">
        <div className="col-3">
            {/*<Login users={props.state.users}/>*/}
            <LoginHook users={props.state.users}/>
            {/*<LoginHook users={users}/>*/}
        </div>
        <div className="col-9">
            <Items items={props.state.items}/>
        </div>
      </div>
    </div>
  );
}

export default App;
