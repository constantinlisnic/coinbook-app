import React from "react";

function Navbar(props) {
  return (
    <div>
      <button onClick={props.toggleTheme}>Change Theme</button>
    </div>
  );
}

export default Navbar;
