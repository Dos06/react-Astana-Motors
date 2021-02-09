import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.card + ' col-md-6 mt-4'}>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={props.src} className={s.img} alt='post'/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.content}</p>
                        <p className="card-text"><small className="text-muted">{props.date}</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;