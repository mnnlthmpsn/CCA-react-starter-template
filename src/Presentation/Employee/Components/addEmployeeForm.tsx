import useAddEmployee from "../ViewModel/addEmployeeViewModel"

const AddEmployeeForm = () => {

    const { employee, setEmployee, addEmployee } = useAddEmployee()

    return (
        <form className="flex flex-col space-y-4 border rounded-md p-16" onSubmit={addEmployee}>
            <div className="flex flex-col space-y-1">
                <label htmlFor="first_name" className="text-sm font-semibold text-slate-700">FirstName</label>
                <input type="text" className="form-control" onChange={e => setEmployee({...employee, first_name: e.target.value})} />
            </div>

            <div className="flex flex-col space-y-1">
                <label htmlFor="last_name" className="text-sm font-semibold text-slate-700">LastName</label>
                <input type="text" className="form-control"  onChange={e => setEmployee({ ...employee, last_name: e.target.value })}/>
            </div>

            <div className="flex flex-col space-y-1">
                <label htmlFor="email" className="text-sm font-semibold text-slate-700">Email</label>
                <input type="email" className="form-control" onChange={e => setEmployee({ ...employee, email: e.target.value})} />
            </div>

            <div className="flex justify-end">
                <button className="btn" type="submit">Add Employee</button>
            </div>
        </form>
    )
}

export default AddEmployeeForm