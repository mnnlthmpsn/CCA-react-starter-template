import { routeConstants, useRoute } from "Core/router"
import Header from "Presentation/shared/header"
import { Fragment } from "react"
import EmployeeCard from "../Components/employeeCard"
import useEmployeeList from "../ViewModel/employeListViewModel"

const EmployeeList = () => {
    const { employees } = useEmployeeList()
    const { to } = useRoute()

    return (
        <Fragment>
            <Header />
            <div className="container">
                <div className="flex py-4 justify-between">
                    <p className="font-bold">All Registered Employees</p>
                    <div>
                        <button className="btn" onClick={() => to(routeConstants.ADD_EMPLOYEE)}>Add Employee to List</button>
                    </div>
                </div>
                <div className="flex flex-col space-y-4">
                    {
                        employees.map(employee => (
                            <EmployeeCard employee={employee} />
                        ))
                    }
                </div>
            </div>
        </Fragment>
    )
}

export default EmployeeList