import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Pagination from './Pagination';
export default {
	args: {
		count: 20,
		disabled: false,
		size: 'medium',
		color: 'P-50',
		siblingCount: 1,
		boundaryCount: 1,
	},
	component: Pagination,
	title: 'Components/Pagination',
} as unknown as ComponentMeta<typeof Pagination>;
const PaginationTemplate: ComponentStory<typeof Pagination> = args => (
	<Pagination {...args} />
);
export const Default = PaginationTemplate.bind({});
Default.args = { onChange: (_, id) => console.log(id) };
