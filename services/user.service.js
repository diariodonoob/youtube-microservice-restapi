

const dbService = require('moleculer-db')

module.exports = {
    name: 'users',
    mixins: [dbService]
}