import '@mui/material/Pagination';
import type { ColorOverrides } from '../../types';
declare module '@mui/material/Pagination' {
	interface PaginationPropsColorOverrides extends ColorOverrides {}
}
