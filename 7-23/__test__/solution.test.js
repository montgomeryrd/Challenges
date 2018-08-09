'use strict';

const Solution = require('../lib/solution');
require('jest');

describe('Solution', () => {

    let list1 = [ { username: 'David', status: 'online', lastActivity: 10 },
    { username: 'Lucy', status: 'online', lastActivity: 0 },
    { username: 'Bob', status: 'online', lastActivity: 3 },
    { username: 'Julie', status: 'offline', lastActivity: 104 },
    { username: 'Lenny', status: 'online', lastActivity: 38 } ];

    it('should check a user\'s status and determine whether they are active online, away, or offline and return a hash table of user\'s statuses', () => {
        expect(Solution(list1)).toEqual({"away": ["Lenny"], "offline": ["Julie"], "online": ["David", "Lucy", "Bob"]});
    });

    let list2 = [ { username: 'David', status: 'online', lastActivity: 10 },
    { username: 'Lucy', status: 'online', lastActivity: 0 },
    { username: 'Bob', status: 'offline', lastActivity: 104 },
    { username: 'Julie', status: 'online', lastActivity: 3 },
    { username: 'Lenny', status: 'online', lastActivity: 38 },
    { username: 'Charlie', status: 'online', lastActivity: 34 },
    { username: 'Jemma', status: 'offline', lastActivity: 2 },
    { username: 'Tom', status: 'online', lastActivity: 11 },
    { username: 'Tommy', status: 'online', lastActivity: 9 },
    { username: 'Jonny', status: 'online', lastActivity: 4 },
    { username: 'Natalie', status: 'offline', lastActivity: 97 } ];

    it('should check a user\'s status and determine whether they are active online, away, or offline and return a hash table of user\'s statuses', () => {
        expect(Solution(list2)).toEqual({"away": ["Lenny", "Charlie", "Tom"], "offline": ["Bob", "Jemma", "Natalie"], "online": ["David", "Lucy", "Julie", "Tommy", "Jonny"]});
    });

    let list3 = [];

    it('should check a user\'s status and determine whether they are active online, away, or offline and return a hash table of user\'s statuses', () => {
        expect(Solution(list3)).toEqual({});
    });
});