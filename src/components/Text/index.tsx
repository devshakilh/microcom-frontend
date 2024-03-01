import React from "react";

const sizes = {
  xs: "text-[11px] font-normal leading-[14px]",
  lg: "text-[15px] font-normal leading-5",
  s: "text-xs font-normal leading-[15px]",
  "2xl": "text-lg font-normal leading-6",
  xl: "text-base font-normal leading-[19px]",
  md: "text-sm font-normal leading-[17px]",
};

export type TextProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as,
  size = "2xl",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-900 font-helvetica ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
