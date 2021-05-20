import { post } from "../utils/request";

export function loginApi(data) {
    return post('https://avartus.cmu.edu.au/api/v1/auth', data)
}