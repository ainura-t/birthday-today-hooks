import React, { useState } from "react";
import data from "./data";
import "./styles.css";
import List from "./components/List";

function App() {
  const [people, setPeople] = useState(data);
  return (
    <div>
      <main className="container">
        <section>
          <h3>{people.length} birthday today</h3>
          <List people={people} />
          <button
            onClick={() => {
              setPeople([]);
            }}
          >
            Clear All
          </button>
        </section>
      </main>
    </div>
  );
}
export default App;
