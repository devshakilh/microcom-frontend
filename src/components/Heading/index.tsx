import React from "react";

const sizes = {
  "3xl": "text-5xl font-bold leading-[56px]",
  "2xl": "text-[35px] font-extrabold leading-[43px]",
  xl: "text-2xl font-bold leading-[30px]",
  s: "text-[19px] font-extrabold leading-[23px]",
  md: "text-[22px] font-bold leading-[27px]",
  xs: "text-lg font-extrabold leading-[22px]",
  lg: "text-[23px] font-extrabold leading-7",
};

export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "3xl",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-900 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
