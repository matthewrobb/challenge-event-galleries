import React, { Children, cloneElement } from 'react';

export default function PropsProvider({ children, ...props }) {
  return Children.count(children) !== 1 ? null : (
    cloneElement(Children.only(children), { ...props })
  );
}
