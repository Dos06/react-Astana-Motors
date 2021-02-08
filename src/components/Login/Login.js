import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
            loggedIn: false
        };
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

        for (let i = 0; i < this.state.users.length; i++) {
            if (this.state.users[i].login === this.state.login && this.state.users[i].password === this.state.password) {
                found = true;
                foundUser = this.state.users[i];
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

                    <form className="col-12 form-group mt-5">
                        <label>REGISTRATION</label>
                        {/*<input type="text" id='login' className="form-control my-2" placeholder='Login' onChange={event => setUserLogin(event.target.value)}/>*/}
                        <input type="password" id='password' className="form-control my-2" placeholder='Password'/>
                        <button className="btn btn-dark btn-lg mt-2">SIGN UP</button>
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