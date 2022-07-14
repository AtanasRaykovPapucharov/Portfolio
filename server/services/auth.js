const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'

module.exports.isAuth = (req) => {
    let authCookie = req.cookies['heroku-api-access-token']

    if(!authCookie) {
        let authHeader = req.headers['x-auth-token']

        if(!authHeader) {
            console.log('API user not authenticated!')
            return false
        } else {
            if(!(AUTH_TOKEN === authHeader.split(' ')[0])) {
                console.log('API user not authenticated!')
                return false
            } else {
                console.log('API user connected!')
                return true
            }
        }
    } else {
        authCookie = JSON.parse(authCookie).token.split('.')
        if(!(AUTH_TOKEN === authCookie[0])) {
            console.log('API user not authenticated!')
            return false
        } else {
            console.log('API user connected!')
            return true
        }
    }
}
