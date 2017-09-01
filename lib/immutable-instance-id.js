'use strict'

/* npm modules */
const defined = require('if-defined')
const randomUniqueId = require('random-unique-id')

// generate instance id if not set
if (!defined(global.__immutable_instance_id__)) {
    global.__immutable_instance_id__ = randomUniqueId()
}

// all modules that require will get the same instance id
module.exports = global.__immutable_instance_id__