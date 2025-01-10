const Button = ({ text, width = '100%' }) => (
    <button
      className="inline-block p-6 text-gold bg-ash1 font-sans font-medium uppercase text-xs tracking-[5px] text-center hover:bg-white hover:text-black transition duration-200"
      style={{ width }}
    >
      {text}
    </button>
  );
  
export default Button