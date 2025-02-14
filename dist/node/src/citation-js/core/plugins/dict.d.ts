export function add(name: any, dict: any): void
export function remove(name: any): void
export function has(name: any): any
export function list(): string[]
export function get(name: any): any
export const register: Register
export namespace htmlDict {
  const wr_start: string
  const wr_end: string
  const en_start: string
  const en_end: string
  const ul_start: string
  const ul_end: string
  const li_start: string
  const li_end: string
}
export namespace textDict {
  const wr_start_1: string
  export { wr_start_1 as wr_start }
  const wr_end_1: string
  export { wr_end_1 as wr_end }
  const en_start_1: string
  export { en_start_1 as en_start }
  const en_end_1: string
  export { en_end_1 as en_end }
  const ul_start_1: string
  export { ul_start_1 as ul_start }
  const ul_end_1: string
  export { ul_end_1 as ul_end }
  const li_start_1: string
  export { li_start_1 as li_start }
  const li_end_1: string
  export { li_end_1 as li_end }
}
import Register from '../util/register.js'
