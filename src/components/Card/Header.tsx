import CardHeader from '@mui/material/CardHeader';
import React, { memo } from 'react';

import type { HeaderProps } from './types';

const Header = (props: HeaderProps) => <CardHeader {...props} />;

export default memo(Header);
