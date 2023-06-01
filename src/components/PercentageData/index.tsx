import React from 'react';

type PercentageProps = {
  data?: number;
  className?: string;
  tag?: keyof JSX.IntrinsicElements;
};

const PercentageData: React.FC<
  PercentageProps & React.HTMLAttributes<HTMLOrSVGElement>
> = ({ data, className, tag: Component = 'td' }) => {
  const colorText = (numb?: number) => {
    if (numb)
      return numb > 0
        ? 'text-green-500 ' + className
        : 'text-red-500 ' + className;
    return 'text-inherit ' + className;
  };
  return <Component className={colorText(data)}>{data + ' %'}</Component>;
};

export default PercentageData;
