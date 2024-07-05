import { MdOutlineStarBorder } from "react-icons/md";
import { Link } from "react-router-dom";

const Book = ({book}) => {
    const {book_id, image, book_name, author, review, totalpages, rating, category, tags, publisher, year_of_publishing} = book;
    return (
        <Link to={`/book/${book_id}`}>
             <div className="card bg-base-100 shadow-xl p-5">
                <figure className="bg-slate-200 py-6">
                    <img
                    src={image}
                    alt="Book" />
                </figure>
                <div className="card-actions mt-5">
                    <p className="">
                        {
                            tags.map((tag, idx) => <span key={idx}><a className="ml-2 px-2 py-1 bg-slate-50 rounded-2xl text-lime-400 font-sans text-sm" href="">{tag}</a></span>)
                        }
                    </p>
                </div>
                <div className=" border-b-2 border-dotted py-5">
                    <h2 className="card-title">{book_name}</h2>
                    <p className="font-sans mt-3 text-sm font-semibold">BY:  {author}</p>
                </div>
                <div className="flex justify-between my-4">
                    <div><p>{category}</p></div>
                    <div className="">
                    <h2 className="flex justify-center gap-2">{rating}<MdOutlineStarBorder className="text-2xl" /></h2>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;