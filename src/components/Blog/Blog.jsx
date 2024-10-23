import PropTypes from "prop-types";

const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    const {title, cover, img, author, posted_date, reading_time, img_bookmark, hashtags} = blog;
    return (
        <div className='mb-16 bg-slate-50 p-5'>
            <img src={cover} alt="" />
            <div className='flex justify-between m-4'>
                <div className='flex gap-3'>
                    <img className='w-12' src={img} alt="" />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p> {posted_date} </p>
                    </div>
                </div>
                <div className='flex'>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleAddToBookmark(blog)}><img src={img_bookmark} alt="" /></button>
                    
                </div>
            </div>
            <h2 className='text-2xl font-bold'>{title}</h2>
            <p className="mt-4">
                {
                   hashtags.map((hash, idx) => <span key={idx}> <a href="">{hash}</a></span>) 
                }
            </p>
            <button 
            onClick={()=>handleMarkAsRead(reading_time)}
            className="font-bold text-orange-600">Mark as read</button>
        </div>
    );
};

Blog.propTypes ={
    blog:PropTypes.object.isRequired,
    handleAddToBookmark:PropTypes.func,
    handleMarkAsRead :PropTypes.func
}

export default Blog;