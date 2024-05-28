import * as React from 'react';

function SortDecending({ dir, ...props }) {
	if (dir === 'desc') {
		return (
			<svg
				width="1em"
				height="1em"
				viewBox="0 0 32 32"
				fill="none"
				style={{
					position: 'relative',
				}}
				{...props}
			>
				<path
					d="M18 21l5 5 5-5M23 14v12M6 16h9M6 8h17M6 24h7"
					stroke="#807F81"
					strokeWidth={1.5}
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	} else if (dir === 'asc') {
		return (
			<svg
				width="1em"
				height="1em"
				viewBox="0 0 32 32"
				fill="none"
				style={{
					position: 'relative',
				}}
				{...props}
			>
				<path
					d="M18 11l5-5 5 4.998M23 18V6M6 16h9M6 8h7M6 24h17"
					stroke="#807F81"
					strokeWidth={1.5}
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
	} else
		return (
			<svg
				width="1em"
				height="1em"
				viewBox="0 0 32 32"
				fill="none"
				{...props}
			>
				<path
					d="M6 16h9M6 8h17M6 24h7"
					stroke="#807F81"
					strokeWidth={1.5}
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		);
}

const MemoSortDecending = React.memo(SortDecending);
export default MemoSortDecending;
