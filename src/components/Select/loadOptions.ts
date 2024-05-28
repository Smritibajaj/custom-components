import type { GroupBase } from 'react-select';
import type { LoadOptions } from 'react-select-async-paginate';

import type { AdditionalAsyncProps, Option } from './types';

const sleep = () =>
	new Promise<void>(resolve => {
		setTimeout(() => resolve(), 5000);
	});

export const loadOptions: LoadOptions<
	Option,
	GroupBase<Option>,
	AdditionalAsyncProps
> = async (inputValue, loadedOptions, additional) => {
	await sleep();

	return {
		options: [
			{ label: 'Async Option 1', value: 'async option 1' },
			{ label: 'Async Option 2', value: 'async option 2' },
		],
		hasMore: false,
		additional: {
			limit: additional?.limit ?? 10,
			page: (additional?.page ?? 1) + 1,
		},
	};
};

export const loadOptionsFromAPI: LoadOptions<
	Option,
	GroupBase<Option>,
	AdditionalAsyncProps
> = async (search, loadedOptions, { limit, page, getOptionsURL }) => {
	// await sleep();

	const response = await fetch(`${getOptionsURL}`, {
		headers: {
			authorization: localStorage.getItem('token'),
		},
	});
	const responseJSON = await response.json();
	return {
		options: responseJSON?.list?.options,
		hasMore: false,
		additional: {
			limit: limit ?? 5,
			page: (page ?? 1) + 1,
		},
	};
};
