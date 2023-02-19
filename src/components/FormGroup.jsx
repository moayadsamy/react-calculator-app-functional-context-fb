import React from "react";

let FormGroup = React.forwardRef((props, ref) => {
  return (
    <div className="form-group">
      <label htmlFor="form-group-input" className="form-label">{props.label}</label>
      <input
        type={props.type}
        id="form-group-input"
        name=""
        ref={ref}
        className="form-input"
        placeholder={props.placeholder}
      />
    </div>
  );
});
export default FormGroup;