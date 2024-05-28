import MuiPagination from '@mui/material/Pagination';
import { memo } from 'react';
import type { PaginationProps } from './types';
const Pagination = ({ ...props }: PaginationProps) => (
	<MuiPagination {...props} />
);
export default memo(Pagination);