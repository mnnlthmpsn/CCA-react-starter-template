import { AxiosClient } from "Core/network/httpClient";
import EmployeeRepositoryImpl from "Data/repositories/employeeRepositoryImpl";
import EmployeeRemoteDataSource from "Data/dataSource/employeeRemoteDataSource";
import { container } from "tsyringe";

class DI {
  static init() {
    container.register("IEmployeeRepository", { useClass: EmployeeRepositoryImpl });
    container.register("IEmployeeRemoteDataSource", {
      useClass: EmployeeRemoteDataSource,
    });
    container.register("IHttpClient", { useClass: AxiosClient });
  }
}

export default DI;
