type falseTypes =
    | 0
    | ''
    | false
    | []
    | {[key: string]: never}
;
export type AnyOf<T extends readonly any[]> = T[number] extends falseTypes ? false : true;