import React from "react";

const shapes = {
  round: "rounded-[24px]",
} as const;
const variants = {
  outline: {
    blue_gray_300: "border-blue_gray-300 border border-solid text-blue_gray-600",
    gray_100_02: "border-gray-100_02 border border-solid text-gray-900",
  },
  fill: {
    white_A700: "bg-white-A700 text-gray-900_7f",
  },
} as const;
const sizes = {
  sm: "h-12 pl-[25px] pr-[35px] text-lg",
  md: "h-12 pl-[18px] pr-[35px] text-sm",
  xs: "h-[34px] pl-4 pr-[35px] text-[15px]",
} as const;

type InputProps = Omit<
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "size" | "prefix" | "type" | "onChange"
> &
  Partial<{
    className: string;
    name: string;
    placeholder: string;
    type: string;
    label: string;
    prefix: React.ReactNode;
    suffix: React.ReactNode;
    onChange: Function;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
  }>;
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "round",
      variant = "outline",
      size = "sm",
      color = "blue_gray_300",
      ...restProps
    },
    ref,
  ) => {
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${className} flex items-center justify-center ${shapes[shape] || ""} ${variants[variant]?.[color as keyof (typeof variants)[typeof variant]] || variants[variant] || ""} ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input ref={ref} type={type} name={name} onChange={handleChange} placeholder={placeholder} {...restProps} />
          {!!suffix && suffix}
        </div>
      </>
    );
  },
);

export { Input };
