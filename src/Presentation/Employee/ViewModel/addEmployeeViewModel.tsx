import Employee from "Domain/entities/employee"
import AddEmployee from "Domain/usecases/addEmployee"
import { FormEvent, useState } from "react"
import { container } from "tsyringe"

const useAddEmployee = () => {
    const _addEmployee = container.resolve(AddEmployee)
    const [employee, setEmployee] = useState({ email: '', first_name: '', last_name: '' });

    const addEmployee = async (e: FormEvent) => {
        e.preventDefault()
        const payload = JSON.stringify(employee)
        const res = await _addEmployee.execute(payload)
        console.log(res);
    }

    return { employee, setEmployee, addEmployee }
}

export default useAddEmployee