import IUseCase from "Core/usecase";
import Employee from "Domain/entities/employee";
import type IEmployeeRepository from "Domain/repositories/employeeRepository";
import { inject, injectable } from "tsyringe"

@injectable()
class AddEmployee implements IUseCase<Employee, any> {

    constructor(@inject("IEmployeeRepository") private _employeeRepository: IEmployeeRepository) { }

    async execute(params?: any) {
        return await this._employeeRepository.addEmployee(params)
    }
}

export default AddEmployee