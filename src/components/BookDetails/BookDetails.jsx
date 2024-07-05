import { useLoaderData, useParams } from "react-router-dom";


const BookDetails = () => {
    const books = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const book = books.find(book => book.book_id == idInt);
    console.log(book);
    return (
        <div>
            
            <div className="grid gap-12 md:grid-cols-2 my-14">
                <div className="md:col-span-1 bg-slate-200 rounded-3xl px-20 py-14">
                   <img className="w-80 " src={book.image} alt="" />
                </div>
                <div className="md:col-span-1 p-3">
                    <h2 className="text-3xl font-bold">{book.book_name}</h2>
                    <h4 className="font-semibold my-5 font-sans">BY: {book.author}</h4>
                    <h5 className="border-y-2 py-3 mb-5 font-sans">{book.category}</h5>
                    <p className="font-sans"><span className="font-bold font-sans">Review:</span>  {book.review}</p>
                    <p className="py-6 border-b-2 font-sans">
                        <span className="font-bold mr-4">Tag</span><a className="mr-4 px-2 py-1 bg-slate-50 rounded-2xl text-lime-400 font-sans text-sm" href=""># {book.tags}</a>
                    </p>
                    <div className="flex gap-20 mt-3 font-sans text-sm">
                        <p>Number of Pages :</p><h4 className="font-bold text-base">{book.totalpages}</h4>
                    </div>
                    <div className="flex gap-32 mt-3 font-sans">
                        <p>Publisher :</p><h4 className="font-bold text-base">{book.publisher}</h4>
                    </div>
                    <div className="flex gap-16 mt-3 font-sans">
                        <p>Year of Publishing :</p><h4 className="font-bold text-base">{book.year_of_publishing}</h4>
                    </div>
                    <div className="flex gap-36 mt-3 font-sans">
                        <p>Rating :</p><h4 className="font-bold text-base">{book.rating}</h4>
                    </div>
                    <div className="mt-5">
                        <button className="border-2 px-5 py-2 rounded-xl mr-5 font-sans font-bold">Read</button>
                        <button className="bg-sky-300 border-2 px-5 py-2 rounded-xl mr-5 font-sans font-bold text-white">Wishlist</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BookDetails;
