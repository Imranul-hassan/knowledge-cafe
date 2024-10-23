import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks, readingTime }) => {
    return (
        <div className="w-1/3 ml-4 border-2 mt-4">
            <div className="bg-slate-300 p-8">
                <h3 className="text-2xl font-bold">Reading Time : {readingTime}</h3>
            </div>
            <div className="mt-4">
            <h2 className="text-xl text-center font-bold">Bookmarks Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
            </div>
        </div>
    );
};

Bookmarks.propTypes ={
    bookmarks :PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;