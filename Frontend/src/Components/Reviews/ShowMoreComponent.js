import React, { useState } from "react";

function ShowMoreComponent({ time, status = "delivered" }) {
  const [button, setButton] = useState("Show more");
  const [show, setShow] = useState(false);

  function switchControl() {
    if (button === "Show more") {
      setShow(true);
      setButton("Show less");
    } else {
      setShow(false);
      setButton("Show more");
    }
  }
  return (
    <div>
      {show ? (
        <div>
          <p>Delivary Time : {time}</p>
          <p>Status : {status}</p>
        </div>
      ) : null}
      <button onClick={() => switchControl()}>{button}</button>
    </div>
  );
}

export default ShowMoreComponent;

// hai how are you
