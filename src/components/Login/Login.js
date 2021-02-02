import React from 'react';

const users = [
    {id: 1, login: 'dos', password: 'qweqwe'},
    {id: 2, login: 'bos', password: 'qweqwe'},
    {id: 3, login: 'box', password: 'qweqwe'}
]

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {login: '', password: '', loggedIn: false};
        this.eventOnSubmit = this.eventOnSubmit.bind(this);
        this.eventOnLogin = this.eventOnLogin.bind(this);
        this.eventOnPassword = this.eventOnPassword.bind(this);
        this.eventOnLogout = this.eventOnLogout.bind(this);
    };

    eventOnLogin(event) {
        this.setState({login: event.target.value});
    };

    eventOnPassword(event) {
        this.setState({password: event.target.value});
    };

    eventOnLogout(event) {
        this.setState({loggedIn: false});
    };

    eventOnSubmit(event) {
        let found = false;
        let foundUser = null;

        for (let i = 0; i < users.length; i++) {
            if (users[i].login === this.state.login && users[i].password === this.state.password) {
                found = true;
                foundUser = users[i];
                this.setState({loggedIn: true});
                break;
            }
        }

        if (found) {
            alert("WELCOME " + foundUser.login);
        }
        else {
            alert("FAILED");
        }
        event.preventDefault();
    };

    render() {
        if (!this.state.loggedIn) {
            return (
                <div className="row mt-5">
                    <form className="col-12 mt-5" onSubmit={this.eventOnSubmit}>
                        <div className="form-group">
                            <label>LOGIN: {this.state.login}</label>
                            <input type="text" className='form-control' value={this.state.login}
                                   onChange={this.eventOnLogin} required/>
                        </div>
                        <div className="form-group">
                            <label>PASSWORD</label>
                            <input type="password" className='form-control' value={this.state.password}
                                   onChange={this.eventOnPassword} required/>
                        </div>
                        <button className="btn btn-dark btn-lg">SIGN IN</button>
                    </form>
                </div>
            );
        }
        else {
            return (
                <div className="mt-5">
                    <button type='button' className='btn btn-danger btn-lg' onClick={this.eventOnLogout}>LOG OUT</button>
                </div>
            );
        }
    };
}

export default Login;