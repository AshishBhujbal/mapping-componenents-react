import React from "react";
function Emogi(props) {
  return (
    <div className="term" id={props.id}>
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.emoji}
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>{props.meaning}</dd>
    </div>
  );
}

export { Emogi };
