export type Capitalize<S extends string> = S extends `${infer L}${infer W}`
    ? `${Uppercase<L>}${W}`
    : S
