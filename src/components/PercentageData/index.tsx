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
  return (
    <Component data-testid="data" className={colorText(data)}>
      {data && data > 0 ? '+' : ''}
      {data + ' %'}
    </Component>
  );
};

export default PercentageData;
