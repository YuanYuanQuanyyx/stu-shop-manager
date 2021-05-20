export function getToken() {
    return localStorage.getItem('token')
}

export function setToken(token) {
    localStorage.setItem('token', token)
}

export function getOtp_uuid() {
    return localStorage.getItem('Otp_uuid')
}

export function setOtp_uuid(Otp_uuid) {
    return localStorage.setItem('Otp_uuid', Otp_uuid)
}

export function isLogined() {
    if (localStorage.getItem('token')) {
        return true;
    }
    return false;
}