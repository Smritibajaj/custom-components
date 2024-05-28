export type FirstCharacter<S extends string> = S extends `${infer C}${string}` ? C : never;
export type ReadOnlyArrayToUnion<T extends ReadonlyArray<any>> = keyof {
    [K in T extends ReadonlyArray<infer U> ? U : never]: never;
};
//# sourceMappingURL=utilityTypes.d.ts.map