import React from 'react'
import { Link } from 'react-router-dom'

// Import css
import { styles } from './PostDetail.css'

const PostDetail = ({ post }) => {
  return (
    <div>
        <img src={post.img} alt={post.title} />
        <h2>{post.title}</h2>
        <p>{post.createdBy}</p>
        <div>
            {
                <h3>{post.tags}</h3>
            }
        </div>
        <Link to={`/posts/${ post.id }`} className="btn btn-outline">Ler</Link>
    </div>
  )
}

export default PostDetail