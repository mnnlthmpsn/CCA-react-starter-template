export default class Employee {
  constructor(
    public first_name: string,
    public last_name: string,
    public email: string,
    public id?: number,
  ) {}
}