import React from "react";
import Emoji from "./Emoji";
import emojipedia from "../emojipedia";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map((emoji)=>(
          <Emoji 
            key={emoji.id}
            emoji={emoji.emoji} 
            title={emoji.name} 
            desc={emoji.meaning}/>
        ))}
      </dl>
    </div>
  );
}

export default App;
