import React from "react";

const Emoji=({emoji , title , desc})=> {
    return(
        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              {emoji}
            </span>
            <span>{title}</span>
          </dt>
          <dd>
            {desc}
          </dd>
        </div>
    )
}

export default Emoji;