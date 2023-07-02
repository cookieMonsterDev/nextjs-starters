export interface InputProps {
  id?: string;
  name?: string;
  value?: any;
  type?: "text" | "password";
  label?: string;
  placeholder?: string;
  error?: boolean;
  errorText?: string;
  style?: React.CSSProperties;
  className?: string;
  ref?: React.MutableRefObject<HTMLInputElement | null>;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void | undefined;
}
