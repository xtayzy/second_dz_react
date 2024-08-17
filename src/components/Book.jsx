

export default function Book({book}) {
    return (
        <div className="book">
            <div><img src={book.img} alt=""/></div>
            <div>{book.name}</div>
            <div>{book.description}</div>
            <div>читать</div>
        </div>
    )
}