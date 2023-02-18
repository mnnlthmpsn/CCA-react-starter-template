import type IUseCase from "Core/usecase";
import Employee from "Domain/entities/employee";
import type IEmployeeRepository from "Domain/repositories/employeeRepository";
import { injectable, inject } from "tsyringe";

@injectable()
class GetAllEmployees implements IUseCase<Employee[], any> {

    constructor(@inject("IEmployeeRepository") private employeeRepository: IEmployeeRepository) {}

    async execute() {
        return await this.employeeRepository.getAllEmployees();
    }    
}

export default GetAllEmployees