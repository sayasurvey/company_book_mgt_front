interface InputFieldProps {
  value: string;
  dataName: string;
};

export const InputField: React.FC<InputFieldProps> = ({ value, dataName } ) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <label htmlFor={dataName} className="block text-sm font-medium leading-6 text-gray-900">{value}</label>
      </div>
      <div className="mt-2">
        <input
          id={dataName}
          name={dataName}
          type={dataName}
          autoComplete="current-password"
          required
          className="block w-full rounded-md border-0 p-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
}
