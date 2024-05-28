export const sleep = (duration = 5000) =>
	new Promise<void>(resolve => {
		setTimeout(() => resolve(), duration);
	});
