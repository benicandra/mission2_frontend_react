const InputPassword = ({ value, onChange, label = "Kata Sandi", name }) => {
  return (
    <div className="relative w-full sm:hidden">
      <label
        htmlFor="password"
        className="absolute left-3 top-[-9px] block text-sm font-medium text-[#3ECF4C] bg-white px-2"
      >
        {" "}
        {label}
      </label>
      <div>
        <input
          type="password"
          name={name}
          id={name}
          className="w-full text-base font-normal px-5 py-3 border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          placeholder="••••••••"
          required
          value={value}
          onChange={onChange}
        />

        <button
          type="button"
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none focus:text-gray-600"
        >
          <img src="eyeoff.png" alt="" />
        </button>
      </div>
    </div>
  );
};

export default InputPassword;
