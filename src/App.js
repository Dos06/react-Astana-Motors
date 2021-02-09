import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import Header from "./components/Header/Header";
import Items from "./components/Items/Items";
import Login from "./components/Login/Login";
import LoginHook from "./components/Login/LoginHook";
import Posts from "./components/Posts/Posts";
import {BrowserRouter, Route} from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
      <Header/>
      <div className="row col-10 offset-1">
        <div className="col-sm-10 offset-sm-1">
            <Route path='/login' render={ () => <LoginHook users={props.state.users}/> } />
            <Route path='/news' render={
                () =>
                <div>
                    <h1 className='mt-5'>News</h1>
                    <LoginHook users={props.state.users}/>
                    <Posts state={props.state.PostsPage}/>
                </div>
            } />
            <Route path='/about' render={ () => <h1 className='mt-5'>About us</h1> } />
            <Route path='/services' render={ () => <h1 className='mt-5'>Services</h1> } />
            <Route path='/contact' render={ () => <h1 className='mt-5'>Contact</h1> } />
            <Route path='/' exact render={ () => <Items items={props.state.items}/> } />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
