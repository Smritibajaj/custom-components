import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Typography } from '../../components';
import { colorPalette } from './colors';

const ColorComp = () => (
	<Box display="flex" flexWrap="wrap" gap={3}>
		{Object.entries(colorPalette).map(([colorName, colorValue]) => (
			<Stack
				alignItems="center"
				border="1px solid"
				direction="column"
				gap={3}
				key={colorValue}
				padding={3}
			>
				<Box
					sx={{
						height: '40px',
						width: '40px',
						borderRadius: '50%',
						background: colorValue,
					}}
				/>
				<Typography>{colorName}</Typography>
				<Typography>{colorValue}</Typography>
			</Stack>
		))}
	</Box>
);

export default {
	component: ColorComp,
	title: 'BrandColors/ColorPalette',
} as ComponentMeta<typeof ColorComp>;

export const ColorPalette: ComponentStory<typeof ColorComp> = () => (
	<ColorComp />
);
