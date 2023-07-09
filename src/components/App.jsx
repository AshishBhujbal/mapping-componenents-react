import React from "react";
import { Emogi } from "../components/emogee";
import emojipedia from "../emojipedia";

const comp = emojipedia.map((obj) => (
  <Emogi
    name={obj.name}
    id={obj.id}
    meaning={obj.meaning}
    emoji={obj.emoji}
    key={obj.id}
  />
));
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{comp}</dl>
    </div>
  );
}

export default App;
