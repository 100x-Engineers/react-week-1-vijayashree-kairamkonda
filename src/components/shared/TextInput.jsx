import PropTypes from "prop-types";

export const TextInput = ({
  name = "",
  onChange = () => {},
  value,
  placeholder = "",
  readOnly = false,
  base = "normal",
  textArea = false,
}) => {
  const styles = {
    normal:
      "w-full group rounded border border-solid border-neutral-500 px-3 py-3 focus-within:border-twitter-default",
    borderNone:
      "w-full group rounded px-3 py-3 focus-within:border-twitter-default",
  };
  const classes = `${styles[base]}`;

  return (
    <fieldset className={classes}>
      {name && (
        <legend className="text-xs text-neutral-500 group-focus-within:text-twitter-default">
          <div className="px-2">{name}</div>
        </legend>
      )}
      {textArea ? (
        <textarea
          value={value}
          onChange={onChange}
          readOnly={readOnly}
          type="text"
          placeholder={placeholder}
          className="w-full pb-1 bg-transparent text-neutral-50 placeholder:text-neutral-500 focus:outline-none"
        />
      ) : (
        <input
          value={value}
          onChange={onChange}
          readOnly={readOnly}
          type="text"
          placeholder={placeholder}
          className="w-full pb-1 bg-transparent text-neutral-50 placeholder:text-neutral-500 focus:outline-none"
        />
      )}
    </fieldset>
  );
};

TextInput.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  readOnly: PropTypes.bool,
  base: PropTypes.any,
  textArea: PropTypes.bool,
};
