import Chip, { type ChipProps } from '@mui/material/Chip';
import React, { memo } from 'react';

const BaseChip = (props: ChipProps) => <Chip {...props} />;

export default memo(BaseChip);
