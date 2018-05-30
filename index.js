'use strict';

const { create, env } = require('sanctuary');
const checkTypes = process.env.NODE_ENV != 'production';
const Future = require('fluture');

Future.prototype.then = function(res, rej) {
    return this.bimap(rej, res).promise();
};

module.exports = function(typeSystem) {
    return {
        S: create({
            checkTypes: typeSystem || checkTypes,
            env: env.concat(require('fluture-sanctuary-types').env)
        }),
        Future
    };
};
