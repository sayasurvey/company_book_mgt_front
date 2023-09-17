interface DefaultButtonProps {
  value: string;
  type: "submit" | "button" | "reset";
};

export const DefaultButton: React.FC<DefaultButtonProps> = ({ value, type }) => {

  return (
    <button
      type={type}
      className={`flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-bg-indigo-600 mx-1`}
    >
      {value}
    </button>
  );
}