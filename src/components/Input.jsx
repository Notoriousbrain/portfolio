
const Input = ({ inputType, title, placeholder, handleClick }) => {
  return (
    <div className="mt-10 w-full">
      <p className="font-poppins dark:text-my-light text-my-black-1 font-semibold text-xl">
        {title}
      </p>

      {inputType === "number" ? (
        <div className="dark:bg-my-black-1 bg-light border dark:border-my-black-1 border-my-gray-2 rounded-lg w-full outline-none font-poppins dark:text-my-light text-my-gray-2 text-base mt-4 px-4 py-3 flexBetween flex-row">
          <input
            type="number"
            className="flex w-full dark:bg-my-black-1 bg-my-light outline-none"
            placeholder={placeholder}
            onChange={handleClick}
          />
        </div>
      ) : inputType === "textarea" ? (
        <textarea
          rows={10}
          className="dark:bg-my-black-1 bg-my-light border dark:border-my-black-1 border-my-gray-2 rounded-lg w-full outline-none font-poppins dark:text-my-light text-my-gray-2 text-base mt-4 px-4 py-3"
          placeholder={placeholder}
          onChange={handleClick}
        />
      ) : (
        <input
          className="dark:bg-my-black-1 bg-my-light border dark:border-my-black-1 border-my-gray-2 rounded-lg w-full outline-none font-poppins dark:text-my-light text-my-gray-2 text-base mt-4 px-4 py-3"
          placeholder={placeholder}
          onChange={handleClick}
        />
      )}
    </div>
  );
};

export default Input;
