import React from "react";


const CheckBoxLog = ({ checked, onChange }) => {
    const handleCheckBoxChange = () => {
      onChange(!checked);
    };
  
    return (
      <input
        type="checkbox"
        className="form-check-input mb-1"
        checked={checked}
        onChange={handleCheckBoxChange}
      />
    );
  };
  
  export default CheckBoxLog;
