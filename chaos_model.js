let NP = require('number-precision');
let big = require('big.js');
let f = require('float');

let e = [];

const c1 = -1.7;
const c2 = 0.72;

const A = 0.5;

module.exports = {
    ukX1: (k, x, u) => {
        return (k <= 1) ? x[0] : f.round(1.76 -  x[1] * x[1] - 0.1 * x[2] + u,6);
    },
    X1: (k, x) => {
        return (k <= 1) ? x[0] : f.round(1.76 -  x[1] * x[1] - 0.1 * x[2],6);
    },
    X2: (k, x) => {
        return (k <= 1) ? x[1] : f.round(x[0],6);
    },
    X3: (k, x) => {
        return (k <= 1) ? x[2] : f.round(x[1],6);
    },
    createUk: (X, Y) => {

        e[0] = f.round(Y[0] - X[0]);
        e[1] = f.round(Y[1] - X[1]);
        e[2] = f.round(Y[2] - X[2]);

        let s = f.round(e[0] + (c1 * e[1]) + (c2 * e[2]));
        let u = f.round(((X[1]**2) - (Y[1]**2) - (0.1 * e[2]) + (c1 * e[0]) + (c2 * e[1]) - e[0] - (c1 * e[1]) - (c2 * e[2])) + (A * s));

        return f.round(u,6);
    }
}