import React, {useState} from 'react';
import Post from "./Post/Post";
import {NavLink} from "react-router-dom";

function Posts(props) {

    const [categories, setCategories] = useState(
        props.state.categories
    )
    const [posts, setPosts] = useState(
        props.state.posts
    )

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [link, setLink] = useState('')
    const [selectedCategory, setSelectedCategory] = useState(0)
    const [tempPosts, setTempPosts] = useState(posts)

    function selectCategory(id) {
        setSelectedCategory(id)
        setTempPosts(posts.filter(function(i) {
            return i.category === id
        }))
    }

    const addPost = event => {
        setPosts([
            {
                date: new Date().toUTCString(),
                category: 1,
                title: title,
                src: link,
                content: content
            },
            ...posts,
        ])
        setTitle('')
        setContent('')
        setLink('')
        event.preventDefault()
    }

    return (
        <div className='mt-5'>
            <form className='row col-12 justify-content-between' onSubmit={addPost}>
                <div className="form-group w-50">
                    <input type="text" className="form-control col-12" value={title} onChange={event => setTitle(event.target.value)} placeholder='Title'/>
                </div>

                <div className="form-group w-50">
                    <input type="text" className="form-control col-12" value={link} onChange={event => setLink(event.target.value)} placeholder='Image Link'/>
                </div>
                <textarea rows="3" className="form-control my-2" placeholder='Content' value={content} onChange={event => setContent(event.target.value)}/>
                <button className="btn btn-dark btn-lg">+ ADD POST</button>
            </form>


            <ul className="nav nav-tabs mt-5">
                {categories.map(c =>
                    <li className='nav-item'>
                        <NavLink to={'/news/' + c.id} className='nav-link' activeClassName='active' onClick={event => selectCategory(c.id)}>
                            {c.name}
                        </NavLink>
                    </li>
                )}
            </ul>
            <div className="row my-4">
                {tempPosts.reverse().map(p => <Post date={p.date} title={p.title} src={p.src} content={p.content}/>)}
            </div>
        </div>
    );
}

export default Posts;