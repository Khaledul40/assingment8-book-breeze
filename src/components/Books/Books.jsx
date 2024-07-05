import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {

    const [books, setBooks] = useState([]);

    useEffect( () =>{
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data));
    }, [])

    return (
        <div className="my-12">
            <h2 className="text-center text-4xl font-bold">Books: {books.length}</h2>

            <div className="grid grid-cols-3 gap-5">
                {
                    books.map(book => <Book key={book.book_id} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;