import React from 'react';

import PropsProvider from '../lib/props-provider';

export default function ViewAdmin({ children, ...props }) {
  return (
    <PropsProvider {...props} isAdmin={true}>
      {children}
    </PropsProvider>
  );
}
