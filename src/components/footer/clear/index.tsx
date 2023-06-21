import React from "react";
import "./style.scss";

interface ClearI {
  clear: () => void;
}

const Clear: React.FC<ClearI> = ({ clear }) => {
  return (
    <div className="clear" onClick={clear}>
      Clear Completed
    </div>
  );
};

export default Clear;
