import React, {useState} from 'react';
import User from './User/User';

function LoginHook(props) {

    const [users, setUsers] = useState(
        props.users
    )

    const [userId, setUserId] = useState(4)
    const [userLogin, setUserLogin] = useState('')
    const [userPassword, setUserPassword] = useState('')

    const [loggedIn, setLoggedIn] = useState(false)
    const [authLogin, setAuthLogin] = useState('')
    const [authPassword, setAuthPassword] = useState('')
    function logOut(event) {
        setLoggedIn(false)
    }
    function authorize(event) {
        let found = 0
        let foundUser = null

        for (let i = 0; i < users.length; i++) {
            if (users[i].login === authLogin && users[i].password === authPassword) {
                found = true
                foundUser = users[i]
                setLoggedIn(true)
                break
            }
        }

        if (found) {
            setAuthLogin('')
            setAuthPassword('')
            alert('WELCOME ' + foundUser.login)
        }
        else alert('NOT FOUND')
        event.preventDefault()
    }

    const addUser = event => {
        setUsers([
            ...users,
            {id: userId, login: userLogin, password: userPassword},
        ])
        setUserId(users[users.length - 1].id + 2)
        setUserLogin('')
        setUserPassword('')
        event.preventDefault()
    }


    if (!loggedIn) {
        return (
            <div className="row mt-5">
                <form className="col-sm-6 mt-5" onSubmit={authorize}>
                    <label>LOGIN</label>
                    <input type="text" className='form-control my-2' placeholder='Login' value={authLogin} onChange={event => setAuthLogin(event.target.value)} required/>
                    <input type="password" className='form-control my-2' placeholder='Password' value={authPassword} onChange={event => setAuthPassword(event.target.value)} required/>
                    <button className="btn btn-dark btn-lg mt-2">SIGN IN</button>
                </form>

                {/*<RegistrationForm/>*/}
                <form className="col-sm-6 form-group mt-5" onSubmit={addUser}>
                    <label>REGISTRATION</label>
                    <input type="text" id='login' className="form-control my-2" placeholder='Login' value={userLogin} onChange={event => setUserLogin(event.target.value)} required/>
                    <input type="password" id='password' className="form-control my-2" placeholder='Password' value={userPassword} onChange={event => setUserPassword(event.target.value)} required/>
                    <button className="btn btn-dark btn-lg mt-2">SIGN UP</button>
                </form>

                <div className="row col-12">
                    {users.reverse().map(u => <User id={u.id} login={u.login} password={u.password}/>)}
                </div>
            </div>
        );
    }
    else {
        return (
            <div className='row mt-5'>
                <div className='col-6 mt-5'>
                    <button type='button' className='btn btn-danger btn-lg' onClick={logOut}>LOG OUT</button>
                </div>

                {/*<RegistrationForm/>*/}
                <form className="col-sm-6 form-group mt-5" onSubmit={addUser}>
                    <label>REGISTRATION</label>
                    <input type="text" id='login' className="form-control my-2" placeholder='Login' value={userLogin} onChange={event => setUserLogin(event.target.value)} required/>
                    <input type="password" id='password' className="form-control my-2" placeholder='Password' value={userPassword} onChange={event => setUserPassword(event.target.value)} required/>
                    <button className="btn btn-dark btn-lg mt-2">SIGN UP</button>
                </form>

                <div className="row col-12">
                    {users.reverse().map(u => <User id={u.id} login={u.login} password={u.password}/>)}
                </div>
            </div>
        );
    }
}

export default LoginHook;