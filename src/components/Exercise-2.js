import React, { useState } from "react";

function Two() {
  const [color, setColor] = useState('#42f598');
  const colors = [ "red", "green","blue"];
  const handleColor = (e) => {
    setColor(e.target.value);
  }

  return (
    <div style={{backgroundColor: color}} className="color">
      {colors.map((c)=>
        <button value={c} onClick={handleColor}>{c}</button>
      )}
    </div>
  );
}

export default Two;
