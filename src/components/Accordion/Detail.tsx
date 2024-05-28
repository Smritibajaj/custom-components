import AccordionDetails from '@mui/material/AccordionDetails';
import React, { memo } from 'react';

import type { DetailsProps } from './types';

const Details = (props: DetailsProps) => <AccordionDetails {...props} />;

export default memo(Details);
