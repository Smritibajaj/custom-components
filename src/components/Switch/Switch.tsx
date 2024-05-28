import MuiSwitch from '@mui/material/Switch';
import React, { memo } from 'react';

import type { SwitchProps } from './types';

const Switch = (props: SwitchProps) => <MuiSwitch {...props} />;

export default memo(Switch);
