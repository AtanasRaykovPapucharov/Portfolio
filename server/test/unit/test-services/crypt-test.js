const crypto = require('../../../services/crypt')

module.exports = chai => {
    const expect = chai.expect
    const password = '1qazxsW2'

    describe('Crypto test', () => {

        it('should verify decrypted password is equal to hashed password', done => {
            let salt = crypto.generateSalt()
            let hashedPassword = crypto.generateHashedPassword(password, salt)
            let encryptedPassword = crypto.encrypt(hashedPassword, salt)
            let decryptedPassword = crypto.decrypt(encryptedPassword, salt)

            expect(decryptedPassword).to.eql(hashedPassword)
            done()
        })
    })
}
