import "./form-input.styles.scss";

const FormInput = ({ label, inputOptions }) => (
  <div className="group">
    <input className="form-input" {...inputOptions} />
    {label && (
      <label
        className={`${
          inputOptions.value.length ? "shrink" : ""
        } form-input-label`}
        htmlFor=""
      >
        {label}
      </label>
    )}
  </div>
);

export default FormInput;
