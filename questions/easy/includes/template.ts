export type Includes<T extends readonly any[], U> = {
    [P in T[number]]: P
}[U] extends U ? true : false;
