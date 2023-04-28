export type Awaited<type> = type extends Promise<infer promiseType> ? promiseType : never
