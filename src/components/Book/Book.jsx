import { MdOutlineStarBorder } from "react-icons/md";

const Book = ({book}) => {
    const {image, book_name, author, book_id, review, totalpages, rating, category, tags, publisher, year_of_publishing} = book;
    return (
        <div className="card bg-base-100 shadow-xl p-5">
            <figure className="bg-slate-200 py-6">
                <img
                src={image}
                alt="Book" />
            </figure>
            <div className="card-actions mt-5">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
            </div>
            <div className=" border-b-2 border-dotted py-5">
                <h2 className="card-title">{book_name}</h2>
                <p>BY:  {author}</p>
             </div>
             <div className="flex justify-between my-4">
                <div><p>{category}</p></div>
                <div className="">
                   <h2 className="flex justify-center gap-2">{rating}<MdOutlineStarBorder className="text-2xl" /></h2>
                </div>
             </div>
        </div>
    );
};

export default Book;