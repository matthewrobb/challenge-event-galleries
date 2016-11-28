import React from 'react';
import PropsProvider from '../lib/props-provider';
import stores from '../stores';

export default(props) => <PropsProvider {...props} {...stores} />;
