const sinon = require('sinon')
const requester = require('../../../services/db-requester')
const dbModelMock = {
    find: () => {},
    findOne: () => {},
    findOneAndUpdate: () => {},
    findOneAndDelete: () => {},
    create: () => {}
}

module.exports = chai => {
    const expect = chai.expect
    const requesterMock = sinon.mock(requester)

    afterEach(() => {
        requesterMock.restore()
    })

    describe('DB Requester methods calls test', () => {
        it('should verify that "getAll" method is called', done => {
            requesterMock.expects('getAll').once().throws()
            requesterMock.verify
            done()
        })

        it('should verify that "getById" method is called', done => {
            requesterMock.expects('getById').once().throws()
            requesterMock.verify
            done()
        })

        it('should verify that "post" method is called', done => {
            requesterMock.expects('post').once().throws()
            requesterMock.verify
            done()
        })

        it('should verify that "update" method is called', done => {
            requesterMock.expects('update').once().throws()
            requesterMock.verify
            done()
        })

        it('should verify that "delete" method is called', done => {
            requesterMock.expects('delete').once().throws()
            requesterMock.verify
            done()
        })
    })

    describe('DB Requester service methods return test', () => {

        it('should verify "getAll" method returns Promise', done => {
            let getAllSpy = sinon.spy(requester, 'getAll')

            requester.getAll(dbModelMock)
                .then((response) => {
                    expect(response).to.not.be.null
                })

            getAllSpy.restore()
            done()
        })

        it('should verify "getById" method returns Promise', done => {
            let getByIdSpy = sinon.spy(requester, 'getById')

            requester.getById(dbModelMock)
                .then((response) => {
                    expect(response).to.not.be.null
                })

            getByIdSpy.restore()
            done()
        })

        it('should verify "delete" method returns Promise', done => {
            let deleteSpy = sinon.spy(requester, 'delete')

            requester.delete(dbModelMock)
                .then((response) => {
                    expect(response).to.not.be.null
                })

            deleteSpy.restore()
            done()
        })

        it('should verify "update" method returns Promise', done => {
            let updateSpy = sinon.spy(requester, 'update')

            requester.update(dbModelMock)
                .then((response) => {
                    expect(response).to.not.be.null
                })

            updateSpy.restore()
            done()
        })

        it('should verify "post" method returns Promise', done => {
            let postSpy = sinon.spy(requester, 'post')

            requester.post(dbModelMock)
                .then((response) => {
                    expect(response).to.not.be.null
                })

            postSpy.restore()
            done()
        })
    })
}