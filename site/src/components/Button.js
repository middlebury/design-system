import React from 'react';
import cx from 'classnames';

const Button = ({
  is = 'button',
  kind,
  size,
  outline,
  className,
  children,
  ...rest
}) => {
  const classes = cx(className, {
    button: true,
    [`button--${kind}`]: kind,
    [`button--${size}`]: size,
    'button--outline': outline
  });

  const props = {
    className: classes,
    ...rest
  };

  return React.createElement(is, props, children);
};

export default Button;
