import Employee from "Domain/entities/employee";

class EmployeeModel extends Employee {
  constructor(
    public id: number,
    public first_name: string,
    public last_name: string,
    public email: string
  ) {
    super(id, first_name, last_name, email);
  }

  toJson(): string {
    const json = {
      id: this.id,
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
    };
    return JSON.stringify(json);
  }
}

export class EmployeeModelFactory {
  static fromJson(json: any): EmployeeModel {
    return new EmployeeModel(
      json["id"],
      json["first_name"],
      json["last_name"],
      json["email"]
    );
  }

  static fromJsonArray(res_body: any): EmployeeModel[] {
    const empArr: EmployeeModel[] = [];

    res_body.forEach((json: any) => {
      const newEmployee: EmployeeModel = new EmployeeModel(
        json["id"],
        json["first_name"],
        json["last_name"],
        json["email"]
      )

      empArr.push(newEmployee)
    })

    return empArr;
  }
}

export default EmployeeModel;
