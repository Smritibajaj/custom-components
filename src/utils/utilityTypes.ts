/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
export type FirstCharacter<S extends string> = S extends `${infer C}${string}`
	? C
	: never;

export type ReadOnlyArrayToUnion<T extends ReadonlyArray<any>> = keyof {
	[K in T extends ReadonlyArray<infer U> ? U : never]: never;
};
