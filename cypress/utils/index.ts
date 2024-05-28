export enum ScrollType {
	scrollable='scrollable',
	nonScrollable='non-scrollable',
}
export const isXScrollable = (element: HTMLElement) => {
	return element.scrollWidth > element.clientWidth
};
export const isYScrollable = (element: HTMLElement) => {
	return element.scrollHeight > element.clientHeight;
}
export const isScrollable = (element: HTMLElement) => {
	return isXScrollable(element) || isYScrollable(element)
}