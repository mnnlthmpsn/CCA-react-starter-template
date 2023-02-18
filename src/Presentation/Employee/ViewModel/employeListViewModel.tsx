import Employee from "Domain/entities/employee";
import GetAllEmployees from "Domain/usecases/getAllEmployees";
import { useEffect, useState } from "react";
import { container } from "tsyringe"

const useEmployeeList = () => {

    const getEmployees = container.resolve(GetAllEmployees);
    const [employees, setEmployees] = useState<Employee[]>([])

    const _getEmployees = async () => {
        setEmployees(await getEmployees.execute())
    }

    useEffect(() => {
        _getEmployees()
    }, [])

    return { employees }
}

export default useEmployeeList