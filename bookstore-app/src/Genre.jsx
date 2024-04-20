function GenreSelection({setGenre}) {
  return (
    <div>
      <button onClick={() => setGenre('fiction')}>Fiction</button>
      <button onClick={() => setGenre('non-fiction')}>Non-Fiction</button>
      <button onClick={() => setGenre('children')}>Children</button>
    </div>
  );
}

export default GenreSelection;