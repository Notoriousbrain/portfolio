const Button = ({ btnName, classStyles, handleClick }) => (
  <button
    type="button"
    className={`border border-my-black-1 hover:bg-[#00CCBB] text-sm minlg:text-lg py-2 px-6 minlg:px-8 font-poppins font-semibold text-my-dark dark:text-white ${classStyles}`}
    onClick={handleClick}
  >
    {btnName}
  </button>
);

export default Button;
