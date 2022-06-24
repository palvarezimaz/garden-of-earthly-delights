function Home({ name }) {
  return (
    <div className="Home">
      <h1>Welcome {name} to The Garden of earhtly delights App</h1>

      <img
        // src="https://upload.wikimedia.org/wikipedia/commons/9/96/The_Garden_of_earthly_delights.jpg"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/The_Garden_of_earthly_delights.jpg/800px-The_Garden_of_earthly_delights.jpg?20200528082018"
        alt="The Garden of earthly delights"
      />
    </div>
  );
}

export default Home;
