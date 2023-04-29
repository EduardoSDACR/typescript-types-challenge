export type ControlsMap = {
  c: 'char'
  s: 'string'
  d: 'dec'
  o: 'oct'
  h: 'hex'
  f: 'float'
  p: 'pointer'
}

export type ParsePrintFormat<S extends string> = S extends `${infer W}%${infer L}${infer R}`
    ? L extends keyof ControlsMap
        ? [ControlsMap[L], ...ParsePrintFormat<R>]
        : ParsePrintFormat<R>
    : []
