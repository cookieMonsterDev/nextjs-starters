import { InputProps } from "./Input.types";
import cn from "classnames";

export const InputComponent: React.FC<InputProps> = ({
  id,
  name,
  value,
  type,
  placeholder,
  error = false,
  errorText,
  style,
  className,
  ref,
  label,
  onChange,
}) => {
  
  const labelCn = cn({
    "block mb-2 text-sm font-medium text-blue-500": !error,
    "block mb-2 text-sm font-medium text-red-700": error,
  });

  const InputCn = cn(
    {
      "bg-zinc-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500":
        !error,
    },
    {
      "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:outline-none focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500":
        error,
    }
  );

  return (
    <div style={style} className={className}>
      <label htmlFor={id} className={labelCn}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        ref={ref}
        value={value}
        onChange={onChange}
        className={InputCn}
        placeholder={placeholder}
      />
      {error && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
          {errorText}
        </p>
      )}
    </div>
  );
};
