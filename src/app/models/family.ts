export interface Page {
  readonly families: Family[]
}

export interface Family {
  readonly name: string
  readonly values: readonly Value[]
}

export interface Value {
  readonly id: string
  readonly value?: string | number
}
