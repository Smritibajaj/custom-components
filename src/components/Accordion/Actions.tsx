import AccordionActions from '@mui/material/AccordionActions';
import React, { memo } from 'react';

import type { ActionsProps } from './types';

const Actions = (props: ActionsProps) => <AccordionActions {...props} />;

export default memo(Actions);
