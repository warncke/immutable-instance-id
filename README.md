# immutable-instance-id

    const instanceId = require('immutable-instance-id')

    /* {
     *     id: 'af7f52d9d8f7dcfb8fda5cb15814ef61',
     *     timestamp: '2017-09-01 12:36:11.032569'
     * }
     */

Generate a random id once per process using the
[Random Unique Id](https://www.npmjs.com/package/random-unique-id) module.

Instance Id is an object with a property `id` which is a 128 bit (32 char)
lower case hex string and a property `timestamp` with is a string indicating
the time that the id was generated in MySQL compatible microsecond format.

The Instance Id is stored in `global.__immutable_instance_id__` and will not
change even if the module file is executed multiple times.

Immutable Instance Id integrates with the
[Immutable App](https://www.npmjs.com/package/immutable-app) ecosystem to
provide unique ids that are used for logging, debugging and testing.