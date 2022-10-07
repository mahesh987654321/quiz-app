const Checkbox = ({ className, text, ...rest }) => {
  return (
    <div>
      <label className={className} for="option1">
        <input type="checkbox" {...rest} />A New Hope 1<span>{text}</span>
      </label>
    </div>
  );
};

export default Checkbox;
