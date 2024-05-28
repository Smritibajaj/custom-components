import {
	Skeleton,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from '@mui/material';
import React from 'react';

const TableLoader = ({ size = 6 }) => {
	const rowArray = Array.from({ length: size }, (_, i) => i);
	return (
		<Table>
			<TableHead>
				<TableRow>
					{rowArray.map(idx => (
						<TableCell variant="head" key={idx}>
							<Skeleton variant="text" />
						</TableCell>
					))}
				</TableRow>
			</TableHead>
			<TableBody>
				{Array.from({ length: size }, (_, i) => i).map(rowId => (
					<TableRow key={rowId}>
						{rowArray.map(idx => (
							<TableCell variant="head" key={idx}>
								<Skeleton variant="text" />
							</TableCell>
						))}
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
};

export default React.memo(TableLoader);
