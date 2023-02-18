import Header from "Presentation/shared/header"
import { Fragment } from "react"
import AddEmployeeForm from "../Components/addEmployeeForm"

const AddEmployee = () => {
    return (
        <Fragment>
            <Header />
            <div className="container">
                <p className="font-bold py-4">All Registered Employees</p>

                <AddEmployeeForm />
            </div>
        </Fragment>
    )
}

export default AddEmployee