import React, {useState} from 'react';

const User = (props) => {
    return (
        <div className="col-12 alert alert-secondary my-2">
            <h4>ID: {props.id}</h4>
            <p className='m-0'>Login: {props.login}</p>
            <p className='m-0'>Password: {props.password}</p>
        </div>
    );
}

function LoginHook(props) {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         login: '',
    //         password: '',
    //         loggedIn: false
    //     };
    //     this.eventOnSubmit = this.eventOnSubmit.bind(this);
    //     this.eventOnLogin = this.eventOnLogin.bind(this);
    //     this.eventOnPassword = this.eventOnPassword.bind(this);
    //     this.eventOnLogout = this.eventOnLogout.bind(this);
    // };
    //
    // eventOnLogin(event) {
    //     this.setState({login: event.target.value});
    // };
    //
    // eventOnPassword(event) {
    //     this.setState({password: event.target.value});
    // };
    //
    // eventOnLogout(event) {
    //     this.setState({loggedIn: false});
    // };
    //
    // eventOnSubmit(event) {
    //     let found = false;
    //     let foundUser = null;
    //
    //     for (let i = 0; i < this.state.users.length; i++) {
    //         if (this.state.users[i].login === this.state.login && this.state.users[i].password === this.state.password) {
    //             found = true;
    //             foundUser = this.state.users[i];
    //             this.setState({loggedIn: true});
    //             break;
    //         }
    //     }
    //
    //     if (found) {
    //         alert("WELCOME " + foundUser.login);
    //     }
    //     else {
    //         alert("FAILED");
    //     }
    //     event.preventDefault();
    // };

    const state = [
        {loggedIn: false}
    ];
    const [users, setUsers] = useState(
        [
            {id: 1, login: 'dos', password: 'qweqwe'},
            {id: 2, login: 'bos', password: 'qweqwe'},
            {id: 3, login: 'box', password: 'qweqwe'}
        ]
    )

    const [userId, setUserId] = useState(users[users.length - 1].id + 1)
    const [userLogin, setUserLogin] = useState('')
    const [userPassword, setUserPassword] = useState('')

    const addUser = event => {
        setUsers([
            {id: userId, login: userLogin, password: userPassword},
            ...users,
        ])
        setUserId(users[0].id + 2)
        document.getElementById('login').value = '';
        document.getElementById('password').value = '';
        event.preventDefault()
    }


    // if (!this.state.loggedIn) {
    if (false) {
        return (
            <div className="row mt-5">
                {/*<form className="col-12 mt-5" onSubmit={this.eventOnSubmit}>*/}
                {/*    <div className="form-group">*/}
                {/*        <label>LOGIN: {this.state.login}</label>*/}
                {/*        <input type="text" className='form-control' value={this.state.login}*/}
                {/*               onChange={this.eventOnLogin} required/>*/}
                {/*    </div>*/}
                {/*    <div className="form-group">*/}
                {/*        <label>PASSWORD</label>*/}
                {/*        <input type="password" className='form-control' value={this.state.password}*/}
                {/*               onChange={this.eventOnPassword} required/>*/}
                {/*    </div>*/}
                {/*    <button className="btn btn-dark btn-lg">SIGN IN</button>*/}
                {/*</form>*/}
            </div>
        );
    }
    else {
        return (
            <div className="row mt-5">
                <form className="col-12 form-group mt-5" onSubmit={addUser}>
                    <label>REGISTRATION</label>
                    <input type="text" id='login' className="form-control my-2" placeholder='Login' onChange={event => setUserLogin(event.target.value)} required/>
                    <input type="password" id='password' className="form-control my-2" placeholder='Password' onChange={event => setUserPassword(event.target.value)} required/>
                    <button className="btn btn-dark btn-lg mt-2">SIGN UP</button>
                </form>

                {users.reverse().map(u => <User id={u.id} login={u.login} password={u.password}/>)}
            </div>
        );
    }
}

export default LoginHook;