export default Register
declare class Register {
  constructor(data?: {})
  data: {}
  set(key: any, value: any): Register
  add(...args: any[]): Register
  delete(key: any): Register
  remove(...args: any[]): Register
  get(key: any): any
  has(key: any): any
  list(): string[]
}
