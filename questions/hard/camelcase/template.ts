export type CamelCase<S extends string> = Lowercase<S> extends `${infer W}_${infer L}${infer R}`
    ? `${W}${Uppercase<L>}${CamelCase<R>}`
    : Lowercase<S>
