const User = (props) => {
    return (
        <div className="col-12 alert alert-secondary my-2">
            <h4>ID: {props.id}</h4>
            <p className='m-0'>Login: {props.login}</p>
            <p className='m-0'>Password: {props.password}</p>
        </div>
    );
}

export default User;