import PropTypes from "prop-types";

export const SelectInput = ({ name, defaultVal, options, onChange }) => {
  return (
    <fieldset className="w-full group rounded border border-solid border-neutral-500 px-3 py-3 focus-within:border-twitter-default relative">
      <legend className="text-xs text-neutral-500 group-focus-within:text-twitter-default">
        <div className="px-2">{name}</div>
      </legend>
      <select
        onChange={onChange}
        defaultValue={defaultVal}
        className="w-full pb-1 bg-transparent text-neutral-500 placeholder:text-neutral-500 focus:outline-none"
      >
        {options.map((option, index) => (
          <option
            key={index}
            className="bg-black text-neutral-50"
            value={option.value}
          >
            {option.value}
          </option>
        ))}
      </select>
    </fieldset>
  );
};

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  defaultVal: PropTypes.any.isRequired,
  options: PropTypes.array,
  onChange: PropTypes.func,
};
