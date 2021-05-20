export function getToken() {
    return localStorage.getItem('token')
}

export function setToken(token) {
    localStorage.setItem('token', token)
}

export function getOpt_uuid() {
    return localStorage.getItem('Opt_uuid')
}

export function setOpt_uuid(Opt_uuid) {
    return localStorage.setItem('Opt_uuid', Opt_uuid)
}

export function isLogined() {
    if (localStorage.getItem('token')) {
        return true;
    }
    return false;
}