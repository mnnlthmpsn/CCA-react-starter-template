import type { IEmployeeRemoteDataSource } from "Data/dataSource/employeeRemoteDataSource";
import IEmployeeRepository from "Domain/repositories/employeeRepository";
import { injectable, inject } from "tsyringe";

@injectable()
class EmployeeRepositoryImpl implements IEmployeeRepository {
   constructor(@inject("IEmployeeRemoteDataSource") private _employeeDataSource: IEmployeeRemoteDataSource) {}

   async getAllEmployees() {
    return await this._employeeDataSource.getAllEmployees();
   }

   async addEmployee(payload: string) {
      return await this._employeeDataSource.addEmployee(payload)
   }
}

export default EmployeeRepositoryImpl