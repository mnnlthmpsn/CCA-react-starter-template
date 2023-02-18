import type { IHttpClient } from "Core/network/httpClient";
import EmployeeModel, { EmployeeModelFactory } from "Data/models/employeeModel";
import { injectable, inject } from "tsyringe";

export interface IEmployeeRemoteDataSource {
    getAllEmployees: () => Promise<EmployeeModel[]>
    addEmployee: (payload: any) => Promise<EmployeeModel>
}

@injectable()
class EmployeeRemoteDataSource implements IEmployeeRemoteDataSource {
    constructor(@inject("IHttpClient") private _httpClient: IHttpClient) {}
    
    async getAllEmployees() {
        const res = await this._httpClient.get('http://localhost:3000/employees');
        return EmployeeModelFactory.fromJsonArray(res);
    }

    async addEmployee(payload: string) {
        const res = await this._httpClient.post('http://localhost:3000/employees', payload)
        console.log(res)
        return EmployeeModelFactory.fromJson(res)
    } 
}

export default EmployeeRemoteDataSource