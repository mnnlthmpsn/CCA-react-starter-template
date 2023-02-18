import Employee from "Domain/entities/employee";

interface EmployeeProps {
    employee: Employee
}

const EmployeeCard = ({ employee }: EmployeeProps) => {

    return (
        <div className="py-3 px-5 rounded-md border">
            <div className="flex flex-col">
                <p className="font-bold text-cyan-900">{`${employee.first_name} ${employee.last_name}`}</p>
                <p className="text-xs">{employee.email}</p>
            </div>
        </div>
    )
}

export default EmployeeCard