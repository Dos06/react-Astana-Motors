const User = (props) => {
    return (
        <div className="col-sm-2">
            <div className="card">
                <div className="card-body">
                    <h4>ID: {props.id}</h4>
                    <p className='m-0'>Login: {props.login}</p>
                    <p className='m-0'>Password: {props.password}</p>
                </div>
            </div>
        </div>
    );
}

export default User;