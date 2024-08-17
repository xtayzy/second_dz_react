import Book from "./Book.jsx";


export default function Books({books}){
    return (
        <div className="books">
            {books.map(e => <Book book={e} key={e.id}/>)}
        </div>
    )
}