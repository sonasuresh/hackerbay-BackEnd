/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
const { expect } = require('chai');
const request = require('supertest');
const app = require('../app');

let token;

describe('Authentication', () => {
    const data = {
        original: {
            foo: 'bar',
        },
        patch: [
            {
                op: 'add',
                path: '/foo',
                value: '1',
            },
        ],
    };
    it('login success', (done) => {
        request(app)
            .post('/users/signin')
            .end((err, res) => {
                if (err) return done(err);
                expect(res.statusCode).to.equal(200);
                token = res.body.token;
                done();
            });
    });
});

describe('JSON patch', () => {
    const data = {
        original: {
            fruits: 'banana',
        },
        patch: [
            {
                op: 'add',
                path: '/fruits',
                value: 'apple',
            },
        ],
    };
    it('json Patch success ', (done) => {
        request(app)
            .post('/json/patch')
            .set({ Authorization: `Bearer ${token}` })
            .send(data)
            .expect('Content-Type', /json/)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.statusCode).to.equal(200);
                done();
            });
    });
    const invaliddata = {

    };
    it('json Patch failure ', (done) => {
        request(app)
            .post('/json/patch')
            .set({ Authorization: `Bearer ${token}` })
            .send(invaliddata)
            .end((err, res) => {
                expect(res.statusCode).to.equal(400);
                done();
            });
    });
});

describe('image thumbnail', () => {
    const url = 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png';
    const invalidUrl = 'https://homepages.cae.wisc.edu/~ece533/images/airplan';


    it('image thumbnail success', (done) => {
        request(app)
            .post('/image/resize')
            .set({ Authorization: `Bearer ${token}` })
            .send({ url })
            .end((err, res) => {
                expect(res.statusCode).to.equal(200);
                done();
            });
    });
    it('image thumbnail failure', (done) => {
        request(app)
            .post('/json/patch')
            .set({ Authorization: `Bearer ${token}` })
            .send({ url: invalidUrl })
            .end((err, res) => {
                expect(res.statusCode).to.equal(400);
                done();
            });
    });
});
