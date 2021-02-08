import React, {useState} from 'react';
import User from './User/User';

function LoginHook(props) {

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
            {id: userId, login: userLogin, password: userPassword},
            ...users,
        ])
        setUserId(users[0].id + 2)
        setUserLogin('')
        setUserPassword('')
        event.preventDefault()
    }


    if (!loggedIn) {
        return (
            <div className="row mt-5">
                <form className="col-12 mt-5" onSubmit={authorize}>
                    <div className="form-group">
                        <label>LOGIN: {authLogin}</label>
                        <input type="text" className='form-control' value={authLogin} onChange={event => setAuthLogin(event.target.value)} required/>
                    </div>
                    <div className="form-group">
                        <label>PASSWORD</label>
                        <input type="password" className='form-control' value={authPassword} onChange={event => setAuthPassword(event.target.value)} required/>
                    </div>
                    <button className="btn btn-dark btn-lg">SIGN IN</button>
                </form>

                {/*<RegistrationForm/>*/}
                <form className="col-12 form-group mt-5" onSubmit={addUser}>
                    <label>REGISTRATION</label>
                    <input type="text" id='login' className="form-control my-2" placeholder='Login' value={userLogin} onChange={event => setUserLogin(event.target.value)} required/>
                    <input type="password" id='password' className="form-control my-2" placeholder='Password' value={userPassword} onChange={event => setUserPassword(event.target.value)} required/>
                    <button className="btn btn-dark btn-lg mt-2">SIGN UP</button>

                    <br/><br/>
                    {users.reverse().map(u => <User id={u.id} login={u.login} password={u.password}/>)}
                </form>
            </div>
        );
    }
    else {
        return (
            <div className='row mt-5'>
                <div className='col-12'>
                    <button type='button' className='btn btn-danger btn-lg' onClick={logOut}>LOG OUT</button>
                </div>

                {/*<RegistrationForm/>*/}
                <form className="col-12 form-group mt-5" onSubmit={addUser}>
                    <label>REGISTRATION</label>
                    <input type="text" id='login' className="form-control my-2" placeholder='Login' value={userLogin} onChange={event => setUserLogin(event.target.value)} required/>
                    <input type="password" id='password' className="form-control my-2" placeholder='Password' value={userPassword} onChange={event => setUserPassword(event.target.value)} required/>
                    <button className="btn btn-dark btn-lg mt-2">SIGN UP</button>

                    <br/><br/>
                    {users.reverse().map(u => <User id={u.id} login={u.login} password={u.password}/>)}
                </form>
            </div>
        );
    }
}

export default LoginHook;