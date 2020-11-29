import React from "react";

function Rating({ value, inactiveColor = "#ddd", activeColor = "#f00" }) {
  const stars = Array.from({ length: 5 }, () => "🟊");
  return (
    <div>
      {stars.map((s, index) => {
        let style = inactiveColor;
        if (index < value) {
          style = activeColor;
        }
        return (
          <span
            className={"star"}
            key={index}
            style={{ color: style, width: 20, height: 20, fontSize: 20 }}
          >
            {s}
          </span>
        );
      })}
    </div>
  );
}

export default Rating;
