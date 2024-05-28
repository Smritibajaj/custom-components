import type { ComponentMeta, ComponentStory } from '@storybook/react';

import Breadcrumbs from './Breadcrumbs';

export default {
	args: {
		breadcrumbs: [
			{ id: 1, label: 'Test-1' },
			{ id: 2, label: 'Test-2' },
			{ id: 3, label: 'Test-3' },
			{ id: 4, label: 'Test-4' },
		],
		activeBreadcrumb: { id: 5, label: 'Test-5' },
		variant: 'primary',
	},
	component: Breadcrumbs,
	title: 'Components/Breadcrumbs',
	argTypes: {
		variant: { control: 'select', options: ['primary', 'secondary'] },
	},
} as ComponentMeta<typeof Breadcrumbs>;

const BreadcrumbsTemplate: ComponentStory<typeof Breadcrumbs> = args => (
	<Breadcrumbs {...args} />
);

export const Primary = BreadcrumbsTemplate.bind({});
// TODO: fix type error here
Primary.args = { onChange: (_, breadcrumb) => console.log(breadcrumb) };

export const Secondary = BreadcrumbsTemplate.bind({});
Secondary.args = {
	onChange: (_, breadcrumb) => console.log(breadcrumb),
	variant: 'secondary',
};
