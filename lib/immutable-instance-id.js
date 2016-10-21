'use strict'

/* npm modules */
var randomUniqueId = require('random-unique-id')

// generate new random id for this instance
var instanceId = randomUniqueId()
// all modules that require will get the same instance id
module.exports = instanceId