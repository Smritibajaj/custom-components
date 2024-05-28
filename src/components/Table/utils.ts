import get from 'lodash/get';

export const getValue = (field: string, row: any, fallback?: string) =>
	get(row, field, fallback);
