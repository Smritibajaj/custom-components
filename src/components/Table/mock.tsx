import { Rows } from 'phosphor-react';

import { TPaginationProps } from './types';

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchData = async (pagination, sortOrder, search, filters) => {
	try {
		console.log(pagination, sortOrder, filters);
		await sleep(500);
		// const data = await fetch(
		// 	'https://staging-workflow-api.leena.ai/api/bot/5c25fe9530521e0027a14779/report/app/640eb6f51bfbcede577c4fb6/list?startDate=2023-03-07&endDate=2023-03-13&timezone=Asia%2FCalcutta&page=1&limit=5&status=completed',
		// 	{
		// 		headers: {
		// 			accept: 'application/json, text/plain, */*',
		// 			'accept-language': 'en-US,en;q=0.9',
		// 			authorization:
		// 				'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYwMDBmN2NjMGVmMTAwMTE1YzJkNWMiLCJqdGkiOiI2M2ZkOTM3N2ZlMjI1OTY0NjNmMjFhYmQiLCJ0aW1lIjoiMjAyMy0wMi0yOFQwNTozOTowMy4zNTFaIiwiaWQiOiI2MTYwMDBmN2NjMGVmMTAwMTE1YzJkNWMiLCJ0b2tlblR5cGUiOiJ1c2VyIiwicmVnaW9uIjoiYXAtc291dGgtMSIsImlhdCI6MTY3NzU2Mjc0MywiZXhwIjoxNjgxNDUwNzQzLCJpc3MiOiJhY2wifQ.CIXfKV5J2R3FCCowyG_3wge6S4goO6hf1TUxXCPV_ww',
		// 			'sec-ch-ua':
		// 				'"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
		// 			'sec-ch-ua-mobile': '?0',
		// 			'sec-ch-ua-platform': '"macOS"',
		// 			'sec-fetch-dest': 'empty',
		// 			'sec-fetch-mode': 'cors',
		// 			'sec-fetch-site': 'same-site',
		// 		},
		// 		referrer:
		// 			'https://staging-unified-workflows.leena.ai/bots/5c25fe9530521e0027a14779/workflows/reports/apps/640eb6f51bfbcede577c4fb6?status=completed',
		// 		referrerPolicy: 'unsafe-url',
		// 		body: null,
		// 		method: 'GET',
		// 		mode: 'cors',
		// 		credentials: 'include',
		// 	}
		// );

		// const dataJson = await data.json();

		return {
			result: [
				{
					_id: '640ed0c69f4da96fc05d45f9',
					appId: '640eb6f51bfbcede577c4fb6',
					botId: '5c25fe9530521e0027a14779',
					itemId: 'TSLM000003',
					__v: 0,
					createdAt: '2023-03-13T07:29:10.103Z',
					initiatedBy: 'snehal@leena.ai',
					initiatedByUserObj: {
						name: 'snehal',
						email: 'snehal@leena.ai',
						employeeId: '141102779',
						displayName: 'snehal',
					},
					participants: [
						'snehal@leena.ai',
						'min1322',
						'arpan@leena.ai',
						'',
					],
					status: 'completed',
					updatedAt: '2023-03-13T07:34:55.824Z',
					completedAt: '2023-03-13T07:34:55.824Z',
					timeTaken: 345,
					userObj: {
						name: 'snehal',
						email: 'snehal@leena.ai',
						employeeId: '141102779',
						department: 'Engineering',
						designation: 'Frontend',
						displayName: 'snehal',
					},
					lastStepsName: 'approval node',
					actionUser: {
						name: 'Minakshi',
						email: 'minakshi@leena.ai',
						employeeId: 'min1322',
						designation: 'Manager',
						displayName: 'Minakshi',
					},
					formFieldsResponse: {
						'640eb6f61bfbcede577c4fc5': {
							'640eb6fa1bfbcede577c4fca': 'vc',
							'640eb6fb1bfbcede577c4fcd': 'dfg',
						},
					},
					roles: [
						{
							id: '62539d437e59dd7c8a4c8098',
							name: 'Onboarding Admin',
						},
						{
							id: '641b013c9f4da96fc03558de',
							name: 'Onboarding Viewer',
						},
						{
							id: '62a711947db733390f9c9a79',
							name: 'Onboarding Agent',
						},
						{
							id: '62539d437e59dd7c8a4c8070',
							name: 'Helpdesk Admin',
						},
					],
				},
				{
					_id: '640ebb2c9f4da96fc0554d0a',
					appId: '640eb6f51bfbcede577c4fb6',
					botId: '5c25fe9530521e0027a14779',
					itemId: 'TSLM000002',
					__v: 0,
					createdAt: '2023-03-13T05:57:00.841Z',
					initiatedBy: 'arpan@leena.ai',
					initiatedByUserObj: {
						name: 'Louisa Cronauer',
						email: 'arpan@leena.ai',
						employeeId: '102',
						displayName: 'Louisa Cronauer',
					},
					participants: [
						'arpan@leena.ai',
						'shubham@leena.ai',
						'min1322',
						'',
					],
					status: 'completed',
					updatedAt: '2023-03-13T05:59:05.218Z',
					completedAt: '2023-03-13T05:59:05.218Z',
					timeTaken: 124,
					userObj: {
						name: 'Louisa Cronauer',
						email: 'arpan@leena.ai',
						employeeId: '102',
						department: 'Human Resources',
						designation: 'Manager, Human Resources',
						displayName: 'Louisa Cronauer',
					},
					lastStepsName: 'approval node',
					actionUser: {
						name: 'Minakshi',
						email: 'minakshi@leena.ai',
						employeeId: 'min1322',
						designation: 'Manager',
						displayName: 'Minakshi',
					},
					formFieldsResponse: {
						'640eb6f61bfbcede577c4fc5': {
							'640eb6fa1bfbcede577c4fca': 'dg',
							'640eb6fb1bfbcede577c4fcd': 'fgh',
						},
					},
					roles: [
						{
							id: '62539d437e59dd7c8a4c8070',
							name: 'Helpdesk Admin',
						},
						{
							id: '62a711947db733390f9c9a6f',
							name: 'Helpdesk Agent',
						},
						{
							id: '62a711947db733390f9c9a79',
							name: 'Onboarding Agent',
						},
						{
							id: '62539d437e59dd7c8a4c8080',
							name: 'Notification Admin',
						},
						{
							id: '62a711957db733390f9c9a8a',
							name: 'Knowledge Base Admin',
						},
						{
							id: '62539d437e59dd7c8a4c808b',
							name: 'System Admin',
						},
					],
				},
				{
					_id: '640ebb2c9f4da96fc0554d0b',
					appId: '640eb6f51bfbcede577c4fb6',
					botId: '5c25fe9530521e0027a14779',
					itemId: 'TSLM000002',
					__v: 0,
					createdAt: '2023-03-13T05:57:00.841Z',
					initiatedBy: 'arpan@leena.ai',
					initiatedByUserObj: {
						name: 'Louisa Cronauer',
						email: 'arpan@leena.ai',
						employeeId: '102',
						displayName: 'Louisa Cronauer',
					},
					participants: [
						'arpan@leena.ai',
						'shubham@leena.ai',
						'min1322',
						'',
					],
					status: 'completed',
					updatedAt: '2023-03-13T05:59:05.218Z',
					completedAt: '2023-03-13T05:59:05.218Z',
					timeTaken: 124,
					userObj: {
						name: 'Louisa Cronauer',
						email: 'arpan@leena.ai',
						employeeId: '102',
						department: 'Human Resources',
						designation: 'Manager, Human Resources',
						displayName: 'Louisa Cronauer',
					},
					lastStepsName: 'approval node',
					actionUser: {
						name: 'Minakshi',
						email: 'minakshi@leena.ai',
						employeeId: 'min1322',
						designation: 'Manager',
						displayName: 'Minakshi',
					},
					formFieldsResponse: {
						'640eb6f61bfbcede577c4fc5': {
							'640eb6fa1bfbcede577c4fca': 'dg',
							'640eb6fb1bfbcede577c4fcd': 'fgh',
						},
					},
				},
				{
					_id: '640ebb2c9f4da96fc0554d0c',
					appId: '640eb6f51bfbcede577c4fb6',
					botId: '5c25fe9530521e0027a14779',
					itemId: 'TSLM000002',
					__v: 0,
					createdAt: '2023-03-13T05:57:00.841Z',
					initiatedBy: 'arpan@leena.ai',
					initiatedByUserObj: {
						name: 'Louisa Cronauer',
						email: 'arpan@leena.ai',
						employeeId: '102',
						displayName: 'Louisa Cronauer',
					},
					participants: [
						'arpan@leena.ai',
						'shubham@leena.ai',
						'min1322',
						'',
					],
					status: 'completed',
					updatedAt: '2023-03-13T05:59:05.218Z',
					completedAt: '2023-03-13T05:59:05.218Z',
					timeTaken: 124,
					userObj: {
						name: 'Louisa Cronauer',
						email: 'arpan@leena.ai',
						employeeId: '102',
						department: 'Human Resources',
						designation: 'Manager, Human Resources',
						displayName: 'Louisa Cronauer',
					},
					lastStepsName: 'approval node',
					actionUser: {
						name: 'Minakshi',
						email: 'minakshi@leena.ai',
						employeeId: 'min1322',
						designation: 'Manager',
						displayName: 'Minakshi',
					},
					formFieldsResponse: {
						'640eb6f61bfbcede577c4fc5': {
							'640eb6fa1bfbcede577c4fca': 'dg',
							'640eb6fb1bfbcede577c4fcd': 'fgh',
						},
					},
				},
				{
					_id: '640ebb2c9f4da96fc0554d0d',
					appId: '640eb6f51bfbcede577c4fb6',
					botId: '5c25fe9530521e0027a14779',
					itemId: 'TSLM000002',
					__v: 0,
					createdAt: '2023-03-13T05:57:00.841Z',
					initiatedBy: 'arpan@leena.ai',
					initiatedByUserObj: {
						name: 'Louisa Cronauer',
						email: 'arpan@leena.ai',
						employeeId: '102',
						displayName: 'Louisa Cronauer',
					},
					participants: [
						'arpan@leena.ai',
						'shubham@leena.ai',
						'min1322',
						'',
					],
					status: 'completed',
					updatedAt: '2023-03-13T05:59:05.218Z',
					completedAt: '2023-03-13T05:59:05.218Z',
					timeTaken: 124,
					userObj: {
						name: 'Louisa Cronauer',
						email: 'arpan@leena.ai',
						employeeId: '102',
						department: 'Human Resources',
						designation: 'Manager, Human Resources',
						displayName: 'Louisa Cronauer',
					},
					lastStepsName: 'approval node',
					actionUser: {
						name: 'Minakshi',
						email: 'minakshi@leena.ai',
						employeeId: 'min1322',
						designation: 'Manager',
						displayName: 'Minakshi',
					},
					formFieldsResponse: {
						'640eb6f61bfbcede577c4fc5': {
							'640eb6fa1bfbcede577c4fca': 'dg',
							'640eb6fb1bfbcede577c4fcd': 'fgh',
						},
					},
				},
			],
			pagination: {
				current: 1,
				total: 200,
			},
			forms: [
				{
					_id: '640eb6f61bfbcede577c4fc5',
					bot: '5c25fe9530521e0027a14779',
					app: '640eb6f51bfbcede577c4fb6',
					title: 'New form 1',
					sections: [
						{
							_id: '640eb6f81bfbcede577c4fc7',
							bot: '5c25fe9530521e0027a14779',
							appId: '640eb6f51bfbcede577c4fb6',
							formId: '640eb6f61bfbcede577c4fc5',
							title: 'New form section',
							isTable: false,
							fields: [
								{
									label: 'Label',
									componentType: 'INPUT',
									isEditable: true,
									isRequired: true,
									isVisible: true,
									visibilityToggle: false,
									options: [],
									allowedExtensions: [],
									fieldType: {
										label: 'Input',
										value: 'text',
									},
									_id: '640eb6fa1bfbcede577c4fca',
								},
								{
									label: 'Label',
									componentType: 'TEXTAREA',
									isEditable: true,
									isRequired: true,
									isVisible: true,
									visibilityToggle: false,
									allowedExtensions: [],
									_id: '640eb6fb1bfbcede577c4fcd',
									options: [],
								},
							],
							createdAt: '2023-03-13T05:39:04.651Z',
							__v: 0,
							updatedAt: '2023-03-13T05:39:07.849Z',
						},
					],
					createdAt: '2023-03-13T05:39:02.871Z',
					__v: 0,
					updatedAt: '2023-03-13T05:39:04.659Z',
				},
			],
		};
	} catch (error) {
		console.log(error);
	}
	// return [
	// 	{
	// 		id: 1,
	// 		firstName: 'Raman 1',
	// 		lastName: 'Choudhary',
	// 		imageUrl: '',
	// 		nested: {
	// 			l1: 'level2',
	// 		},
	// 	},
	// 	{ id: 2, firstName: 'Raman 2', lastName: 'Choudhary', imageUrl: '' },
	// 	{ id: 3, firstName: 'Raman 3', lastName: 'Choudhary', imageUrl: '' },
	// 	{ id: 4, firstName: 'Raman 4', lastName: 'Choudhary', imageUrl: '' },
	// 	{ id: 5, firstName: 'Raman 5', lastName: 'Choudhary', imageUrl: '' },
	// 	{ id: 6, firstName: 'Raman 6', lastName: 'Choudhary', imageUrl: '' },
	// 	{
	// 		id: 7,
	// 		firstName: 'Raman 7',
	// 		lastName: 'Choudhary',
	// 		imageUrl: '',
	// 		nested: {
	// 			l1: 'level1',
	// 		},
	// 	},
	// ];
};

export const getNestedData = async (data, nestedField) => ({ data: true });

export const COLUMNS = [
	{
		field: 'actionUser',
		label: 'User Avatar ',
		isVisible: true,
		sortable: true,
		width: 300,
		type: 'user',
		isMandatory: true,
	},
	{
		field: 'completed',
		label: 'Attachments',
		width: 120,
		isVisible: true,
		render: row => <p>Custom</p>,
		type: 'attachment',
	},
	{
		field: 'completedAt',
		label: 'Date/Time',
		type: 'date-time',
		sortable: true,
		options: {
			dateFormat: 'DD MMM, YYYY',
		},
		isVisible: true,
	},
	{
		field: 'lastStepsName1',
		label: 'Last Step Name',
		isVisible: false,
	},
	{
		field: 'lastStepsName2',
		label: 'Last Step Name 2',
		isVisible: false,
	},
	{
		field: 'lastStepsName3',
		label: 'Last Step Name 3',
		isVisible: false,
	},
	{
		field: 'timeTaken',
		label: 'Link test',
		type: 'link',
		isVisible: true,
		redirectTo: `www.google.com`,
		onCellClick: function (data) {},
	},
	{
		field: 'status',
		label: 'Status',
		type: 'chip',
		isVisible: true,
	},
	{
		field: 'roles',
		fieldItem: 'name',
		limitTag: 2,
		label: 'Roles',
		type: 'chipArray',
		isVisible: true,
	},
	{
		field: 'icon',
		label: '',
		type: 'icon',
		iconName: 'PencilSimple',
		iconSize: 20,
		iconColor: 'D-50',
		isVisible: true,
	},
];

// dynamic form config
export const FILTERS = [
	{
		name: 'code',
		type: 'multipleSelect',
		label: 'Leave Type',
		props: {
			placeholder: 'Select option',
			options: [
				{
					label: 'Adoption',
					value: 'ADF',
				},
				{
					label: 'Annual Leave',
					value: 'ANNL',
				},
				{
					label: 'Annual Leave',
					value: 'ANNL1',
				},
				{
					label: 'Annual Leave',
					value: 'ANNL2',
				},
				{
					label: 'Annual Leave',
					value: 'ANNL3',
				},
			],
		},
	},
	{
		name: 'code2',
		type: 'multipleSelect',
		label: 'Leave Type',
		props: {
			placeholder: 'Select option',
			options: [
				{
					label: 'Adoption',
					value: 'ADF',
				},
				{
					label: 'Annual Leave',
					value: 'ANNL',
				},
			],
		},
	},
];
