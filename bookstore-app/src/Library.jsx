import Book from './Book';

function Library({books}) {
  return (
    <div>
      {books.map((book, index) => (
        <Book key={index} book={book} />
      ))}
    </div>
  );
}

export default Library;