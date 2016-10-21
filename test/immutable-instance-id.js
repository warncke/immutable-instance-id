'use strict'

const assert = require('chai').assert

describe('immutable instance id', function () {

    it('should return a new random id when required', function () {
        // get instance id
        var instanceId = require('../lib/immutable-instance-id')
        // validate instance id data
        assert.match(instanceId.id, /^[0-9A-Z]{32}$/)
        assert.match(instanceId.timestamp, /^\d\d\d\d-\d\d-\d\d \d\d:\d\d:\d\d\.\d\d\d\d\d\d$/)
    })

    it('should return the same id while running hte same process', function () {
        // get instance id multiple times
        var instanceId1 = require('../lib/immutable-instance-id')
        var instanceId2 = require('../lib/immutable-instance-id')
        // validate that instance ids match
        assert.deepEqual(instanceId1, instanceId2)
    })
})