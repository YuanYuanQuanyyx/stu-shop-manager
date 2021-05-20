import jwt_decode from 'jwt-decode'

export function ifExpire() {
    var isExpired = false;
    var decodedToken = jwt_decode(localStorage.getItem('token'));
    var dateNow = new Date();
    var timestamp = Number.parseInt(dateNow.getTime().toString().substring(0, 10));
    if(decodedToken.exp < timestamp) {
        isExpired = true;
    }

    return isExpired
}
