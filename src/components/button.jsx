function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-[#556279] hover:bg-[#455063] text-white font-medium py-2.5 rounded-md transition duration-300"
    >
      {children}
    </button>
  );
}

export default Button;
