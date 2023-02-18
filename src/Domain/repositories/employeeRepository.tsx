import Employee from "Domain/entities/employee";

interface IEmployeeRepository {
    getAllEmployees: () => Promise<Employee[]>
    addEmployee: (payload: any) => Promise<Employee>
}

export default IEmployeeRepository