interface DefaultButtonProps {
  value: string;
  type: "submit" | "button" | "reset";
  blueDensity?: number;
};

const DefaultButton: React.FC<DefaultButtonProps> = ({ value, type, blueDensity = 600}) => {
  const hoverBlueDensity = blueDensity - 100
  return (
    <button
      type={type}
      className={`flex w-full justify-center rounded-md bg-indigo-${blueDensity} px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-${hoverBlueDensity} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-bg-indigo-${blueDensity}`}
    >
      {value}
    </button>
  );
}

export default DefaultButton;