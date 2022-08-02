import React from "react";

const Welcome = () => {
  return (
    <section>
      <div className="wrapp-content">
        <div className="title">
          <h3>Welcome</h3>
          <h2>
            Millions of movies, TV shows and people to discover. Explore now.
          </h2>
        </div>
        <div className="search">
          <form>
            <input placeholder="Search for a movie, tv show, person......"></input>
            <button type="submit">Search</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
