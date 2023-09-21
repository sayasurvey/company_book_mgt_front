interface InputFieldProps {
  value: string;
  dataName: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
};

export const InputField: React.FC<InputFieldProps> = ({ value, dataName, onChange } ) => {
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
          onChange={onChange}
          autoComplete="current-password"
          required
          className="block w-full rounded-md border-0 p-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
}
