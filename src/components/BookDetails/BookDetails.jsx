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
                <div className="md:col-span-1 bg-slate-200 rounded-3xl text-center px-20 py-10">
                   <img className="w-80 " src={book.image} alt="" />
                </div>
                <div className="md:col-span-1 p-3">
                    <h2 className="text-3xl font-bold">{book.book_name}</h2>
                    <h4 className="font-semibold my-5">BY: {book.author}</h4>
                    <h5 className="border-y-2 py-3 mb-5">{book.category}</h5>
                    <p><span className="font-bold">Review:</span>  {book.review}</p>
                    <p><span className="font-bold">Tag:</span>  {book.tag}</p>

                </div>
            </div>
        </div>
    );
};

export default BookDetails;
