import httpClient from './http.service'

class EmployeeService {

    newEmployee(data) {
        return httpClient.post('/new-employees', data).then(response => {
            return response.data
        })
    }
    getApplications(data) {
        return httpClient.post('/petition', data).then(response => {
            return response.data
    })
    }
}
export default new EmployeeService()