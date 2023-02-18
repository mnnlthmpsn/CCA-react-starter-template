import { lazy } from "react";
import { createBrowserRouter, useNavigate } from "react-router-dom";

export enum routeConstants {
    HOME = '/',
    ADD_EMPLOYEE = '/add-employee'
}

const EmployeeList = lazy(() => import("Presentation/Employee/Views/ListAllEmployees"))
const AddEmployee = lazy(() => import("Presentation/Employee/Views/AddEmployee"))

const router = createBrowserRouter([
    { path: routeConstants.HOME, element: <EmployeeList /> },
    { path: routeConstants.ADD_EMPLOYEE, element: <AddEmployee /> },
])

export const useRoute = () => {
    const navigator = useNavigate();

    const to = (route: string, replace?: boolean) => navigator(route, { replace })

    return { to }
}

export default router