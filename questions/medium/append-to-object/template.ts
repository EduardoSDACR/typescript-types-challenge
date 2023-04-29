export type AppendToObject<T, U extends string | number, V> = {
    [P in keyof T | U]: P extends keyof T ? T[P] : V
}